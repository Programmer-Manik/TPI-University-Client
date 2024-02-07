const arr = [1,2,3,4]

const result = arr.reduce((acc,item)=>{
   acc.push(item)
   return acc;
},0);

console.log('final result => ',result)