import requests
import os
from .data_models import Product
import tiktoken

enc = tiktoken.get_encoding("o200k_base")
# To get the tokeniser corresponding to a specific model in the OpenAI API
# enc = tiktoken.encoding_for_model("gpt-4o")
disallowed_special = enc.special_tokens_set - {"<|endoftext|>"}


def calculate_tokens(product: Product, product_dir: str):
    product_name = product.product

    # Download each file in llms-txt and llms-full-txt and store content
    file_contents = {}
    # for filename, url in files.items():
    for filename in ["llms_txt", "llms_full_txt"]:
        url = getattr(product, filename)
        if url:
            try:
                response = requests.get(url)
                response.raise_for_status()

                # Save file to product directory
                filepath = os.path.join(product_dir, f"{filename}.txt")
                with open(filepath, "w", encoding="utf-8") as f:
                    content = response.text
                    tokens = enc.encode(content, disallowed_special=disallowed_special)

                    setattr(product, f"{filename}_tokens", len(tokens))
                    f.write(content)
                    file_contents[filename] = content
                print(f"Downloaded {filename} for {product_name}")

            except requests.RequestException as e:
                print(f"Error downloading {filename} for {product_name}: {e}")
                raise e
            except Exception as e:
                print(f"Error encoding {filename}: {e}")
                raise e

    # Create combined file with all content
    if file_contents:
        combined_filepath = os.path.join(product_dir, "combined.txt")
        with open(combined_filepath, "w", encoding="utf-8") as f:
            for filename, content in file_contents.items():
                f.write(content)
                f.write("\n\n")
        print(f"Created combined file for {product_name}")

    return product
