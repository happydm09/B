var tags = []

$("[data-tag]").click((e) => {
  var tag = e.target.dataset.tag
  
  if (tags.includes(tag)) { tags.splice(tag, 1) }
  else {
    tags.push(tag)
    filter() 
  }
})

function filter() {
  $('.hide').removeClass('hide');
  $('.post').each((index, el) => {
    for (var i=0; i < tags.length; i++) {
      console.log(tags[i])
      if (!el.hasAttribute(`data-${tags[i]}`)) { $(el).addClass('hide') }
      else {$(el).removeClass('hide')}
    }
  })
}
