import requests
import os

import tiktoken

enc = tiktoken.get_encoding("o200k_base")
# To get the tokeniser corresponding to a specific model in the OpenAI API
# enc = tiktoken.encoding_for_model("gpt-4o")
disallowed_special = enc.special_tokens_set - {"<|endoftext|>"}


def create_product_json(product: dict, product_dir: str):
    product_name = product["product"]
    product_json = {}
    product_json["product"] = product_name
    product_json["website"] = product["website"]

    # Download each file in llms-txt and llms-full-txt and store content
    files = {}
    if product["llms-txt"]:
        files["llms-txt"] = product["llms-txt"]
    if product["llms-full-txt"]:
        files["llms-full-txt"] = product["llms-full-txt"]

    file_contents = {}
    for filename, url in files.items():
        try:
            response = requests.get(url)
            response.raise_for_status()

            # Save file to company directory
            filepath = os.path.join(product_dir, f"{filename}.txt")
            with open(filepath, "w", encoding="utf-8") as f:
                content = response.text
                tokens = enc.encode(content, disallowed_special=disallowed_special)

                product_json[filename] = url
                product_json[f"{filename}-tokens"] = len(tokens)
                f.write(content)
                file_contents[filename] = content
            print(f"Downloaded {filename} for {product_name}")

        except requests.RequestException as e:
            print(f"Error downloading {filename} for {product_name}: {e}")
        except Exception as e:
            print(f"Error encoding {filename}: {e}")

    if "llms-full-txt" not in product_json:
        product_json["llms-full-txt"] = ""
        product_json["llms-full-txt-tokens"] = None
    if "llms-txt" not in product_json:
        product_json["llms-txt"] = ""
        product_json["llms-txt-tokens"] = None

    # Create combined file with all content
    if file_contents:
        combined_filepath = os.path.join(product_dir, "combined.txt")
        with open(combined_filepath, "w", encoding="utf-8") as f:
            for filename, content in file_contents.items():
                f.write(content)
                f.write("\n\n")
        print(f"Created combined file for {product_name}")

    return product_json
