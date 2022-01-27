const mongoose=require('mongoose')
const connectdb=async()=>{
    try {
      await  mongoose.connect("mongodb+srv://amani:amani123@cluster0.en80n.mongodb.net/UserDatabase?retryWrites=true&w=majority"
     
      )

        console.log('db succesfuly connected')
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=connectdb