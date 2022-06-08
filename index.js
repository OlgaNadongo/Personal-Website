const formsubmit=document.getElementById("form").addEventListener("submit",submitForm)

function submitForm(event){

    event.preventDefault()// to prevent form from autosubmitting

    const nameInput=document.getElementById('name').value
    console.log(nameInput)

    const emailInput= document.getElementById('email').value
    console.log(emailInput)
}

//formsubmit=document.getElementById('submitted').innerHTML