
import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req, res) => {
    console.log(req);
    return res.send("Hello from HOMe");
};
const handleProfile = (req, res) => {
    console.log(req);
    return res.send("Hello from Profile");
};
app.get("/",handleHome);
app.get('/profile',handleProfile)
app.listen(PORT,handleListening);