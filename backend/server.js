const express = require("express");
const { getFields, getFieldParams, setFieldParams } = require('./services')


const app = express();

const port = 8087;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/formgenerator/fields", async (req, res) => {
  const fields = await getFields();
  res.status(200).json(fields);
});

app.post("/createcontact", (req, res) => {
  res.status(200).json({
    field: "name",
    message: "name already used",
  });
});

app.post("/sendform", (req, res) => {
  return res.redirect("http://localhost:8086/#/classicForm");
});

app.get("/managefields/getparams", async (req, res, next) => {
  try {
    const data = await getFieldParams();
    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

app.post("/managefields/saveparams", async (req, res, next) => {
  try {
    const data = req.body;
    await setFieldParams(data);
    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
});

app.use((err, _req, res, _next) => {
  return res.redirect("http://localhost:8086/#/errorpage");
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});