// Tag 

var tags = []

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

$("[data-tag]").click((e) => {
  var tag = e.target.dataset.tag
  
  if (tags.includes(tag)) {
    const index = tags.indexOf(tag)
    if (index > -1) { tags.splice(index, 1) }
  }
  else { tags.push(tag) }
  
  filter()
  SelectTags()
})

// Search

function SearchPost(key) {
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', "https://happydm09.github.io/B/search.json", true)
  xhr.responseType = 'json'
  xhr.send()

  xhr.onload = function() {
     var json = xhr.response
     for (var i = 0; i < json.length; i++) {
       var c = json[i]
       var s = c['title'] + c['preview'] + c['content']

       if (s.indexOf(key) != -1) { console.log(i) }
     }
  }
}

// SearchPost("Jekyll")
