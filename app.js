const express = require ("express");
const path = require ("path");

const app = express();
const publicPath = path.join(__dirname,"./public")

app.use(express.static(publicPath))

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"views/home.html"))
})
app.listen(3000, () => {
    console.log ("servidor 3000 corriendo")
});