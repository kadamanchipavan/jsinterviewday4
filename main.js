//1q
//global
var glo=118;
    function glob(){
        console.log(glo)
    }
    glob()
    //local
    function add(){
        var local=135;
        console.log(local)
    }
    //block scope
    {
        let abc=123;
        console.log(abc)
    }
    //2Q
    var undefined;
    console.log(undefined);
    var abcd=null;
    console.log(null)
    //5Q
    new Promise(function(resolve,reject){
        setTimeout(()=>{resolve(1)},1000);
    }).then(function(result){
        console.log(result);
        return result * 2;
    }).then(function(result){
        console.log(result);
        return result * 4;
    })
    .then(function(result){
        console.log(result);
        return result * 6;
    })
    //4Q
    var promise = new Promise(function(resolve,reject){
        const x="promise1";
        const y="promise2";
        if(x===y){
            resolve();
        }
        else{
            reject();
        }
    })
    promise.then(()=>{console.log("Success")}).catch(()=>{console.log("Failed")})
//6Q
function add(a,b) {
    console.log(a+b);
}
add(6,4);
add(10,10);