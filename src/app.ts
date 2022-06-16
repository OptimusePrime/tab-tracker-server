import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081);
