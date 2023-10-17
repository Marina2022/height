const sidebarDropdown = document.querySelector('.sidebar-dropdown')
const sidebarCollapsable = document.querySelector('.sidebar-collapsable')
const dropdownArrow = document.querySelector('.dropdown-arrow')

sidebarDropdown.addEventListener('click', ()=>{
  sidebarCollapsable.classList.toggle('hidden')
  dropdownArrow.classList.toggle('rotated')
})

