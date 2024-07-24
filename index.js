import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
        try {
          console.log("Hello");
          res.render("index.ejs");
        } catch (error) {
          console.log(error.response.data);
          res.status(500);
        }
      });
      
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});