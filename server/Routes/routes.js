import express from 'express';
import { getnews } from '../Controler/news-controler.js';
const route=express.Router();
route.get('/news',getnews);
export default route;