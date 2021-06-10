const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static("public"));

const items = [];




app.get("/",(req,res)=>{
    const date = new Date();
    console.log("Date is "+ date);

    const day =  date.getDay();
    console.log("Day is "+ day);

    if(day === 6 || day === 0)
    {
      const weekEnd = "Today is weekEnd";
      res.render("index",{items:items});
    }
    else
    {
      const notWeekEnd = "Its Not weekend";
      res.render("index",{items:items});
    }

});


app.post("/",(req,res)=>{
  const item = req.body.todoInput;
  items.push(item);
  res.redirect("/");
});


app.listen(3000,(req,res)=>{
  console.log("Server Running at port 3000");
});
