from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os
import shutil
import hashlib

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# File categories
FILE_TYPES = {
    "Images": [".png", ".jpg", ".jpeg", ".gif"],
    "Documents": [".pdf", ".docx", ".txt"],
    "Videos": [".mp4", ".mkv"],
    "Code": [".py", ".js", ".cpp", ".c"]
}


class FolderRequest(BaseModel):
    path: str


class SearchRequest(BaseModel):
    path: str
    query: str


def get_file_hash(file_path):

    hasher = hashlib.md5()

    with open(file_path, 'rb') as file:

        buffer = file.read()

        hasher.update(buffer)

    return hasher.hexdigest()


@app.get("/")
def home():
    return {
        "message": "AI File Organizer Backend Running"
    }


@app.post("/organize")
def organize_files(data: FolderRequest):

    path = data.path

    stats = {
        "Images": 0,
        "Documents": 0,
        "Videos": 0,
        "Code": 0
    }

    file_hashes = {}

    duplicate_count = 0

    large_files = []

    ORGANIZER_FOLDERS = [
        "Images",
        "Documents",
        "Videos",
        "Code",
        "Duplicates"
    ]

    if not os.path.exists(path):
        return {
            "error": "Folder path does not exist"
        }

    for filename in os.listdir(path):

        file_path = os.path.join(path, filename)

        # Skip organizer folders
        if os.path.isdir(file_path):
            continue

        if os.path.isfile(file_path):

            try:

                # File size
                file_size = os.path.getsize(file_path)

                # Detect large files (>5 MB)
                if file_size > 5 * 1024 * 1024:

                    large_files.append({
                        "name": filename,
                        "size": round(
                            file_size / (1024 * 1024),
                            2
                        )
                    })

                # Generate file hash
                file_hash = get_file_hash(file_path)

                # Duplicate detection
                if file_hash in file_hashes:

                    duplicate_count += 1

                    duplicate_folder = os.path.join(
                        path,
                        "Duplicates"
                    )

                    os.makedirs(
                        duplicate_folder,
                        exist_ok=True
                    )

                    shutil.move(
                        file_path,
                        os.path.join(
                            duplicate_folder,
                            filename
                        )
                    )

                    continue

                file_hashes[file_hash] = filename

                # File extension
                extension = os.path.splitext(
                    filename
                )[1].lower()

                # Organize files
                for folder, extensions in FILE_TYPES.items():

                    if extension in extensions:

                        folder_path = os.path.join(
                            path,
                            folder
                        )

                        os.makedirs(
                            folder_path,
                            exist_ok=True
                        )

                        shutil.move(
                            file_path,
                            os.path.join(
                                folder_path,
                                filename
                            )
                        )

                        stats[folder] += 1

                        break

            except Exception as error:
                print(error)

    return {
        "status": "Files Organized Successfully",
        "stats": stats,
        "duplicates": duplicate_count,
        "large_files": large_files
    }


@app.post("/search")
def search_files(data: SearchRequest):

    path = data.path
    query = data.query.lower()

    results = []

    if not os.path.exists(path):
        return {
            "results": []
        }

    for root, dirs, files in os.walk(path):

        for file in files:

            if query in file.lower():

                results.append({
                    "name": file,
                    "location": root
                })

    return {
        "results": results
    }