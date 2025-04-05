import os

## Paths for staging
# ./scripts
SCRIPTS_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# ./scripts/llmstxt-files
LLMSTXT_FILES_PATH = os.path.join(SCRIPTS_PATH, "llmstxt-files")
if not os.path.exists(LLMSTXT_FILES_PATH):
    os.makedirs(LLMSTXT_FILES_PATH)
# ./scripts/run-assets
RUN_ASSETS_PATH = os.path.join(SCRIPTS_PATH, "run-assets")
if not os.path.exists(RUN_ASSETS_PATH):
    os.makedirs(RUN_ASSETS_PATH)
# ./data.json
DATA_RAW_PATH = os.path.join(os.path.dirname(SCRIPTS_PATH), "data.json")

## Paths for deploying
# Path to products.jsonl and redirects.jsonl in run-assets folder
PRODUCTS_JSONL_PATH = os.path.join(RUN_ASSETS_PATH, "products.jsonl")
REDIRECTS_JSONL_PATH = os.path.join(RUN_ASSETS_PATH, "redirects.jsonl")

# Path to lib folder (one level up from scripts)
LIB_PATH = os.path.join(os.path.dirname(SCRIPTS_PATH), "lib")
ROOT_PATH = os.path.dirname(SCRIPTS_PATH)
