import express from 'express';
import fetch from 'isomorphic-fetch';
import promise from 'bluebird';

import canonize from './canonize';

const app = express();

app.get("/", async (req, res) => {
  try {
    const fullname = req.query.fullname ? req.query.fullname : "";
    if(!fullname) throw "Invalid fullname";
    const reg = /[\w]+/ig;
    const matches = fullname.match(reg);
    if((matches.length ==0) || (matches.length > 3)) throw "Invalid fullname";
    var rez = matches[matches.length-1];
    for(var i=0; i < matches.length-1; i++)
      rez += " " + matches[i].substr(0,1) + ".";
    res.send(rez);
  } catch(e) {
    return res.send(e);
  }
});

app.get("/2c", async (req, res) => {
  try {
    const username = req.query.username ? req.query.username : "";
    if(!username) throw "Invalid username";
    res.send(canonize(username));
  } catch(e) {
    return res.send(e);
  }
});


app.listen(3000, () => {
  console.log("I am listening 3000 port ");
});


