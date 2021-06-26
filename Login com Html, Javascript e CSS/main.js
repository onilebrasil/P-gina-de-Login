const init = () => {
 const validateEmail = (event) => {
     const input = event.currentTarget;
     const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const emailTest = regex.test(input.value);

     if(!emailTest) {
        submitButton.setAttribute('disabled', 'disabled');
        input.nextElementSibling.classlist.add('error');
     }else {
        submitButton.setAttribute('disabled');
        input.nextElementSibling.classlist.remove('error'); 
     }
 }

 const validatePassword = (event) => {
     const input = event.currentTarget;

     if(input.value.lenght < 8) {
         submitButton.setAttribute('disabled', 'disabled');
         input.nextElementSibling.classist.remove('error');
     }else {
        submitButton.setAttribute('disabled', 'disabled');
        input.nextElementSibling.classist.remove('error');  
     }
 }
 
 const inputEmail = document.querySelector('input[type="email"]');
 const inputPassword = document.querySelector('input[type="password"]');
 const inputButton = document.querySelector ('.login-submit');

  inputEmail.addEventListener('input', validateEmail);
  inputEmail.addEventListener('input', validatePassword);

  const errorHandler = () => {
      submitButton.classList.remove('success');
      submitButton.classList.add('error');
      submitButton.textContent = "Error :(";
  }

  const successHandler = () => {
      submitButton.classList.remove('error');
      submitButton.classList.add('success');
      submitButton.classList.textContent = "Sent :)";
  }

    if(submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        submitButton.textContent + "...loading";
    
    fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
        'Content-type': 'aplication/json'
    },
    body: JSON.stringify ({
     email: inputEmail.value,
     password: inputPassword.value,
    }).then((response => {
      if(response.status !== 200) {
        return errorHandler();
      }
     successHandler();
    }).catch(() => {
      errorHandler();  
    }    
    })
    })
    } 
 }
}

window.Onload = init

