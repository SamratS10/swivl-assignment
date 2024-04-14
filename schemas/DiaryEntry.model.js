import mongoose from "mongoose"

const DiaryEntrySchema = new mongoose.Schema({
  title: { type: String, required: true,unique:true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  photos: [{ type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},{timeseries:true});

export const DiaryEntry = mongoose.model('DiaryEntry', DiaryEntrySchema);