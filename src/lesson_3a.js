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
};

const app = express();
const reg = /^(?:\/.+)?$/i;

app.get(reg, async (req, res) => {

  try {
    if(req.originalUrl.indexOf('volumes') > 0) {
      var resp = {};
      console.log("it is volumes");
      const hdds = pc.hdd;
      pc.hdd.forEach( function(item, i, hdds) {
        if(hdds[i].volume in resp)
          resp[hdds[i].volume] += 0+hdds[i].size; 
        else
          resp[hdds[i].volume] = 0+hdds[i].size; 
      });      
    }
    else
    {
      var resp = eval("pc."+ req.originalUrl.substr(1, req.originalUrl.length)
                  .replace(/\//g, "."));
    }
    if(resp)
    {  
      if(typeof resp === "number") 
        resp = ""+resp;
      else if((typeof resp) === "string") 
        resp = '"'+resp + '"';
      else
       resp = resp; 
      res.send(resp);
    }  
    else
      throw "fff";
  } catch(e) {
    return res.status(400).send('Not Found');
  }
});


app.listen(4000, () => {
  console.log("I am listening 4000 port ");
});


