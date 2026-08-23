const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadImage } = require('../controllers/mediaController');

// POST /api/media/upload
// The 'image' string is the field name expected from the frontend form
router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;