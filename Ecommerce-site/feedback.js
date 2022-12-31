const scriptURL='https://script.google.com/macros/s/AKfycbymqJdYedLT9zC49PJxU4gc6y7mwm-3qWVz91cgHfnf2CfPwb3jsVXottrq4p_HxXbR/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptURL,{
        method:'POST',  
        body:new FormData(form)
    })
    .then(response=>alert("Thanks for your valuable feedback!!!"))
    .catch(error=>console.error('Error!',error.message))
})