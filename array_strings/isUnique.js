const isUnique = (str)=>{
    const aCode = 'a'.charCodeAt(0);
    const allChars = new Array(26)
    for (let c of str){
      const charIndex = c.charCodeAt(0);
      if(allChars[charIndex-aCode]===1) return false
      else allChars[charIndex-aCode]=1;
    }
    return true;
  }

  const sum = (arr)=>{
    let s = 0;
    for (const item of arr){
      s += item;
    }
    return s;
  }
  
 const testIsUnique = ()=>{
  console.assert(isUnique('abccc')===false);
  console.assert(isUnique('abc')===true);
  console.assert(isUnique('mustaf')===true);
 }
 
testIsUnique()
