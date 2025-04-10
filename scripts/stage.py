from tqdm import tqdm
import os
import shutil
import json
from utils.token_count import calculate_tokens
from utils.create_product_redirects import create_product_redirects
from utils.check_data import validate_products, get_new_products
from utils.contants import DATA_RAW_PATH, LLMSTXT_FILES_PATH, RUN_ASSETS_PATH


data_raw_items = json.load(open(DATA_RAW_PATH))
valid_products, invalid_products = validate_products(data_raw_items)

print(f"Total products processed: {len(valid_products) + len(invalid_products)}")
print(f"Valid products: {len(valid_products)}")

if invalid_products:
    print("\nInvalid products:")
    for item in invalid_products:
        print(f"- {item['product']}: {item['error']}")
else:
    print("\nAll products are valid!")

print("Processing the products:\n\n")

# Get list of existing product directories
new_products = get_new_products(valid_products, LLMSTXT_FILES_PATH)

products_jsonl_path = os.path.join(RUN_ASSETS_PATH, "products.jsonl")
redirects_jsonl_path = os.path.join(RUN_ASSETS_PATH, "redirects.jsonl")
status_path = os.path.join(RUN_ASSETS_PATH, "status.jsonl")
error_path = os.path.join(RUN_ASSETS_PATH, "error.jsonl")

# Loop through each company
for _p in tqdm(new_products):
    product_name = _p.product
    product_dir = os.path.join(LLMSTXT_FILES_PATH, product_name)

    try:
        print(f"Preparing data for: {product_name}")

        # Create product directory if it doesn't exist
        if not os.path.exists(product_dir):
            os.makedirs(product_dir)

        _p = calculate_tokens(_p, product_dir)
        product_redirects = create_product_redirects(_p)

        # Append to products.jsonl        
        with open(products_jsonl_path, "a", encoding="utf-8") as f:
            json.dump(_p.to_json(), f)
            f.write("\n")

        # Append to redirects.jsonl        
        with open(redirects_jsonl_path, "a", encoding="utf-8") as f:
            for redirect in product_redirects:
                json.dump(redirect.to_json(), f)
                f.write("\n")

        # Update status.jsonl        
        status = {"product": product_name, "status": "done"}
        with open(status_path, "a", encoding="utf-8") as f:
            json.dump(status, f)
            f.write("\n")
    except Exception as e:
        print(f"Error preparing data for: {product_name}")
        error = {"product": product_name, "status": "error", "error": str(e)}
        with open(error_path, "a", encoding="utf-8") as f:
            json.dump(error, f)
            f.write("\n")
        # Delete product folder if it exists to clean up any partial data
        if os.path.exists(product_dir):
            shutil.rmtree(product_dir)
            print(f"Cleaned up failed product directory: {product_dir}")
        print(e)
