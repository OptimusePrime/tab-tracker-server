import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8081;
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
   res.send({
      message: "hello world!"
   });
});

app.listen(port, () => {
    return console.log(`Express server is listening on port localhost:${port}.`);
});
