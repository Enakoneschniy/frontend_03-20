let a 
let b 
let flgA = 1
let flgB = 1


while(flgA){
    a = prompt("Введите значение a", 0)
     if(isNaN(a)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }
while(flgB){
    b = prompt("Введите значение b", 0)
     if(isNaN(b)) {
       alert("Должно быть введено число!")
     } else flgB = 0
    }
a = Number(a)
b = Number(b)
console.log(a)
console.log(b)

    if(a==null||b==null){
        alert("Не введены значения")
    } else if(a>b){
        alert("Максимальное число " + b)
    } else if(a==b){
        alert(a + "=" + b)
    } else if(a<b){
        alert("Максимальное число " + a)
    }