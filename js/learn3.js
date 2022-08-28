let buttons = document.querySelectorAll('#button')
document.body.addEventListener('click',event=>{if(event.target.name==='button'){
    alert('you click me')
}})
window.addEventListener('keydown',event=>{
    if(event.key==='w')
        alert('w is down')
        window.open('javasctest.html')
})