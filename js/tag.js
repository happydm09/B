var cur_tag = ''

function SelectedTag(e) {
  var tag = e.getAttribute('tag')
  var query = `[data-${tag}]`
  var posts = document.getElementById('posts').querySelectorAll(query)
  
  if (cur_tag.includes(tag)) {
    e.className = e.className.replace(' selected', '')
    cur_tag = cur_tag.replace(tag, '')
    
    for (var i=0; i < posts.length; i++) {
      posts[i].className += ' hide'
    }

    if (cur_tag == '') {
      Show_All_Posts()
    }
    
  } else {
    e.className += ' selected'
    cur_tag += tag
  
    for (var i=0; i < posts.length; i++) {
      posts[i].className = posts[i].className.replace(' hide', '')
    }
  }
    alert(cur_tag)
}

function Hide_All_Posts() {
  var posts = document.getElementById('posts').querySelectorAll('div.container')
  
  for (var i=0; i < posts.length; i++) {
      posts[i].className += ' hide'
    }
}

function Show_All_Posts() {
    var posts = document.getElementById('posts').querySelectorAll('div.container')
  
  for (var i=0; i < posts.length; i++) {
      posts[i].className = posts[i].className.replace(' hide', '')
    }
}

Hide_All_Posts()
