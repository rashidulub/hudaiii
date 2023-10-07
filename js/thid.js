document.getElementById('next-btn').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    


    if(name==="Nadira" || name === 'Rashed'|| name === 'Nadu'){
        window.location.href='forth.html'
    }
    else{
        alert('Jamai er Name vule gela jan ???')
    }
})