const express = require('express');
const multer = require('multer');
const { getFiles, uploadFile, getFileById, deleteFile } = require('../controllers/files');

const upload = multer();

const router = express.Router();

router.get('/', getFiles);
router.post('/', upload.single('file'), uploadFile);
router.get('/:fileId', getFileById);
router.delete('/:fileId', deleteFile);

module.exports = router;