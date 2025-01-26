import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

// The app routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// New user route
router.post('/users', UsersController.postNew);

// Authentication route
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);

// The routes for files
router.post('/files', FilesController.postUpload);
router.get('/files', FilesController.getIndex);
router.get('/files/:id', FilesController.getShow);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/publish', FilesController.putUnpublish);

export default router;