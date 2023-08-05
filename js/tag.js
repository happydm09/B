function SelectedTag(e) {
  var tag = e.getAttribute('tag')
  var posts = document.getElementById('posts').querySelectorAll('[data-Jekyll]')

  for (var i=0; i < posts.length; i++) {
    console.log(posts[i])
  }
} 
