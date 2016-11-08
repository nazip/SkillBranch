
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
    const nextpok = getAllPok(page.next, i+1);
    return [
      ...pokemons,
      ...nextpok
    ]
  }
  return pokemons;
}

async function getOnePok(url) {
  return await fetch(url);
}

app.get("/", async (req, res) => {
  try {
    const allPok = await getAllPok(`${baseUrl}/pokemon`);
    // console.log(allPok[0].url);
    const p = allPok.forEach(url => {
      const response = getOnePok(url.url);
      // console.log(response);
    });
    
    Promise.all(p);
    console.log(p)

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


