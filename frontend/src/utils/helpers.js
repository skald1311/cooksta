export function convertToBase64(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = function (error) {
      console.error("Error reading file:", error);
    };
    reader.readAsDataURL(imageFile);
  });
}
