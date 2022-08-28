document.writeln('<pre>')
document.writeln('this is the second time learm js!')
let text1 = document.getElementById('p1')

text1.value = 'hello,world'
let b1 = document.getElementsByName('b1')
let f1 = ()=>text1.value = 'hava set'
b1.onclick = f1()
let h1 = document.getElementsByTagName('h1')[0]
let p1=document.createElement("p")
p1.textContent='he'
document.body.appendChild(p1)
document.writeln(h1.style.color)
let p2 = document.getElementsByTagName('strong')[0]
document.writeln(p2.getAttribute('data-role1'))
p2.setAttribute('hell','gg')
document.writeln(p2.getAttribute('hell'))
p2.style.color='red'
let p3 = document.createElement('p')
p3.textContent='this is new element'
p3.style.color='#556622'
p3.setAttribute('data-life','yes')
p3.id='p3'
document.body.appendChild(p3)
let p33 = document.querySelector('#p3')
// p33.addEventListener('click',()=>document.writeln('do not click me'))
document.writeln(p33.style.color)
document.writeln(p3.offsetHeight)
document.writeln('<br>')
let form1 = document.createElement('form')
let input1 = document.createElement('input')
input1.type='button'
input1.value='love'
input1.addEventListener('click',()=>{alert('you click me <@>')})
form1.appendChild(input1)
document.body.appendChild(form1)
document.writeln('</pre>')