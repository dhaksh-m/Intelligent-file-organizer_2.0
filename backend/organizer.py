import os
import shutil

FILE_TYPES = {
    "Images": [".png", ".jpg", ".jpeg"],
    "Documents": [".pdf", ".docx", ".txt"],
    "Videos": [".mp4", ".mkv"],
    "Code": [".py", ".js", ".cpp", ".c"]
}

def organize_files(path):
    for filename in os.listdir(path):
        file_path = os.path.join(path, filename)

        if os.path.isfile(file_path):

            extension = os.path.splitext(filename)[1].lower()

            for folder, extensions in FILE_TYPES.items():

                if extension in extensions:

                    folder_path = os.path.join(path, folder)

                    os.makedirs(folder_path, exist_ok=True)

                    shutil.move(
                        file_path,
                        os.path.join(folder_path, filename)
                    )

                    break