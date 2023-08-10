var tags = []

$("[data-tag]").click((e) => {
  var tag = e.target.dataset.tag
  
  if (tags.includes(tag)) { tags.splice(tag, 1) }
  else { tags.push(tag) }
  
  filter()
  SelectTags()
})

function filter() {
  $('.hide').removeClass('hide')
  $('.post').each((index, el) => {
    var num = 0
    for (var i=0; i < tags.length; i++) {
      if (el.hasAttribute(`data-${tags[i]}`)) { num += 1 }
    }
    if (num == 0) { $(el).addClass('hide') }
  })

  if (tags.length == 0) { $('.hide').removeClass('hide') }
}

function SelectTags() {
  $(`.selected`).removeClass('selected')
  
  for (var i=0; i < tags.length; i++) {
      $(`.tag[data-tag=${tags[i]}]`).addClass('selected')
    }
}
