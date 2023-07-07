const express = require('express');
const multer = require('multer');
const path = require('path');

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

  // Move the uploaded file to the project folder
  const targetPath = path.join(__dirname, 'uploaded-images', originalname);
  fs.renameSync(path.join(destination, filename), targetPath);

  res.send('Image uploaded and saved successfully!');
});

app.listen(8070, () => {
  console.log('Server is running on http://localhost:8070');
});
