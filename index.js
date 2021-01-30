const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.get("./", (res, req) => {
    res.send({example: "this is a message "});
});

app.listen(port, () => {
    console.log("This is the start");
});