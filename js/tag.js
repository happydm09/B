var tags = []

$("[data-tag]").click((e) => {
  var tag = e.target.dataset.tag
  
  if (tags.includes(tag)) { tags.splice(tag) }
  else {
    tags.push(tag)
    filter(tags) 
  }
})

function filter(tag) {
  $('.hide').removeClass('hide');
  $('.post').each((index, el) => {
    for (var i=0; i < tags.lenght; i++) {
      if (!el.hasAttribute(`data-${tag}`)) { $(el).addClass('hide') }
    }
  })
}
