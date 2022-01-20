const express = require("express");
const studentsRoutes = require("./student/routes");

const app = express();

const port = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(express.json());

app.use("/api/v1/students", studentsRoutes);

app.use((err, req, res, next) => {

    console.log(err)

    res.status(500).send("Internal Server Error");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});