function feedback(){
     let title = document.getElementById('title');
     let btn = document.getElementById('btn');

     //taking the input from the user
     let nameInput = document.getElementById('name')
     console.log(nameInput.value);
      

     let emailInput = document.getElementById('email')
     console.log(emailInput.value);
      
     
     let output = 'Thanks for the feedback ' +  nameInput.value;
     title.innerText = output; 
     btn.style.display = 'none';
}