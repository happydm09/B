// img
$(document).ready(function() {
  $('img').addClass('img-fluid');
  $('img').addClass('rounded');
});

function showCode(e) {
  var target = document.getElementById(e.getAttribute('target'))
  var parent = target.parentElement
  
  parent.querySelectorAll('.code').forEach(e => {
    e.classList.add('hide')
  })
  
  parent.querySelector('.cnav').querySelectorAll('.cfile').forEach(e => {
    e.classList.remove('selcted')
  })
  
  target.classList.remove('hide')
  e.classList.add('selcted')
}

function init() {
  var els = document.querySelectorAll('.cmain')
  
  els.forEach(el => {
    var codes = el.querySelectorAll('.code')
    
    codes.forEach(e => {
      console.log(e.getAttribute('main'))
      if (!e.getAttribute('main')) {
        e.classList.add('hide')
      }
    })
  })
}

init()
