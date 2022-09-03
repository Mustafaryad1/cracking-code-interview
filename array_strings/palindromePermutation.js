const isPalindromePermutation = (str) =>{
  if(str==='') return false;
  if(str.length===1) return true;

  const map = new Map();
  let oddChar = false;

  for (const c of str){
    if(c !== ' '){
      if(map[c]===undefined){
        map[c] = 1;
      }else map[c] += 1;
    }
 
  }

  for(const key in map){
    if(map[key]%2 !==0 ) {
      if (oddChar) return false;
      else oddChar = true;
    }
  }

  return true;
}

console.log(isPalindromePermutation('acccaa') === false)
console.log(isPalindromePermutation('hola') === false)
console.log(isPalindromePermutation('tact coa') === true)
console.log(isPalindromePermutation('test test') === true)