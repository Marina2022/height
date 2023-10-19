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
const lostPassBtn = document.querySelector('.lost-pass-btn')

const nextBtn = document.querySelector('.next-btn')
const changePasswordForm = document.querySelector('.change-password-form')
const changePassBackBtn = document.querySelector('.change-pass-back-btn')
const confirmBtn = document.querySelector('.confirm-btn')
const successModal = document.querySelector('.success-modal')
const successBackBtn = document.querySelector('.success-back-btn')
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

lostPassBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  codeForm.classList.toggle('hidden')
  passwordForm.classList.toggle('hidden')
})

codBackBtn.addEventListener('click', ()=>{
  passwordForm.classList.toggle('hidden')
  codeForm.classList.toggle('hidden')
})


const codeInput = document.querySelector('.code-input');
console.log(codeInput)
const maskOptions = {
  mask: '000-000'
};
const mask = IMask(codeInput, maskOptions);


nextBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  codeForm.classList.toggle('hidden')
  changePasswordForm.classList.toggle('hidden')
})


changePassBackBtn.addEventListener('click', ()=>{
  codeForm.classList.toggle('hidden')
  changePasswordForm.classList.toggle('hidden')
})

confirmBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  changePasswordForm.classList.toggle('hidden')
  successModal.classList.toggle('hidden')
})

successBackBtn.addEventListener('click', ()=>{
  changePasswordForm.classList.toggle('hidden')
  successModal.classList.toggle('hidden')
})



loginNextBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  passwordForm.classList.toggle('hidden')
  codeForm.classList.toggle('hidden')
})
