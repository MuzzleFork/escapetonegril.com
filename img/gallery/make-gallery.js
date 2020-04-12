const fs =require('fs')
const files = fs.readdirSync('./')
// console.log(files)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
shuffle(files)
files.forEach(file => {
    var template = `<li data-src="img/gallery/${file}"><img src="img/gallery/${file}" /></li>`
    if (file.indexOf('.jpg') > 0) console.log(template)
})