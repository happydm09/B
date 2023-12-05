// Main 

var tags = []
var index = []

function filter_by_keyword() {
    $('.post').addClass('hide')
    $('.post').removeClass('show')
    
    $('.post').each((ind, el) => {
        for (var i=0; i < index.length; i++) {
            if (el.hasAttribute(`post-${index[i]}`)) { 
                $(el).removeClass('hide')
                $(el).addClass('show') 
                break
            }
        }
    })
}

function filter_by_tag() {
    $('.post').addClass('hide')
    $('.post').removeClass('show')
    
    $('.post').each((ind, el) => {
        for (var i=0; i < tags.length; i++) {
            if (el.hasAttribute(`data-${tags[i]}`)) { 
                $(el).removeClass('hide')
                $(el).addClass('show') 
                break
            }
        }
    })
}


function filter(key) {
  $('#none').addClass('hide')
  if (index.length != 0) { filter_by_keyword() }
  if (tags.length != 0 && index.length != 0) {
    filter_by_keyword()  
    $('.show').addClass('hide')
      
    $('.show').each((ind, el) => {
        for (var i=0; i < tags.length; i++) {
            if (el.hasAttribute(`data-${tags[i]}`)) { 
                $(el).removeClass('hide')
                break
            }
        }
    })
  } 
  else if (index.length != 0) { filter_by_keyword() }
  else if (tags.length != 0) { filter_by_tag() }
  else if (key == '') { $('.hide').removeClass('hide'); $('#none').addClass('hide') }
  else { $('#none').removeClass('hide') }
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
     filter(key)
  }
}

var inp = document.querySelector("#inp");

inp.oninput = function() {
  SearchPost(inp.value)
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
