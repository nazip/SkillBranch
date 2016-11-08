const app = express();

app.get("/", async (req, res) => {
  try {
    const a = req.query.a ? +req.query.a : 0;  
    const b = req.query.b ? +req.query.b : 0;
    res.send(""+(0+a+b));
  } catch(e) {
    return res.send("error");
  }
});

app.listen(3000, () => {
  console.log("I am listening 3000 port ");
});