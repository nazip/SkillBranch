import express from 'express';
import fetch from 'isomorphic-fetch';
import mongoose from 'mongoose';
import promise from 'bluebird';

import canonize from './canonize';

const pc = {"board":{"vendor":"IBM",
           "model":"IBM-PC S-100",
           "cpu":{"model":"80286","hz":12000},
           "image":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg",
           "video":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4"
         },
"ram":{"vendor":"CTS","volume":1048576,"pins":30},
"os":"MS-DOS 1.25",
"floppy":0,
"hdd":[
  {"vendor":"Samsung","size":33554432,"volume":"C:"},
  {"vendor":"Maxtor","size":16777216,"volume":"D:"},
  {"vendor":"Maxtor","size":8388608,"volume":"C:"}
],
"monitor":null,
"length":42,
"height":21,
"width":54
}


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


