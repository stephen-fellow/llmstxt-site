import os
import json
import tiktoken
from tqdm import tqdm

dir = json.load(open("data_raw.json"))
FILE_PATH = os.path.dirname(os.path.abspath(__file__))
LLMSTXT_FILES_PATH = os.path.join(FILE_PATH, "llmstxt-files")

enc = tiktoken.get_encoding("o200k_base")
# To get the tokeniser corresponding to a specific model in the OpenAI API
# enc = tiktoken.encoding_for_model("gpt-4o")
disallowed_special = enc.special_tokens_set - {"<|endoftext|>"}

total_tokens = 0

# Loop through each product
all_output_ = []
for product in tqdm(dir):
    product_name = product["product"]
    output_ = {}
    output_["product"] = product_name
    output_["website"] = product["website"]

    # Create product directory
    product_dir = os.path.join("txts", product_name)
    if not os.path.exists(product_dir):
        print(f"Directory {product_dir} does not exist")

    files = {}
    if product["llms-txt"]:
        files["llms-txt"] = product["llms-txt"]
    if product["llms-full-txt"]:
        files["llms-full-txt"] = product["llms-full-txt"]

    token_count = {}
    for filename, url in product["llmsTxt"].items():
        filepath = os.path.join(product_dir, filename)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                tokens = enc.encode(content, disallowed_special=disallowed_special)
                token_count[filename] = len(tokens)
                total_tokens += len(tokens)
                output_[filename] = url
                output_[f"{filename}-tokens"] = len(tokens)
        except Exception as e:
            print(f"Error encoding {filename}: {e}")
        product["token_count"] = token_count

    if "llms-full-txt" not in output_:
        output_["llms-full-txt"] = ""
        output_["llms-full-txt-tokens"] = None
    if "llms-txt" not in output_:
        output_["llms-txt"] = ""
        output_["llms-txt-tokens"] = None

    all_output_.append(output_)

with open("data.json", "w") as f:
    json.dump(all_output_, f, indent=4)
