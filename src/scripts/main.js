var sidebar = document.querySelector('aside')
var button = document.querySelector('header > button')
var main = document.querySelector('main')

button.addEventListener('click', function () {
  if (!sidebar.classList.contains('hidden')) {
    sidebar.classList.add('hidden')
    sidebar.style.transform = 'translatex(-450px)'
    main.style.transform = 'translatex(-140px)'
    button.innerHTML = '<i class="fas fa-bars"></i>'
    var icon = document.querySelector('header > button i')
    icon.style.transform = 'rotate(0deg)'
  } else {
    sidebar.classList.remove('hidden')
    sidebar.style.transform = 'translatex(0px)'
    main.style.transform = 'translatex(0px)'
    button.innerHTML = '<i class="fas fa-plus"></i>'
  }
})


var checkbox = document.querySelector('#list1')
var hw = document.querySelector('#list1 + a')
checkbox.addEventListener('click', function () {

  if (checkbox.checked) {
    hw.classList.add('af')
  } else {
    hw.classList.remove('af')
  }
})

var week1Btn = document.querySelector('#week1')
var week2Btn = document.querySelector('#week2')
var week3Btn = document.querySelector('#week3')
var week1 = document.querySelector('.week1')
var week2 = document.querySelector('.week2')
var week3 = document.querySelector('.week3')

if(week1Btn) {
week1Btn.addEventListener('click', function() {
  week1.style.display == 'block' ? week1.style.display = 'none' : week1.style.display = 'block'
  if(!week1Btn.checked && !week2Btn.checked && week3Btn.checked) {
    document.querySelector('.week3 h2').style.display = 'none'
  } else {
    document.querySelector('.week3 h2').style.display = 'block'
  }
})
if(!week1Btn.checked && !week2Btn.checked && week3Btn.checked) {
  document.querySelector('.week3 h2').style.display = 'none'
} else {
    document.querySelector('.week3 h2').style.display = 'block'
}

week2Btn.addEventListener('click', function() {
  week2.style.display == 'block' ? week2.style.display = 'none' : week2.style.display = 'block'
  if(!week1Btn.checked && !week2Btn.checked && week3Btn.checked) {
    document.querySelector('.week3 h2').style.display = 'none'
  } else {
    document.querySelector('.week3 h2').style.display = 'block'
  }
})


week3Btn.addEventListener('click', function() {
  week3.style.display == 'none' ? week3.style.display = 'block' : week3.style.display = 'none'
  if(!week1Btn.checked && !week2Btn.checked && week3Btn.checked) {
    document.querySelector('.week3 h2').style.display = 'none'
  } else {
    document.querySelector('.week3 h2').style.display = 'block'
  }
})

}