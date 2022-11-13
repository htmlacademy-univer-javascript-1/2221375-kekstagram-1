import { createPhotos } from './data.js';
import { getThumbnailTemplate } from './thumbnails.js';

const data = createPhotos();

getThumbnailTemplate(data);
