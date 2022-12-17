import { createPhotos } from './data.js';
import { initThumbnails } from './thumbnails.js';
import { renderUploadForm } from './form.js';
import { initEffects } from './filters.js';

const data = createPhotos();

initThumbnails(data);
renderUploadForm(data);
initEffects();
