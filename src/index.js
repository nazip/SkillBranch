import express from 'express';
import fetch from 'isomorphic-fetch';

import canonize from './canonize';

const app = express();
const baseUrl = "https://pokeapi.co/api/v2";

app.get("/canonize", (req, res) => {
  const userName = canonize(req.query.url);
  res.json({
    url: req.query.url,
    userName,
    });
});


async function getAllPok(url, i=0) {
  const response = await fetch(url);
  const page = await response.json();
  const pokemons = page.results;
  if(page.next && i < 3) {
    const nextpok = getFatestPok(url, i+1);
    return [
      ...pokemons,
      ...nextpok
    ]
  }
  return pokemons;
}

app.get("/", async (req, res) => {
  try {
    const allPok = await getAllPok(`${baseUrl}/pokemon`);
    console.log(allPok);
    // const response = await fetch(allPok[0].url);


    return res.json({
      pok: "pok",
      response
    });
  } catch(e) {
    return res.json({
      pok: "pok",
      err: e
    });
  }



});




app.listen(3000, () => {
  console.log("I am listening 3000 port ");
});


