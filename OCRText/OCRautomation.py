# import subprocess
# import os

# # Define the path to the application
# copilot_path = "C:\\Users\\Krish\\Desktop\\CopilotNative.exe"

# # Check if the file exists
# if os.path.exists(copilot_path):
#     try:
#         # Launch the application
#         subprocess.run(copilot_path, check=True)
#         print("Application launched successfully!")
#     except subprocess.CalledProcessError as e:
#         print(f"Error occurred while launching the application: {e}")
#     except Exception as ex:
#         print(f"An unexpected error occurred: {ex}")
# else:
#     print("The specified path does not exist.")
import subprocess
import os

# Define the path to the application
copilot_path = "C:\\Users\\Krish\\Desktop\CopilotNative.exe"

# Check if the file exists
if os.path.exists(copilot_path):
    try:
        # Launch the application with Popen (non-blocking)
        subprocess.Popen(copilot_path)
        print("Application launched successfully!")
    except Exception as ex:
        print(f"An unexpected error occurred: {ex}")
else:
    print("The specified path does not exist.")
