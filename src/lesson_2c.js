import express from 'express';
import fetch from 'isomorphic-fetch';
import promise from 'bluebird';

import canonize from './canonize';

const app = express();

app.get("/", async (req, res) => {
  try {
    const username = req.query.username ? req.query.username : "";
    if(!username) throw "Invalid username";
    const reg = /([a-zA-Z]+$)|([a-zA-Z]+[\?])/g;
    const reg1 = /[a-zA-Z]+/g;

    const matches = username.match(reg);
    if(!matches) throw "Invalid username";

    res.send("@"+(""+matches).match(reg1));
  } catch(e) {
    return res.send(e);
  }
});


app.listen(3000, () => {
  console.log("I am listening 3000 port ");
});
