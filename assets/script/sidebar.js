let btn = document.getElementById('menu-icon')
btn.addEventListener('click', function() {
  let navbar = document.querySelector('.navbar')
  if(navbar.classList.contains('closeMenu')) {
    clearClasses(navbar)
     navbar.classList.add('openMenu')
  }else {
    clearClasses(navbar)
    navbar.classList.add('closeMenu')
  }
})

function clearClasses(navbar) {
  navbar.classList.remove('openMenu')
  navbar.classList.remove('closeMenu')
}