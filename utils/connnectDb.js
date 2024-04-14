import mongoose from "mongoose"

const connectMongoDb = async()=>{
    try{
        const connectDb = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDb") 
    }
    catch(e){
        console.log(e.message)
    }
}

export default connectMongoDb