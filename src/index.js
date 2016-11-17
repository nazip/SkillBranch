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
const reg = /^(?:\/.+)?$/i
const reg1 = /^[a-zA-Z]+$/i

app.get(reg, async (req, res) => {

  try {
    var resp = {};
    if(req.originalUrl.indexOf('volumes') > 0) {
      console.log("volume", pc.hdd[0].volume);
      for(var i=0;i<pc.hdd.length;i++) {
        console.log("resp.'" + pc.hdd[i].volume + "'=" + 0+pc.hdd[i].size);
        eval("resp.'" + pc.hdd[i].volume + "'' = " + 0+pc.hdd[i].size);
      }
      // resp = pc.hdd.map(disk, () => {
      //   return eval("resp." + disk.volume + "+=" + 0+disk.size);
      // });
      console.log(resp);
    }
    else
    {
      resp = eval("pc."+ req.originalUrl.substr(1, req.originalUrl.length)
                  .replace(/\//g, "."));
    }
    if(resp)
      res.send(resp);
    else
      throw "fff";
  } catch(e) {
    return res.send('Not Found');
  }
});


app.listen(4000, () => {
  console.log("I am listening 4000 port ");
});


