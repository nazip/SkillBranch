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


mongoose.promise = promise;
mongoose.connect('mongodb://publicdb.mgbeta.ru/nazipm_skb3');

const Pet = mongoose.model('Pet', {
  type: String,
  name: String,
});

const Cat = new Pet({
  type: "cat",
  name: "shurik",
});   

Cat.save()
.then(() => {
  console.log("saved !!!");
})
.catch(() => {
  console.log("error writting to db !!!");
});
