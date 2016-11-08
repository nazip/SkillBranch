var urls = [
"https://vk.com/igor.suvorov",
"https://twitter.com/suvorovigor",
"https://telegram.me/skillbranch",
"@skillbranch",
"https://vk.com/skillbranch?w=wall-117903599_1076",];

function getName(url) {
  const reg = /(@|\/)[\w\9.]+/ig;
  const matches = url.match(reg);
  return "@"+matches[matches.length-1].substr(1);
}

export default function canonize(url) {
  return getName(url);
}
