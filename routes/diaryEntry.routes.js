import express from "express"
import {createEntry,getEntries,getEntry,updateEntry,deleteEntry} from '../controllers/DiaryControllers.js'
import {authenticate} from "../middlewars/auth.middleware.js"

const diaryEntryRouter = express.Router()
diaryEntryRouter.post('/',authenticate,createEntry);
diaryEntryRouter.get('/',authenticate,getEntries);
diaryEntryRouter.get('/:id',authenticate,getEntry);
diaryEntryRouter.put('/:id',authenticate,updateEntry);
diaryEntryRouter.delete('/:id',authenticate,deleteEntry);

export default diaryEntryRouter