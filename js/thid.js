document.getElementById('next-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    


    if(name==="rashed" || name === 'Rashed'|| name === 'Nadu'){
        window.location.href='forth.html'
    }
    else{
        alert('Husband er Name vule gela jan ???')
    }
})