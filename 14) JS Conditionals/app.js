// arrays and objects 
// conditionals 

// let students = ["ashish", "yash", "harsh", "krish"];
// students.push("om")
// //students.pop()
// console.log(students)
// students.splice(1,1, "harry") //(index value, delete count, Additems)



// console.log(students)


 let user = {
    name: 'harsh',
     email: 'harsh@gmail.com',
     address:  {
         address: 'lowerparel',
        city: 'mumbai',
         state: 'maharashtra'
   },
     hobbies: ['coding', 'cooking', 'running', 'dancing']
  }

  user.name='krish'
  user.age=30;
  delete user.email;
   console.log(user.address )


 //conditionals

//  if(10>5 ){
//     console.log('I am working...')
//     // console.log(typeof true)
//  }


//  let age=
//  if(age >= 18 && age <= 24){
//     console.log('eligible to play!')
//  }
//  else{
//     console.log('not eligible to play!')
//  }


// role: user(0) teacher(1) admin(2)
// document which can be accessed by either teacher or the admin

// let role = 'teacher';
// if (role == 'teacher' || role == 'admin'){
//        console.log('you can access!')
// }
// else{
//     console.log('you can not access!')
// }
 
         
 if(2){
     console.log('running...')
 }
 else{
     console.log('last hope!')
 }


//else if 

let day = 'mon';
     if (day == 'mon' || day == 'wed' || day == 'fri') {
  console.log('You have a live class today!!')
}
 else if (day == 'tues' || day == 'thurs' || day == 'sat' || day == 'sun')
 console.log('You do not have a live class today!!')

else {
    console.log(' Invalid day!!')
}


