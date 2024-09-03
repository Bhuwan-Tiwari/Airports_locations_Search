const multer = require('multer');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the directory where the files will be saved
        cb(null, 'uploads/'); // You should ensure this directory exists
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using Date.now() and the original file name
        cb(null, `${Date.now()}-${path.basename(file.originalname)}`);
    }
});

// Create the upload middleware with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
