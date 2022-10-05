// alert(document.getElementById('service-title').outerHTML)

// alert(document.getElementsByClassName('lead')[0].outerHTML)
// alert(document.getElementsByClassName('lead')[1].outerHTML)

// alert(document.getElementsByTagName('a')[0].outerHTML)

document.getElementById('service-title').innerHTML="デイトラ"

// 要素の追加と属性追加
const login_btn = document.createElement('a')
login_btn.innerHTML = 'ログイン'
login_btn.setAttribute('id','login')
login_btn.setAttribute('class','btn')
login_btn.setAttribute('href','https://www.daily-trial.com/app/dashboard')
document.getElementById('js-for-web').appendChild(login_btn)

// JavaScriptクリック処理
// document.getElementById('register').click()


// 画面読み込み時処理
window.onload = function(){
    document.getElementById('service-title').innerHTML = 'デイトラ'
}

// クリック処理
document.getElementById('button').addEventListener('click',function(){
    document.getElementById('service-title').innerHTML = 'デイトラクリック'
})





