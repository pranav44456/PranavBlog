const express=require("express")
const app= express();
require("./db/conn");
const PORT=process.env.PORT|| 5000;


const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const PostRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const multer=require("multer");
const path=require("path"); 

app.use(express.json());

app.use("/images", express.static(path.join(__dirname,"/images")))


const storage=multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null, "images");
        },
        filename: (req,file,cb) => {
            cb(null, req.body.name);

        },
    });

    const upload=multer({storage:storage});
    app.post("/api/upload",upload.single("file"),(req,res)=>{
        res.status(200).json("file has been Uploaded");
    })

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",PostRoute)
app.use("/api/categories",categoryRoute);


// if(process.env.NODE_ENV == "production")
// {
//     app.use(express.static("reactapp/build"))
// }
app.listen(PORT,()=>{
    console.log("Backend is Running");
})

