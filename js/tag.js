// Main 

var tags = []
var index = []

function filter() {
  $('.hide').removeClass('hide')
  
  if (index.length != 0 || tags.length != 0) {
    $('.post').each((ind, el) => {
      var num = 0
      var bool = 0
      
      for (var i=0; i < tags.length; i++) { // Tag
        if (el.hasAttribute(`data-${tags[i]}`)) { num += 1; break }
      }
      
      for (var i=0; i < index.length; i++) { // Keyword
        if (el.hasAttribute(`post-${index[i]}`)) { bool = 1; break }
      }

      if (index.length != 0) {
        if (bool != 1) { $(el).addClass('hide') }
      } else {
        if (num != 0) { $(el).removeClass('hide') }
      }
      if (num == 0) { $(el).addClass('hide') }
    })
  }

  console.log(tags)
  console.log(index)
}

// Search

function SearchPost(key) {
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', "https://happydm09.github.io/B/search.json", true)
  xhr.responseType = 'json'
  xhr.send()

  xhr.onload = function() {
     var json = xhr.response
     index = []
    
     for (var i = 0; i < json.length; i++) {
       var c = json[i]
       var s = c['title'] + c['preview'] +  c['content']
      
       if (s.indexOf(key) != -1) { index.push(i + 1) }
     }
  }
}

function Search() {
  var key = 'test'
  SearchPost(key)
  filter()
}

// Tag

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
