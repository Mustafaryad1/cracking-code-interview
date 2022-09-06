const stringCompression = (str)=>{
  if(str.length <3 ) return str;
  
  let compressedStr = '';
  for(let i=0; i< str.length; i++){
    start=i;
    let char = str[i]
    while(i < str.length && str[i]===str[i+1]){
      i+=1;
    }
    
    compressedStr += `${char}${i - start +1}`
  }
  
  if(str.length > compressedStr.length) return compressedStr;
  
  return str;
}

console.log(stringCompression('aabbc')==='aabbc')
console.log(stringCompression('aaaaaabc')==='a6b1c1')
console.log(stringCompression('aabcccccaaa'))
