function print(str,index){
    if(index===str.length){
        console.log(str.join(''));
        return;
    }
    if(str[index]==='?'){
        str[index]='0';
        print(str,index+1);
        str[index]='1';
        print(str,index+1);
        str[index]='?';
    }else{
        print(str,index+1);
    }
}

var input='1??0?101';
var str=input.split("");
print(str,0);