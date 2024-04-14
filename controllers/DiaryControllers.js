import {DiaryEntry} from "../schemas/DiaryEntry.model.js"

export const createEntry = async (req, res) => {
  const entry = new DiaryEntry({  title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    photos: req.body.photos,
    user: req.user._id});

  try {
    const savedEntry = await entry.save();
    return res.status(201).json(savedEntry);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const getEntries = async (req, res) => {
  try {
    const entries = await DiaryEntry.find({user:req.user._id});
    return res.status(201).json(entries);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const getEntry = async (req, res) => {
  try {
    const entry = await DiaryEntry.findById(req.params.id);
    if(!entry){
        return res.status(404).json({message:"Please Provide valid diary entry id"})
    }
    return res.status(201).json(entry);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const updateEntry = async (req, res) => {
  try {
    const updatedEntry = await DiaryEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if(!updatedEntry){
        return res.status(404).json({message:"The dairy entry with given id was not found"})
    }
    return res.status(201).json({message:"Updated successfully",updatedEntry});
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const deleteEntry = async (req, res) => {
  try {
    const deleteEntry = await DiaryEntry.findByIdAndDelete(req.params.id);
    if(!deleteEntry){
        return res.status(404).json({message:"The dairy entry with given id was not found"})
    }
    return res.status(201).json({message:"Data deleated successfully"});
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};