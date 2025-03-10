import os

# Path to the folder containing images
folder_path = r'C:\Users\krish\Desktop\New folder\ResultsSanSol'

# List all files in the folder
files = os.listdir(folder_path)

# Filter out non-image files (assuming extensions .jpg, .png, .jpeg)
image_extensions = ['.jpg', '.jpeg', '.png']
image_files = [file for file in files if file.lower().endswith(tuple(image_extensions))]

# Rename each image file in sequential order
for index, image_file in enumerate(image_files, start=1):
    # Get the file extension
    file_extension = os.path.splitext(image_file)[1]
    
    # Generate the new file name (1.jpg, 2.jpg, etc.)
    new_name = f"{index}{file_extension}"
    
    # Construct full file paths
    old_file = os.path.join(folder_path, image_file)
    new_file = os.path.join(folder_path, new_name)
    
    # Rename the file
    os.rename(old_file, new_file)

print(f"Renamed {len(image_files)} image files successfully.")
