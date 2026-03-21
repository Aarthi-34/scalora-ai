const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/hooks", (req, res) => {

  const niche = req.query.niche;


  const hooks = [
    `5 mistakes every ${niche} makes and how to avoid them.`,
    `The ultimate guide to ${niche} in 2026.`,
    `Why your ${niche} strategy is failing and how to fix it.`,
    `This  ${niche} trick will shock you.`,
  ]
 // res.send("Content will be generated here.");
 res.json( hooks );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});