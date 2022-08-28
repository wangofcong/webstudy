function add(var1,var2){
    return var1+var2
}
Object();
let b
b = add(1, 2)
document.writeln('<pre>')
document.writeln(b)
document.writeln('hello')
document.writeln(b.valueOf())
let a = 'wangcong'
document.writeln(a.constructor)
// document.writeln(a.big())
// document.writeln(a.fontsize(22))
document.writeln(a.link('source/img/love.jpg'))
document.writeln(a.fontcolor('red'))
document.writeln(a.indexOf('a',2))
document.writeln(a.toUpperCase())
let date = new Date(2020,12,30)
document.writeln(date)
console.log('helo')
console.log(Math.max(2,46,7))


let y = (x1,y1)=>x1*x1+y1
document.writeln(y(2,3))
class people1{
    constructor(age,name) {
        this.age = age
        this.name = name
    }
    say(){
        document.writeln(`my name is ${this.name} and i am ${this.age}.`)
    }
    set zy(zy1){
        this.zy1 = zy1
    }
    get zy(){
        return this.zy1
    }
    static pr(){
        document.writeln("i am static")
    }
}
let p1 = new people1(13,'jack')
p1.say()
p1.zy=23
document.writeln(p1.zy)
people1.pr()
function People(age,name){
    this.age = age
    this.name = name
    this.say=()=>document.writeln(`my name is ${this.name} and i am ${this.age}.`)
}
let p2 = new People(23,'marry')
p2.say()

People.prototype.love = ()=>document.writeln(People.prototype)
p2.love()


let name = {
    alice:23,
    jacd:34,
    '王茜':34,
    'al bob':100
}
document.writeln(name.王茜)
let info = new Map()
info.set('name','wc')
info.set('zy','info and cmpute')
document.writeln(info.get("name"))
document.writeln(p2 instanceof people1)
let r1 = /ab/
let r2 = /.1/
let string1 = 'ab1c'
document.writeln(r1.test(string1))
document.writeln(r2.exec(string1))


document.writeln('</pre>')