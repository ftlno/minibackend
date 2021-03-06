const PORT = process.env.PORT || 3000
const express = require("express")
const app = express()

app.use(express.json())

app.get("/", function(req, res) {
  res.send("Dette kommer fra backend")
})

app.get("/folk", function(req, res) {
  res.send("Dette er en liste over folk")
})

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`)
})
