var cur_tag = ''

function SelectedTag(e) {
  var tag = e.getAttribute('tag')
  var query = `[data-${tag}]`
  var posts = document.getElementById('posts').querySelectorAll(query)
  
  if (cur_tag.includes(tag)) {
    cur_tag = cur_tag.replace(tag, '')
    console.log('이미 있음')
    
    for (var i=0; i < posts.length; i++) {
      posts[i].className += 'hide'
    }
    
  } else {
    
    cur_tag += tag
    console.log(tag)
  
    for (var i=0; i < posts.length; i++) {
      posts[i].className = posts[i].className.replace('hide', '')
    }
  }
}

function Hide_All_Posts() {
  var posts = document.getElementById('posts').querySelectorAll('div.container')
  
  for (var i=0; i < posts.length; i++) {
      posts[i].className += 'hide'
    }
}
