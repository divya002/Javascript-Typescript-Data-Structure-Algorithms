let a={
    name:{
        class1:[99,89,8999],
        class2:['dp','google']
    }
}

let b="name.*.0";
let ans=[];
function findSelect(docs,b){
    let items=b.split('.');
    recursiveFind(docs,items,0);
    return ans;
}

function recursiveFind(docs,items,i){
    if(!docs){
        ans.push(null);
        return;
    }
    else if(i===items.length){
        ans.push(docs);
        return;
    }
    else if(items[i]==='*'){
        if(typeof docs===Object && docs.length){
            docs.forEach(doc=>{
                recursiveFind(doc,items,i+1);
            })
        }
        else{
            for(let key in docs){
                recursiveFind(docs[key],items,i+1);
            }
        }
    }
    else{
    recursiveFind(docs[items[i]],items,i+1);
    }
    
}
console.log(findSelect(a,b));