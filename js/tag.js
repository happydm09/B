$("[data-tag]").click((e) => { filter(e.target.dataset.tag) })

function filter(tag) {
  $('.hidden').removeClass('hidden');
  $('.post').each((index, el) => {
    if (!el.hasAttribute(`data-${tag}`)) { $(el).addClass('hidden') }
  })
}
