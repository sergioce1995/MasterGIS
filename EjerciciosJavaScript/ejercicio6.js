let esri = "esri";
esri = esri.charAt(0).toUpperCase() + esri.slice(1);
console.log(esri);


let str = "environmental systems research institute";
let words = str.split(" ");
let capitalizedWords = [];
for (let i = 0; i < words.length; i++) {
  capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
}
let capitalizedStr = capitalizedWords.join(" ");
console.log(capitalizedStr);
