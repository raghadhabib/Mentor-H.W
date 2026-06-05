const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = [
  { name: "Sara",  age: 17, active: true  },
  { name: "Ali",   age: 25, active: false },
  { name: "Lena",  age: 30, active: true  },
  { name: "Omar",  age: 15, active: true  },
  { name: "Nour",  age: 22, active: false },
];

const orders = [
  { id: 1, items: ["book", "pen"] },
  { id: 2, items: ["notebook", "eraser", "ruler"] },
  { id: 3, items: ["pen", "marker"] },
];

// From numbers, create a new array where every number is doubled.

console.log(numbers.map((num) => num * 2));

// From users, create an array of just their names (strings only)

const Names = users.map((user)=> user.name);
console.log(Names);

// From users, create an array of objects like { name: "Sara", isAdult: false } — where isAdult is true if age ≥ 18.
const isAdultArr = []
const adultsName = users.map((user) => {
    if(user.age >= 18){
        isAdultArr.isAdult = true;  
    }
    else{
        isAdultArr.isAdult = false;
    }
    console.log({"name":user.name , "isAdult": isAdultArr.isAdult})

})

// From numbers, keep only the even numbers.
console.log(numbers.filter((num) => num %2 == 0))

// From users, keep only users who are active
const ActiveUsers = users.filter((user) => user.active)
console.log(ActiveUsers);

// From users, keep only users who are adults (18+) and active.
const AdultActive = users.filter((user)=>{
    return (user.active== true) && (user.age >= 18);
})
console.log(AdultActive);

// From numbers, calculate the sum of all numbers.
const sumNums = numbers.reduce((total,current)=>total+current)
console.log("summation is",sumNums);


// From users, count how many are active (result should be a number).
const ActiveUsersReduse = users.reduce((tot,current) => { 
        if(current.active){
            return tot+1; //tot ++ gives 0 - return dosent wait
        }  
        return tot;
},0);
console.log("Actived", ActiveUsersReduse);


// From users, build an object that groups names by adult status — like:
// { adults: ["Ali", "Lena", "Nour"], minors: ["Sara", "Omar"] }

const groupsNames = users.reduce((acc, user)=>{
    if(user.age >= 18){
        acc.adults.push(user.name);
    }
    else{
        acc.minors.push(user.name);
    }
    return acc;
},{ adults: [], minors: [] })

console.log(groupsNames);


// From orders, get a flat array of all items across every order.
const flatted = orders.flatMap((order)=>order.items);
console.log(flatted)

// From numbers, use flatMap to produce a new array where each number appears twice — e.g. [1, 1, 2, 2, 3, 3, ...].
const twices = numbers.flatMap((num)=>[num,num])
console.log(twices);


// From users, get the names of active adults only — as a sorted array of strings.

// From orders, get all unique items across all orders (no duplicates).


