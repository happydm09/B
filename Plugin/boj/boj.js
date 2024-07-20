function getTier(n) {
  var r = 'unrated'
  
  if (0 < n && n <= 5) { r = 'bronze' }
  else if (5 < n && n <= 10) { r = 'sliver' }
  else if (10 < n && n <= 15) { r = 'gold' }
  else if (15 < n && n <= 20) { r = 'platinum' }
  else if (20 < n && n <= 25) { r = 'diamond' }
  else if (25 < n && n <= 30) { r = 'ruby' }
  else if (n == 31) { r = 'master' }
  
  return r
}

function getArenaTier(n) {
  var r = 'Unrated'
  if (0 < n && n <= 2) { r = 'C' }
  else if (2 < n && n <= 4) { r = 'B' }
  else if (4 < n && n <= 6) { r = 'A' }
  else if (6 < n && n <= 8) { r = 'S' }
  else if (8 < n && n <= 10) { r = 'SS' }
  else if (10 < n && n <= 12) { r = 'SSS' }
  else if (n == 13) { r = 'X' }
  
  //if (n != 0 && n % 2 == 0) { r += '+' }
  return r
}

function getAPI(URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.responseType = 'json';
    xhr.send();
    
    xhr.onload = function() {
     resolve(xhr.response)
    }
  })
}

function getText(msg) {
  var t = {'ac' : '맞았습니다!!', 'pac' : '맞았습니다!!', 'wa' : '틀렸습니다', 'tle' : '시간 초과', 'mle' : '메모리 초과', 'rte' : '런타임 에러', 'ce' : '컴파일 에러', 'pe' : '출력 형식이 잘못되었습니다'}
  return `<span class='color-result-${msg}'>${t[msg]}</span>`
}

async function getProblem(id) {
  var r = 0
  var a = await getAPI(`https://api-py.vercel.app/?r=https://solved.ac/api/v3/search/suggestion?query=id:${id}`)
  var level = a['problems'][0]['level']
  var name = a['problems'][0]['title']
  return `<span><img src="https://static.solved.ac/tier_small/${level}.svg" width="19px"></img> <b><a class='color-tier-${getTier(level)} no-underline solved-font' href="https://www.acmicpc.net/problem/${id}">${id}번 '${name}'</a></b><span>`
}

async function getUser(name) {
  var r = 0
  var a = await getAPI(`https://api-py.vercel.app/?r=https://solved.ac/api/v3/user/show?handle=${name}`)
  var tier = a['tier']

  return `<span><img src="https://static.solved.ac/tier_small/${tier}.svg" width="19px"></img> <b><a class='color-tier-${getTier(tier)} no-underline solved-font' href="https://solved.ac/profile/${name}">${name}</a></b><span>`
}

async function getUserFromArena(name) {
  var r = 0
  var a = await getAPI(`https://api-py.vercel.app/?r=https://solved.ac/api/v3/user/show?handle=${name}`)
  var tier = a['arenaTier']

  return `<span><img src="https://static.solved.ac/tier_arena/${tier}.svg" width="40px"></img> <b><a class='color-arena-${getArenaTier(tier)} no-underline solved-font' href="https://solved.ac/profile/${name}/arena" style="position: relative; top: -2px;">${name}</a></b><span>`
}

async function func(type, query) {
  return new Promise((resolve, reject) => {
    if (type == 'getProblem') {       getProblem(query).then(r => {resolve(r)}) 
    } else if (type == 'getUser') {
 getUser(query).then(r => {resolve(r)})
    } else if (type == 'result-text') {
      resolve(getText(query))
    } else if(type == 'getUserFromArena') {
 getUserFromArena(query).then(r => {resolve(r)})
    }
  })
}

class BojTag extends HTMLElement {
  connectedCallback() {
    var type = this.getAttribute('type')
    var query = this.getAttribute('query')
    this.setAttribute('class', this.getAttribute('class') + ' color-wait-load')
    this.innerHTML = "로드 중"
    func(type, query).then(r => { this.innerHTML = r })
  }
  
  static get observedAttributes() {
    return ['type', 'query']
  }
  
  attributeChangedCallback() {
    var type = this.getAttribute('type')
    var query = this.getAttribute('query')
    this.setAttribute('class', this.getAttribute('class') + ' color-wait-load')
    this.innerHTML = "로드 중"
    func(type, query).then(r => { this.innerHTML = r })
  }
}

customElements.define('plugin-boj', BojTag)
