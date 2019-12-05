import express from "express";
import bodyParser from "body-parser";
import basicAuth from "express-basic-auth";

const app = express();

//Setings
app.set("port", process.env.PORT || 3000);

//Middlware
app.use(bodyParser.json());
app.use(
  basicAuth({
    users: {
      ibm_test_robot_1: "ibm_test_1.123#",
      ibm_test_robot_2: "ibm_test_2.123#",
      ibm_test_robot_3: "ibm_test_3.123#"
    }
  })
);

//Routes
import index from "../routes/index";
app.use(index);

//Manejo de errores
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error Handler Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = error.status || 300;

  // response to client
  res.status(status).json({
    status: "error",
    error: {
      message: error.message
    }
  });

  // show in console
  console.error(err);
});
module.exports = app;
