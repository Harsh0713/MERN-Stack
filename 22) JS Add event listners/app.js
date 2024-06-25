// function test(){
//     console.log("test function is called!")
// }


//add the event listner??


 // targeting id


// let btn = document.getElementById('btn');
// btn.addEventListener("click", (e)=>{
//     console.log( e.target.innerText)
// })


//targeting class

// let btn = document.querySelector('#btn');
//   btn.addEventListener("click", ()=>{
//     console.log("button is clicked")
//   })

// let title = document.querySelector("h1");
//  title.addEventListener('click', ()=>{
//     console.log('heading is been clicked!!')
//  })

// let btns = document.querySelectorAll('.btn')
//   btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         console.log(e.target.innerText, 'is Clicked');
//     })

//   })

let foodItems = document.querySelectorAll('.card');
    foodItems.forEach((item)=>{
       item.addEventListener('click', (e)=>{
         console.log(item.dataset.title, item.dataset.price)
          
       })
    })