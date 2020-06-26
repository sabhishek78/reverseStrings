function reversePattern(input){
  while(input.match(/\([a-z]+\)/g)!==null){
   input=input.replace(/\([a-z]+\)/,extractWord(input.match(/\([a-z]+\)/g)).split('').reverse().join(''));
   reversePattern(input);
}
return input;
}
function extractWord(text){
  let extractedWord='';
  for(let i=1;i<text[0].length-1;i++){
  extractedWord=extractedWord+text[0][i];
  }
  return extractedWord;
}

console.log(reversePattern("(abcd)")==="dcba");
console.log(reversePattern("(u(love)i)")==="iloveu");
console.log(reversePattern("(ed(et(oc))el)")==="leetcode");
console.log(reversePattern("a(bcdefghijkl(mno)p)q")==="apmnolkjihgfedcbq");
console.log(reversePattern("(a(b(c(d))))")==="bdca");
