const express = require('express')
const app = express()
const port = 5000

const generalRoutes = require("./src/routers/general");


app.use("/api",generalRoutes);

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`)
})