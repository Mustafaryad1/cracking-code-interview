const urlify = (str)=>{
  let output = [];
  let previousSpace = false;
  for(const c of str){
    if(c===' '){
      if(previousSpace) continue;
      previousSpace=true;
      output.push('%20')
    }else{
      output.push(c);
      previousSpace = false;
    }
  }

  if(output[output.length-1]==='%20') output.pop();
  return output.join('')
}

console.log(urlify('Mr john      smith         ')=== 'Mr%20john%20smith')