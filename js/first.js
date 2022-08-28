function welcome1(){
	alert('you will go into the world of wnagcong, are you sure you want to go to this page?')
}
const confirm1 = window.confirm('you will go into the world of wnagcong, are you sure you want to go to this page?');
if(confirm1===false)
	window.close()
document.writeln('hello,wangcong! welcome to the wordl of javascript!')
// alert('now , let us go!')
const a = 1;
const b = 2;
// 为哈不能换行
document.writeln('a+b= ',a+b)
document.writeln(a===1 && b !==1)
document.writeln(a!==2?1:2)
function showname(name){
	alert('you input is '+name+'!')
}
for (let j = 0; j <2; j++) {
	document.writeln('now j is '+j)
}
let arr1 = new Array(3)
arr1[4]='jack'
for (const arr1Key in arr1) {
	document.writeln(arr1Key)
}
document.writeln(arr1[2])
let arr2 = [1,'jakc','alice',false,0,true]
for (let arr2Key in arr2) {
	document.writeln(arr2[arr2Key])
}

class People {
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.sure = welcome1;
		this.say = say;
	}
}
function say(){
	alert(this.name+' is '+this.age+' and '+this.sex)
}
let marry= new People('marry',23,'woman')
marry.say()
marry.sure()
document.writeln('<pre>')
document.writeln('1\nhello,world')
document.writeln('</pre>')