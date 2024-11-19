// var a="mom"
// var b=""
// for(i=a.length-1;i>=0;i--){
//     b=b+a[i]
// }

// if(a==b){
//     console.log("yes");

// }else{ console.log("no");
// }

var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];
for (let i = 0; i < aos.length; i++) {
  let word = aos[i];
  if (word == word.split("").reverse().join("")) {
    op.push(word);
  }
}
console.log(op);//[ 'mom', 'malayalam', 'dad' ]
