const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('fileInput'), (req, res) => {
  const file = req.file;
  const originalname = file.originalname;
  const destination = file.destination;
  const filename = file.filename;

  // Create the 'uploaded-images' directory if it doesn't exist
  const uploadDir = path.join(__dirname, 'uploaded-images');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // Move the uploaded file to the project folder
  const targetPath = path.join(uploadDir, originalname);
  fs.renameSync(path.join(destination, filename), targetPath);

  res.send('Image uploaded and saved successfully!');
});

app.listen(8070, () => {
  console.log('Server is running on http://localhost:8070');
});
