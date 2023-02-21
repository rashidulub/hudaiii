document.getElementById('next-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    


    if(name==="rashed" || name === 'Rashed'|| name === 'Rashidul Islam'){
        window.location.href='forth.html'
    }
    else{
        alert('Jamai er Name vule gela jan ???')
    }
})