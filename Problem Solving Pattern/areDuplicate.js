function areThereDuplicates(...args) {
    args.sort((a,b)=>a > b);
    let i = 0;
    let j = 1;
    if(args.length===0)
    while (j<args.length) {
      if (args[i]===args[j]) {
        return true;
      }
        i++;
        j++;
      
    }
    return false;
  }
  console.log(areThereDuplicates());

  