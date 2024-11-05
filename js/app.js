window.addEventListener('scroll', function(){
  let header = document.querySelector('#header #nav')
  header.classList.toggle('rolagem',window.scrollY > 600)

})


