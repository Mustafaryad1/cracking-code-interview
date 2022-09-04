const oneWay = (str1, str2)=>{
  const mapStr1 = new Map();
  let diff = 0;
  let temp = '';
  if(str2.length < str1.length){
    temp = str1;
    str1 = str2;
  }

  for(const c of str1){
    if(mapStr1[c] === undefined) mapStr1[c] = 1;
    else mapStr1[c] +=1
  }
  
  if(temp !== '') str2 = temp;
  for(const c of str2){
    if(mapStr1[c] !== undefined && mapStr1[c]>0) mapStr1[c] -=1;
    else  diff +=1;
  }

  console.log(diff)
  if(diff > 1) return false;
  return true
}


console.log(oneWay('pale','ple') === true)
console.log(oneWay('pales','pale') === true)
console.log(oneWay('pale','bale') === true)
console.log(oneWay('pale','bake') === false)