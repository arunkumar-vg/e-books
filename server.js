const express = require('express');
const cors = require('cors');
const fs = require('fs');
const fs1 = require('fs').promises;
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5001;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const pdfsDirectory = path.join(__dirname, 'files');

async function fetchFirstPDFPage(filePath) {
  try {
    const data = await fs1.readFile(filePath);
    if (!data.toString().startsWith('%PDF-')) {
      throw new Error('Not a valid PDF file');
    }
    const contentStartIndex = data.indexOf('/Contents');
    const contentEndIndex = data.indexOf('endstream', contentStartIndex);
    const firstPageContent = data.slice(contentStartIndex, contentEndIndex).toString();

    return firstPageContent;
  } catch (error) {
    console.error('Error fetching PDF page:', error);
    throw error;
  }
}

app.get('/pdfs/:file', async (req, res) => {
  const { file } = req.params;

  try {
    const filePath = path.join(pdfsDirectory, file);
    const firstPageContent = await fetchFirstPDFPage(filePath);

    res.setHeader('Content-Type', 'text/plain');

    res.send(firstPageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error retrieving PDF page');
  }
});

app.get('/files/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(path.join(__dirname, 'files', fileName));
});

app.get('/files', (req, res) => {
  const directoryPath = path.join(__dirname, 'files');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files');
    }
    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    res.json(pdfFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
