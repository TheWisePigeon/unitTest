import express from 'express';
import DefaultHandler from './handlers/DefaultHandler.js';
const router = express.Router();

router.route('/root').get(DefaultHandler.onGet);

export default router;
