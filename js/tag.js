$("[data-tag]").click((e) => { filter(e.target.dataset.tag) })

function filter(tag) {
  $('.hide').removeClass('hide');
  $('.post').each((index, el) => {
    if (!el.hasAttribute(`data-${tag}`)) { $(el).addClass('hide') }
  })
}
