const sidebarDropdown = document.querySelector('.sidebar-dropdown')
const sidebarCollapsable = document.querySelector('.sidebar-collapsable')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const collapseRowsBtns = document.querySelectorAll('.collapse-rows-btn')
const editBtn = document.querySelector('.edit-btn')

// const dropDownContainer = document.querySelector('.drop-down-container')
// const

sidebarDropdown.addEventListener('click', ()=>{
  sidebarCollapsable.classList.toggle('hidden')
  dropdownArrow.classList.toggle('rotated')
})

collapseRowsBtns.forEach((collapseRowsBtn)=>{
  collapseRowsBtn.addEventListener('click', (e)=>{
    const dropdown = e.target.closest('.drop-down-container').querySelector('.collapse-container')
    dropdown.classList.toggle('hidden')
    collapseRowsBtn.classList.toggle('rotated-row')
  })
})



editBtn.addEventListener('click', (e)=>{

  const container = e.target.closest('.edit-container')
  const row = container.querySelector('.static-row')
  const input = container.querySelector('.edit-input')
  const text = row.querySelector('.text')

  const onBlur = (ev)=> {
    ev.target.classList.toggle('hidden')
    row.classList.toggle('hidden')
    text.textContent = input.value
    ev.target.removeEventListener('blur', onBlur)
  }

  input.classList.toggle('hidden')
  input.focus()
  input.value = text.textContent

  row.classList.toggle('hidden')

  input.addEventListener('blur', onBlur)
})