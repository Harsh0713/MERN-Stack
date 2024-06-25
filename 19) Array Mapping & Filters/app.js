// let users = ['harsh', 'tejas', 'nidhi', 'krishiv', 'om', 'sahil'];
// console.log(users)


// users.forEach(function(abc){
//     console.log(abc)
// })



// let num = [1,2,3,4,5,6,7]
// num.forEach(function(n){
//     console.log(n*n)
// })


// //using forEach with Arrow function
// let nums = [1,2,3,4,5]
// nums.forEach((n)=>{
//     console.log(n*n)
 // })

// let arr = [1,2,3,4,5]
// let squrs = arr.map((n)=>{
//     return n*n
// })

// console.log(squrs)


const indianUsers = [
    {
      firstName: "Aarav",
      lastName: "Patel",
      age: 28,
      gender: "Male",
      salary: 50000,
      email: "aarav.patel@example.com"
    },
    {
      firstName: "Isha",
      lastName: "Singh",
      age: 25,
      gender: "Female",
      salary: 55000,
      email: "isha.singh@example.com"
    },
    {
      firstName: "Vikram",
      lastName: "Sharma",
      age: 32,
      gender: "Male",
      salary: 60000,
      email: "vikram.sharma@example.com"
    },
    {
      firstName: "Neha",
      lastName: "Gupta",
      age: 30,
      gender: "Female",
      salary: 48000,
      email: "neha.gupta@example.com"
    },
    {
      firstName: "Rahul",
      lastName: "Kumar",
      age: 35,
      gender: "Male",
      salary: 70000,
      email: "rahul.kumar@example.com"
    },
    {
      firstName: "Kavita",
      lastName: "Mishra",
      age: 28,
      gender: "Female",
      salary: 52000,
      email: "kavita.mishra@example.com"
    },
    {
      firstName: "Siddharth",
      lastName: "Verma",
      age: 29,
      gender: "Male",
      salary: 58000,
      email: "siddharth.verma@example.com"
    },
    {
      firstName: "Ananya",
      lastName: "Das",
      age: 26,
      gender: "Female",
      salary: 53000,
      email: "ananya.das@example.com"
    },
    {
      firstName: "Arjun",
      lastName: "Rajput",
      age: 31,
      gender: "Male",
      salary: 65000,
      email: "arjun.rajput@example.com"
    },
    {
      firstName: "Priya",
      lastName: "Thakur",
      age: 27,
      gender: "Female",
      salary: 55000,
      email: "priya.thakur@example.com"
    }
  ];
  
//   console.log(indianUsers);

// let firstName = indianUsers.map((user)=>{
//     return user.firstName
// })

// console.log(firstName);

// let age = indianUsers.map((abc)=>{
//     return abc.age
// })

// console.log(age)


// let names = indianUsers.map((xyz)=>{
//     return xyz.firstName + " " + xyz.lastName
// })

// console.log(names)


// let males = indianUsers.filter((abc)=>{
//     return abc.gender == 'Male'
// })

// console.log(males)
  
   
//calculate the 10% tax for each user and store its name and tax

let tax = indianUsers.map((abc)=>{
    if (indianUsers.salary < 55000){
        return {
            name: abc.firstName,
            salary: abc.salary,
            tax: abc.salary * .1,
    
        }

    }
    else {
        return {
            name: abc.firstName,
            salary: abc.salary,
            tax: abc.salary * .2,
    
        }

    }
})

console.log(tax);