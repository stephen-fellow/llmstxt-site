import json
from tqdm import tqdm
import os
from .data_models import Product
from typing import List


def validate_products(data_raw_items: list[dict]) -> tuple[list[Product], list[dict]]:
    """
    Validate products from JSON file against the Product dataclass.
    Returns tuple of (valid_products, invalid_products)
    """

    valid_products = []
    invalid_products = []

    for item in tqdm(data_raw_items):
        try:
            # Convert JSON keys to match dataclass field names
            product_data = {
                "product": item["product"],
                "website": item["website"],
                "llms_txt": (
                    None
                    if item.get("llms-txt", None) == ""
                    else item.get("llms-txt", None)
                ),
                "llms_full_txt": (
                    None
                    if item.get("llms-full-txt", None) == ""
                    else item.get("llms-full-txt", None)
                ),
            }

            # This will raise an exception if the data doesn't match the dataclass
            product = Product(**product_data)
            valid_products.append(product)

        except (KeyError, TypeError) as e:
            invalid_products.append(
                {"product": item.get("product", "Unknown"), "error": str(e)}
            )

    return valid_products, invalid_products


def get_new_products(
    valid_products: List[Product], existing_products_path: str
) -> List[str]:
    """
    Compare valid products against existing product directories to find new ones that need processing.

    Args:
        valid_products: List of Product objects to check
        existing_products_path: Path to directory containing existing product folders

    Returns:
        List of product names that don't have existing directories
    """
    existing = [
        d
        for d in os.listdir(existing_products_path)
        if os.path.isdir(os.path.join(existing_products_path, d))
    ]

    return [p for p in valid_products if p.product not in existing]


if __name__ == "__main__":
    # ./scripts
    SCRIPTS_PATH = os.path.dirname(os.path.abspath(__file__))
    # ./data.json
    DATA_RAW_PATH = os.path.join(os.path.dirname(SCRIPTS_PATH), "data.json")

    with open(DATA_RAW_PATH) as f:
        data_raw_items = json.load(f)

    valid_products, invalid_products = validate_products(data_raw_items)

    print(f"Total products processed: {len(valid_products) + len(invalid_products)}")
    print(f"Valid products: {len(valid_products)}")

    if invalid_products:
        print("\nInvalid products:")
        for item in invalid_products:
            print(f"- {item['product']}: {item['error']}")
    else:
        print("\nAll products are valid!")
