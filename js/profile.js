const avatarInput = document.querySelector('.avatar-input')
const avatarImg = document.querySelector('.avatar-img')
const iconSpan = document.querySelector('.icon-span')


// load avatar handler

avatarInput.addEventListener('change', (e)=>{
  const file = e.target.files[0]
  const reader = new FileReader
  reader.readAsDataURL(file);

  reader.onload = function (e) { // Как только картинка загрузится
    console.log(e.target.result)
    avatarImg.style.backgroundImage = `url(${e.target.result})`;

    if(iconSpan) iconSpan.textContent = ''
  }
})



