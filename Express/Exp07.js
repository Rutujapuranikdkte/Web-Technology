const express=require("express");
const app=express();
const port=3000;

const user=[
    {id:1,name:"rutuja",age:20},
    {id:2,name:"samruddhi",age:18},
    {id:3,name:"amruta",age:21}
];

app.get("/",(req,res)=>{
    res.json({user});
});

app.get("/users/:id",(req,res)=>{
    //const id = Number(req.params.id);
    const foundUser = user.find(u => u.id === id);

    if (!foundUser) {
        return res.json({ message: "User not found" });
    }

    res.json({
        name: foundUser.name,
        age: foundUser.age
    });
});



app.listen(port,()=>{
    console.log(`app is listeaning on port:http://localhost:${port}`);
})