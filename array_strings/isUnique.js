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

  const isUniqueBitMask = (str) =>{
    let checker = 0;

    for(const c of str){
      const charIndex = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if((checker & (1<<charIndex)) !==0) return false;
      checker |= (1<<charIndex)
    }
    return true;
  }
  
 const testIsUnique = ()=>{
  console.assert(isUnique('abccc')===false);
  console.assert(isUnique('abc')===true);
  console.assert(isUnique('mustaf')===true);
 }
 
 const testisUniqueBitMask = ()=>{
  console.assert(isUniqueBitMask('abccc')===false);
  console.assert(isUniqueBitMask('abc')===true);
  console.assert(isUniqueBitMask('mustaf')===true);
 }
 

testIsUnique()
testisUniqueBitMask()