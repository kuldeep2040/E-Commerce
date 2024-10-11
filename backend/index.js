const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const Product = require("./modals/productSchema");
const Users = require("./modals/userSchema");


dotenv.config();
const port = process.env.PORT || 4000;

const mongoURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(mongoURL);

const dbss = mongoose.connection;

dbss.on("connected", () => {
  console.log("MongoDB Server is connected.");
});
dbss.on("error", (error) => {
  console.log("MongoDB Server is having an error:", error);
});
dbss.on("disconnected", () => {
  console.log("MongoDB Server is disconnected.");
});

// Image storage Engine
const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

// Creating Upload Endpoints for Images
app.use("/images", express.static(path.join(__dirname, "uploads/images")));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    message: "Image uploaded successfully",
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// API Creation

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  // console.log("All Product Fetched!");
  res.json(products);
});

app.get("/newcollections", async(req, res)=>{
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  // console.log("New Collection Fetched!");
  res.json(newcollection);
})

app.get("/popularinwomen", async (req,res)=>{
  let products = await Product.find({category:"women"});
  let popular_in_women = products.slice(0,4);
  // console.log("Popular Products in Women Fetched!");
  res.send(popular_in_women);
})


const fetchUser = async (req,res, next)=>{
  const token = req.header('auth-token');
  if(!token){
    res.status(401).send({error:"Please authenticate using valid email id."})
  }
  else{
    try{
      const data =jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    }catch(error){
      res.status(401).send({error: "please authenticate"})
    }
  }
}


app.post('/addtocart',fetchUser, async(req,res)=>{
  console.log(req.body,req.user);
  console.log("added", req.body.itemId)
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId]+=1;
  await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Added")
});


app.post('/removefromcart',fetchUser, async(req,res)=>{
  console.log(req.body,req.user);
  console.log("removed", req.body.itemId)
  let userData = await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId]-=1;
  await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Removed")
})

app.post('/getcart', fetchUser, async(req,res)=>{
  // console.log("Get Cart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error in server: " + error);
  }
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    // console.log("Removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  });


  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  // console.log("Saved");
  res.json({ success: true, prdocut_name: req.body.name, });

});


app.post('/signup', async (req, res) => {
  let check = await Users.findOne({ email: req.body.email })
  if(check) {
    res.status(400).json({ success: false, errors: "Existing Users found with same email address! " })
  }
  let cart  = {};
  for(let i =0 ; i<300;i++){
    cart[i]=0;

  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData:cart,
  })
  await user.save();

  const data  = {
    user:{
      id: user.id,
    }
  }
  const token  = jwt.sign(data,'secret_ecom')
  res.json({success: true, token})

})

app.post('/login', async (req, res)=>{
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password ===user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom')
      res.json({success:true,token})
    }
    else{
      res.status(400).json({success:false,errors:"Invalid Password!"})
    }
  }
  else{
    res.json({success:false, errors: "Invalid Email Id!"})
  }
})