const form = document.querySelector('#form');
const pwd = document.querySelector('#password');
const cPwd = document.querySelector('#password2');

const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#msg');


let isValid = false ;
let pwdMatch = false;

function validateForm(){

// using Constraint api
isValid = form.checkValidity();
// console.log(isValid);
if(!isValid){


//style main message for an error 
message.textContent = 'Please Fill out all the fields';
message.style.color = 'red';
messageContainer.style.borderColor = 'red';
return;
}

// check pwd
if(pwd.value === cPwd.value){

pwdMatch = true;
pwd.style.borderColor = 'green';
cPwd.style.borderColor = 'green';
}

else {
pwdMatch = false;
message.textContent = 'Make sure password matches';
message.style.color = 'red';
messageContainer.style.borderColor = 'red';
pwd.style.borderColor = 'red';
cPwd.style.borderColor = 'red';

return;
}
// if form is valid and pwd match
if(isValid && pwdMatch){
message.textContent = 'Successfully Registered 😀';
messageContainer.style.borderColor = 'green';
}

}

function storeFormData (){

const user = {
name : form.name.value,
phone:form.phone.value,
email: form.email.value,
pwd: form.pwd.value

};

// do something with user data
console.table(user);
}
function processData (e){
// console.log('😆')
e.preventDefault();

// validate form 
validateForm()

// submit our data if is valid 

if(isValid && pwdMatch){
storeFormData();
}
}

// event listeners

form.addEventListener('submit', processData);
