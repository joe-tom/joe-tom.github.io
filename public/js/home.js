var Container = document.getElementById('timeline__wrap')
var EVENTS = [
  {
    name: 'outclick',
    date: 'August 2016',
    repo: 'https://github.com/joe-tom/outclick.git'
  },
  {
    name: 'veck',
    date: 'September 2016',
    repo: 'https://github.com/joe-tom/veck.git'
  }
]

EVENTS.forEach(function (event, i) {
  var el = document.createElement('div')
  el.className = 'timeline__dot'
  el.style.top = (i * 80) + 'px'
  Container.appendChild(el)

  var label = document.createElement('span')
  label.className = 'timeline__label'
  label.innerHTML = event.name

  var date = document.createElement('span')
  date.className = 'timeline__date'
  date.innerHTML = event.date.replace(/ /g,'&nbsp;')

  el.appendChild(label)
  el.appendChild(document.createElement('br'))
  el.appendChild(date)

  el.onclick = function () {
    document.location = event.repo
  }
})











/** The menu code ... */
