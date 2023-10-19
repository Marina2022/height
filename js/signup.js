const SSOBtn = document.querySelector('.SSO-btn')
const SSOBackBtn = document.querySelector('.SSO-back-btn')
const loginAnotherWay = document.querySelector('.login-another-way')
const SSOForm = document.querySelector('.SSO-form')
const mainForm = document.querySelector('.main-form')
const SSOEmailBackBtn = document.querySelector('.SSO-email-back-btn')
const SSOEmailForm = document.querySelector('.SSO-email-form')

const continueWithEmail = document.querySelector('.continue-with-email')
const passwordForm = document.querySelector('.password-form')
const passwordBackBtn = document.querySelector('.password-back-btn')
const codBackBtn = document.querySelector('.code-back-btn')
const codeForm = document.querySelector('.code-form')


const loginNextBtn = document.querySelector('.login-next-btn')


SSOBtn.addEventListener('click', ()=>{
  SSOForm.classList.toggle('hidden')
  mainForm.classList.toggle('hidden')
})

SSOBackBtn.addEventListener('click', ()=>{
  SSOForm.classList.toggle('hidden')
  SSOEmailForm.classList.toggle('hidden')
})

loginAnotherWay.addEventListener('click', ()=>{
  SSOForm.classList.toggle('hidden')
  mainForm.classList.toggle('hidden')
})


SSOEmailBackBtn.addEventListener('click', ()=>{
  SSOEmailForm.classList.toggle('hidden')
  mainForm.classList.toggle('hidden')
})

continueWithEmail.addEventListener('click', (e)=>{
  e.preventDefault()
  passwordForm.classList.toggle('hidden')
  mainForm.classList.toggle('hidden')
})

passwordBackBtn.addEventListener('click', ()=>{
  passwordForm.classList.toggle('hidden')
  mainForm.classList.toggle('hidden')
})

codBackBtn.addEventListener('click', ()=>{
  passwordForm.classList.toggle('hidden')
  codeForm.classList.toggle('hidden')
})

loginNextBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  passwordForm.classList.toggle('hidden')
  codeForm.classList.toggle('hidden')
})


const codeInput = document.querySelector('.code-input');
console.log(codeInput)
const maskOptions = {
  mask: '000-000'
};
const mask = IMask(codeInput, maskOptions);




