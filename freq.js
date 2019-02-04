const fs = require('fs');
let sentence =fs.readFileSync('words.txt', 'utf8')
// turns all new lines to spaces then splits
let s = sentence.replace(/\n/g," ").split(" ")
console.log(s)

//let sentence = "badger badger badger badger mushroom mushroom\n" +
//"snake badger badger badger"
// console.log(s)
let t = {};
let sortable =[];

for (let i = 0; i < s.length; i++){
    if (!(s[i] in t)){
      if (s[i]!== ""){
         t[s[i]] = 1};
    }
    else{
      t[s[i]]++
    }

}
// turn dict into tuples and sort tuples by value
// or just sort dict by value
//console.log  keys with values multiplied by *


// I do not yet understand this algorithm

for (let i in t) {
    sortable.push([i, t[i]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

for (let p=0; p<sortable.length;p++){
  console.log(sortable[p][0]+":"+ "*".repeat(sortable[p][1]))
}
