console.log("こんにちは");
console.log("こんにちは" + "こんにちわん");
console.log("こんにちは" + " " + "おはよう");
console.log(123 + 3 + 4);



let num = 1;

for(var i=1;i<=10;i++){
        console.log(i);
};

let num2 = num * 2

console.log(num2);

let name = "太郎"

console.log(`こんにちは ${name}`)

// 関数
const calCircleArea = (radius) =>{
    let pai = 3
    let area = radius * radius * pai
     return area;
}

const names = (first,last) =>{
    console.log(`${first} ${last}`)
}

const number = calCircleArea(5)
console.log(number)

names("栗原","亮太")

// 要件分岐
const test = 90

if (test >=40) {
    if (test > 80) {
        console.log("最高")
    } else {
        console.log("普通")
    }
} else {
    console.log("赤点")
}

const score = 10

switch (score) {
    case 1:
        console.log(score)
        break
    case 2:
        console.log(score)
        break
    case 10:
        console.log(score)
        break
    default:
        console.log("その他")
}