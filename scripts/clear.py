import os
import shutil
from utils.contants import (
    LLMSTXT_FILES_PATH,
    RUN_ASSETS_PATH,
)


# Define the folders to delete
folders_to_delete = [LLMSTXT_FILES_PATH, RUN_ASSETS_PATH]

# Check and delete each folder if it exists
for folder_path in folders_to_delete:
    if os.path.exists(folder_path):
        shutil.rmtree(folder_path)
        print(f"Deleted folder: {folder_path}")
