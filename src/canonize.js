var urls = [
"https://vk.com/igor.suvorov",
"https://twitter.com/suvorovigor",
"https://telegram.me/skillbranch",
"@skillbranch",
"https://vk.com/skillbranch?w=wall-117903599_1076",];

function getName(url) {
  const reg = /(@|\/)?[\w\9.]+/ig;
  const reg1 = /[\w\9.]+/ig;
  const matches = url.match(reg);
  console.log(matches);
  // return "@"+matches[matches.length-1];
  return "@"+matches[matches.length-1].match(reg1); 
}

export default function canonize(url) {
  return getName(url);
}
