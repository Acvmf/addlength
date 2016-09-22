function addLength(data){
  return _.map(data, change);
}

function change(str){
  let i = str.length;
  return `${str} ${i}`;
}

console.log(addLength(["apple", "pear", "banana"]));