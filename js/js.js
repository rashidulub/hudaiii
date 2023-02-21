document.getElementById('submit-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
   

    if(name === 'Misti' 
    
    || name === 'misti'
    
    
    ){
        window.location.href='second.html'
    }
    else{
        alert("nick name dew baby")
    }
})