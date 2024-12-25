import os
import shutil

# Get the absolute path of the directory containing this script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the folders to delete
folders_to_delete = ["llmstxt-files", "run-assets"]

# Check and delete each folder if it exists
for folder in folders_to_delete:
    folder_path = os.path.join(script_dir, folder)
    if os.path.exists(folder_path):
        shutil.rmtree(folder_path)
        print(f"Deleted folder: {folder}")
