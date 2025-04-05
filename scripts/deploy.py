import os
import json
from utils.contants import (
    PRODUCTS_JSONL_PATH,
    REDIRECTS_JSONL_PATH,
    LIB_PATH,
    ROOT_PATH,
)

# Read products.jsonl line by line
products_data = []
with open(PRODUCTS_JSONL_PATH, "r", encoding="utf-8") as f:
    for line in f:
        if line.strip():  # Skip empty lines
            _product = json.loads(line)
            products_data.append(_product)

# Write to product_data.json in lib folder
product_data_path = os.path.join(LIB_PATH, "products_data.json")
with open(product_data_path, "w", encoding="utf-8") as f:
    json.dump(products_data, f)

print(f"Created {product_data_path} with {len(products_data)} products")

# Read redirects.jsonl line by line
redirects_data = []
with open(REDIRECTS_JSONL_PATH, "r", encoding="utf-8") as f:
    for line in f:
        if line.strip():  # Skip empty lines
            _redirect = json.loads(line)
            redirects_data.append(_redirect)

# Write to redirects.json in root folder
redirects_path = os.path.join(ROOT_PATH, "redirects.json")
with open(redirects_path, "w", encoding="utf-8") as f:
    json.dump(redirects_data, f)

print(f"Created {redirects_path} with {len(redirects_data)} redirects")
