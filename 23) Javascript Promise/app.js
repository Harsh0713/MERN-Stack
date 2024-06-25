 

// console.log('task 1')
//  setTimeout(() => {
//     console.log('task 2')
//  }, 2000 );
// console.log('task 3')


//promise
//Scenario Downloading an image
// const demoPromise = new Promise((resolve, reject) => {             //2 parameters resolve,reject
//     let status = false;
//     setTimeout(()=>{
//         if(status == true){
//             console.log('download completed');
//             resolve('download completed successfully')
//         }
//         else {
              
//             reject('download failed')
//         }
//     }, 3000)
// })

// demoPromise.then(()=>{
//     console.log('notification send!')
// }).catch((error)=>{
//      console.log('download failed')
// })




// API's
// fetch()
fetchQuote=()=>{
    fetch("https://type.fit/api/quotes").then((data)=>{
    console.log('data fetched from the url')
   return data.json()
 })
 .then((data)=>{
     let random = Math.floor(Math.random()*data.length);
     document.getElementById('quote').innerText = data[random].text
     document.getElementById('author').innerText = data[random].author
 }) 




}


fetchQuote()


