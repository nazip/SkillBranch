import canonize from './canonize';

var urls = [
"https://vk.com/igor.suvorov",
"https://twitter.com/suvorovigor",
"https://telegram.me/skillbranch",
"@skillbranch",
"https://vk.com/skillbranch?w=wall-117903599_1076",];

urls.forEach(url => {
  const userName = canonize(url);
  console.log(userName);
});
