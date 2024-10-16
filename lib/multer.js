import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary'; 

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profileImages', 
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
});

const upload = multer({ storage });

export default upload;
