const scores = [30,70,80,90,6,5,4,3,2]

console.log(scores)

scores.push("うしろ")

console.log(scores)

scores.pop()

console.log(scores)

scores[2] = "3番目に追加"

console.log(scores)

scores.shift()

console.log(scores)

console.log(scores[0])

console.log(scores.length)

// オブジェクト
const test = {
    math: 80 ,
    english: 70 ,
    science: 90
}

console.log(test.english)

test.english = 0

console.log(test.english)

const allScores = [
    {math:30,english:40,science:90},
    {math:70,english:20,science:50},
]

console.log(allScores[0].math)
console.log(allScores)


const names = {
    firstName:'栗原',
    lastName:'亮太',
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    sayHi:function(){
        const fullName = this.fullName()
        console.log(fullName)
    }
}

names.sayHi()

// 繰り返し

const ages = [1,2,3,4,5,6]

for(let age of ages) {
    console.log(age)
}

ages.forEach(function(age){
    console.log(age)
})