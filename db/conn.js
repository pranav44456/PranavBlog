const mongoose=require('mongoose');
mongoose.set("strictQuery", false);

uri="mongodb+srv://Harsh:5pQ38oEn52gkRCfj@clusters121.exwj2lo.mongodb.net/Harsh?retryWrites=true&w=majority";
mongoose.connect(uri,{
   
    //  ,-> its not supperted
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex:true,
    //   useFindAndModify:false
    
  
}).then(()=>{
    console.log("connection succesfulll");
}).catch((e)=>{
    console.log(e);

})

























