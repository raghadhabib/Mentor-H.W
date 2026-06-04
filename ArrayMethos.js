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
// From users, count how many are active (result should be a number).
// From users, build an object that groups names by adult status — like:
// { adults: ["Ali", "Lena", "Nour"], minors: ["Sara", "Omar"] }


// From orders, get a flat array of all items across every order.
// From numbers, use flatMap to produce a new array where each number appears twice — e.g. [1, 1, 2, 2, 3, 3, ...].


//  Bonus — chain them together

// From users, get the names of active adults only — as a sorted array of strings.
// From orders, get all unique items across all orders (no duplicates).