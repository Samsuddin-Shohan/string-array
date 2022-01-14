let situation = 'amar mon valo nei';

const words = situation.split(' ');
console.log(words);

let situationWithNoSpace = words.join('');
console.log(situationWithNoSpace);
let newSituation = situationWithNoSpace.concat(situation);
console.log(newSituation);
let sliceSituation = situation.slice(1,4);
console.log(sliceSituation);
let substrSituation = situation.substr(8,10);
console.log(substrSituation);
let substingSituation = situation.substring(0,4);
console.log(substingSituation);