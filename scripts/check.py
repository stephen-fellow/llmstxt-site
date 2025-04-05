import json
from utils.check_data import validate_products, get_new_products
from utils.contants import DATA_RAW_PATH, LLMSTXT_FILES_PATH


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

print("\n\nProcessing for new products:\n\n")

# Get list of existing product directories
new_products = get_new_products(valid_products, LLMSTXT_FILES_PATH)

for product in new_products:
    print(f"- {product.product}")
