//1.globalThis
console.log(window);
console.log(self);
console.log(frames);
console.log(this);
console.log(globalThis);
//================================================================
//2.Promise.allSettled()
const p1 = new Promise((resolve,reject)=>setTimeout(resolve,100));
const p2 = new Promise((resolve,reject)=>setTimeout(reject,100));
const p3 = new Promise((resolve,reject)=>setTimeout(resolve,100));
Promise.allSettled([p1,p2,p3]).then(result=>result.forEach(element =>{
    console.log(element);
}));
//=====================================================================
//3. Nullish Coalescing operator ??
//example 1:
let x1={
    employee:{
        name:"salman"
    }
}
console.log(x1.employee.name);
//example 2:
let x2={
    employee:{
    }
}
console.log(x2.employee.name);
//example 3:
let x3={
    employee:{
    }
}
console.log(x3.employee.name || "salman");
//example 4:
let x4={
    employee:{
        name:''
    }

}
console.log(x4.employee.name || "salman");
//output:salman

//example 5:
let x5={
    employee:{
        name:''
    }

}
console.log(x5.employee.name ?? "salman");
//output:''
//=======================================================
//4. optional chaining operator ?.
//example 5:
let x6={
    employee:{
        name:''
    }

}
console.log(x6.employee.name ?? "salman");

//example 5:
let x7={

}
//console.log(x7.employee.name);
console.log(x7 && x7.employee && x7.employee.name);
//example 5:
let x8={
}
console.log(x8?.employee?.name);

//==============================================================

//5.BigInt
const max=Number.MAX_SAFE_INTEGER;
console.log(max+1);
console.log(max+2);

const bigOne=1n;
console.log(bigOne+1n);
console.log(bigOne+2n);
//console.log(bigOne+2);

const bigOneNew=BigInt('1');
console.log(bigOneNew);


//=================================================================