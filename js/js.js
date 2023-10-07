document.getElementById('submit-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
   

    if(name === 'nadira' 
    
    || name === 'rima'
    || name === 'Farjana'
    || name === 'Nadu'
    || name === 'Ashraf'
    
    
    ){
        window.location.href='second.html'
    }
    else{
        alert("nick name dew baby")
    }
})