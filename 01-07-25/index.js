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