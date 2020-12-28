import express from "express";

const app = express();
const port: number = 8080;



app.get("/", (req, res) => {
    res.send("hello world");
})


app.listen(port, () => {
    console.log("server running on port: "+ port);
})