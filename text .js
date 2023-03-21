const total =document.getElementById('total');
const remain =document.getElementById('remain');
const textArea =document.querySelector('textarea');
const button =document.getElementById('button');

button.addEventListener('click',()=>{
    textArea.value=''
    total.innerHTML=''
    remain.innerHTML=''

    
 })

textArea.addEventListener('keyup',()=>{
   update();
  
    
})

function update(){
    total.innerHTML=textArea.textLength;
    remain.innerHTML= textArea.maxLength - textArea.textLength;
    
}

