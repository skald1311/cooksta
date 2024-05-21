import base64

def image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        encoded_str = base64.b64encode(image_file.read())
        return encoded_str.decode('utf-8')
    
default_pic_base64 = image_to_base64("../frontend/public/default-user.jpg")
print(default_pic_base64)