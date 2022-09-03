const checkPermutation = (str1, str2)=>{
  if(str1 === '' || str2 === '') return true;
  if(str1.length !== str2.length) return false;

  const allCharsStr1 = new Array(26).fill(0);
  const allCharsStr2 = new Array(26).fill(0);

  for (const index in str1){
    const charIndex1 = str1[index].charCodeAt(0) - 'a'.charCodeAt(0);
    const charIndex2 = str2[index].charCodeAt(0) - 'a'.charCodeAt(0);
    allCharsStr1[charIndex1] +=1;
    allCharsStr2[charIndex2] +=1;
  }

  for(const index of allCharsStr1){
    if (allCharsStr1[index] !== allCharsStr2[index]) return false;
  }
  return true;
}

const checkPermutationWithSort = (str1, str2)=>{
  if(str1 === '' || str2 === '') return true;
  if(str1.length !== str2.length) return false;

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}



console.log(checkPermutationWithSort('must','aaaa')===false)
console.log(checkPermutationWithSort('must','')===true)
console.log(checkPermutationWithSort('must','tusm')===true)
console.log(checkPermutationWithSort('must','tussm')===false)
console.log(checkPermutation('hello','olleh')===true)
console.log(checkPermutation('hello','')===true)