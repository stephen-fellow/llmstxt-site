from tqdm import tqdm
import os
import json
from create_product_json import create_product_json
from create_product_redirects import create_product_redirects

# ./scripts
FILE_PATH = os.path.dirname(os.path.abspath(__file__))
# ./scripts/llmstxt-files
LLMSTXT_FILES_PATH = os.path.join(FILE_PATH, "llmstxt-files")
if not os.path.exists(LLMSTXT_FILES_PATH):
    os.makedirs(LLMSTXT_FILES_PATH)
# ./scripts/run-assets
RUN_ASSETS_PATH = os.path.join(FILE_PATH, "run-assets")
if not os.path.exists(RUN_ASSETS_PATH):
    os.makedirs(RUN_ASSETS_PATH)
# ./data.json
DATA_RAW_PATH = os.path.join(os.path.dirname(FILE_PATH), "data.json")

data_raw = json.load(open(DATA_RAW_PATH))

# Loop through each company
for product in tqdm(data_raw):
    product_name = product["product"]
    product_dir = os.path.join(LLMSTXT_FILES_PATH, product_name)

    # Create product directory if it doesn't exist
    if not os.path.exists(product_dir):
        os.makedirs(product_dir)

    product_json = create_product_json(product, product_dir)
    product_redirects = create_product_redirects(product)

    print(product_json)
    print(product_redirects)

    # Append to products.jsonl
    products_jsonl_path = os.path.join(RUN_ASSETS_PATH, "products.jsonl")
    with open(products_jsonl_path, "a", encoding="utf-8") as f:
        json.dump(product_json, f)
        f.write("\n")

    # Append to redirects.jsonl
    redirects_jsonl_path = os.path.join(RUN_ASSETS_PATH, "redirects.jsonl")
    with open(redirects_jsonl_path, "a", encoding="utf-8") as f:
        for redirect in product_redirects:
            json.dump(redirect, f)
            f.write("\n")

    # Update status.json
    status_path = os.path.join(RUN_ASSETS_PATH, "status.jsonl")
    status = {"product": product_name, "status": "done"}

    with open(status_path, "a", encoding="utf-8") as f:
        json.dump(status, f)
        f.write("\n")
