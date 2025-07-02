console.log("Hello World");
function sayHello(){
    console.log("Hello from sayHello function");
}
sayHello();
console.log("This is a simple JavaScript program"); 

console.log("one");
console.log("Two");
setTimeout(()=>{
    console.log("Hello World"); 
},5000);
console.log("Three");
console.log("Four");
function sum(a,b){
    console.log(a+b);
}
function caluclator(a,b,ds){
    ds(a,b);
}
caluclator(5,10,sum);

caluclator(5,19,(a,b)=>{
    console.log(a+b);
})
for (let i=0; i<5;i++)
{
    let str="";
    for(let j=0;j<5;j++){
        str +=j;
    }
    console.log(i,str);
}
function getData(dataid) {
    setTimeout(()=>{
        console.log("Fecthing Data for Id",dataid);
    },5000);
}
getData(1);
getData(2);
getData(3);
function getData(dataid,getnextdata) {
    setTimeout(()=>{
        console.log("Fecthing Data for Id",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("getting data3...");
        getData(3);
    });
});
const myPromise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        const success = true;
        if(success){
            resolve("Data feteched successfully");
        }
        else{
            reject("Error fecthing data");
        }
    },2000);
})

myPromise
        .then((data)=>{
            console.log("Promise resolved with data:",data);
            
        })
        .catch((error)=>{
            console.error("Promise rejectedwith an Error:",error);
            
        })
let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
    if(1<0){
        resolve(123);
    }
    reject("Something went wrong");
});
function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
        },2000);
    });
}
let result =getData(123);
result;
targetData(101)
    .then(result=>{
        console.log("First fecth:",result);
        return getData(102);
    })
.then(result=>{
        console.log("Second fecth:",result);
        return getData(103);
    })
.then(result=>{
        console.log("Third fecth:",result);
        return getData(104);
    })
    .catch(err => {
        console.error("Error Occurred",err);
    });
const getpromise=()=>{
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("Promise resolved");
    });
}
let result = getpromise();
result
    .then(data=>{
        console.log(data); 
    });
    result .catch(error=>{
        console.error("Error occured",error); 
    });
function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },4000);
    });
}
console.log("Fecting data1..");
let p1 = asyncFunc1();
p1.then((data)=>{
    console.log("Data fetched:",data);
    console.log("fecthing data2...");
    let p2 = asyncFunc2();
    p2.then((data)=>{
        console.log("Data fecthed..",data);
        
    });
})
function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fecthing data for id:",id);
            resolve(id);
        },1000);
    });
}

async function fetchData(){
    try{
        const data1 = await getData(101);
        console.log("First fetch:",data1);
        const data2 = await getData(102);
        console.log("Second fetch:",data2);
        const data3 = await getData(103);
        console.log("Third fetch:",data3);
    }catch(error){
        console.error("Error occured:",error);
        
    }
}