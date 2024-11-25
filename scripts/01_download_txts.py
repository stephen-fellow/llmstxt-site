from tqdm import tqdm
import requests
import os
import json

dir = json.load(open("data_raw.json"))
FILE_PATH = os.path.dirname(os.path.abspath(__file__))

LLMSTXT_FILES_PATH = os.path.join(FILE_PATH, "llmstxt-files")

# Create downloads directory if it doesn't exist
if not os.path.exists(LLMSTXT_FILES_PATH):
    os.makedirs(LLMSTXT_FILES_PATH)

# Loop through each company
for _product in tqdm(dir):
    product_name = _product["product"]

    # Create product directory
    product_dir = os.path.join(LLMSTXT_FILES_PATH, product_name)
    if not os.path.exists(product_dir):
        os.makedirs(product_dir)

    # Download each file in llms-txt and llms-full-txt and store content
    files = {}
    if _product["llms-txt"]:
        files["llms-txt"] = _product["llms-txt"]
    if _product["llms-full-txt"]:
        files["llms-full-txt"] = _product["llms-full-txt"]

    file_contents = {}
    for filename, url in files.items():
        try:
            response = requests.get(url)
            response.raise_for_status()

            # Save file to company directory
            filepath = os.path.join(product_dir, filename)
            with open(filepath, "w", encoding="utf-8") as f:
                content = response.text
                f.write(content)
                file_contents[filename] = content
            print(f"Downloaded {filename} for {product_name}")

        except requests.RequestException as e:
            print(f"Error downloading {filename} for {product_name}: {e}")

    # Create combined file with all content
    if file_contents:
        combined_filepath = os.path.join(product_dir, "combined.txt")
        with open(combined_filepath, "w", encoding="utf-8") as f:
            for filename, content in file_contents.items():
                f.write(content)
                f.write("\n\n")
        print(f"Created combined file for {product_name}")
