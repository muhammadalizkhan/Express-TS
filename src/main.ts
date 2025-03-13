import express from "express";
import { dbConnect } from "./utils/db.connect";
import { sayHello } from "./controllers/hello.controller";
import { middleware } from "./middlewares/middleware";

const app = express();
const PORT = 3000;

dbConnect();

app.use(middleware);

app.get("/", sayHello);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
