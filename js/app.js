const infoHTML = document.getElementById('info-html')
const infoCSS = document.querySelector('#info-css')
const infoSASS = document.querySelector('#info-sass')
const infoJS = document.querySelector('#info-js')
const infoSQL = document.querySelector('#info-sql')
const infoXD = document.querySelector('#info-xd')
let html = document.querySelector('#html')

let css = document.querySelector('#css')
let svgCss = document.querySelector("#svg-css")

let sass = document.querySelector('#sass')
let porcent = 0;

let js = document.querySelector('#js')

let sql = document.querySelector('#sql')

let xd = document.querySelector('#xd')
// function counter() {
//     let counter = 0
//     setInterval(() => {
//         if (counter == porcent) {
//             clearInterval() 
//         } else {
//             // for(i = 0, a = number.length; i < a; i++)
//             // {
//                 counter += 1
//                 number[i].innerHTML = counter + "%"
//             // }
//         }
//     }, 22);
// }

function toggleHTML() {
    infoHTML.classList.toggle('active')
    infoCSS.classList.remove('active')
    infoSASS.classList.remove('active')
    infoJS.classList.remove('active')
    infoSQL.classList.remove('active')
    infoXD.classList.remove('active')

    let numberHTML = document.querySelector('#number-html')
    
    let counter = 0
    setInterval(() => {
        if (counter == 90) {
            clearInterval() 
        } else {
            counter += 1
            numberHTML.innerHTML = counter + "%"
        }
    }, 22);
    
    let bar = document.querySelector('#progress-bar-html')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "anim 2s linear forwards", 5)
    
    html.classList.toggle('active')
    css.classList.remove('active')
    sass.classList.remove('active')
    js.classList.remove('active')
    sql.classList.remove('active')
    xd.classList.remove('active')
}

function toggleCSS() {
    infoCSS.classList.toggle('active')
    infoHTML.classList.remove('active')
    infoSASS.classList.remove('active')
    infoJS.classList.remove('active')
    infoSQL.classList.remove('active')
    infoXD.classList.remove('active')

    let numberCSS = document.querySelector('#number-css')

    let counter = 0
    setInterval(() => {
        if (counter == 80) {
            clearInterval() 
        } else {
            counter += 1
            numberCSS.innerHTML = counter + "%"
        }
    }, 25);

    html.classList.remove('active')
    css.classList.toggle('active')
    sass.classList.remove('active')
    js.classList.remove('active')
    sql.classList.remove('active')
    xd.classList.remove('active')

    let bar = document.querySelector('#progress-bar-css')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "animCSS 2s linear forwards", 5)

}

function toggleSASS() {
    infoSASS.classList.toggle('active')
    infoHTML.classList.remove('active')
    infoCSS.classList.remove('active')
    infoJS.classList.remove('active')
    infoSQL.classList.remove('active')
    infoXD.classList.remove('active')

    sass.classList.toggle('active')
    html.classList.remove('active')
    css.classList.remove('active')
    js.classList.remove('active')
    sql.classList.remove('active')
    xd.classList.remove('active')

    let numberSASS = document.querySelector('#number-sass')

    let counter = 0
    setInterval(() => {
        if (counter == 60) {
            clearInterval() 
        } else {
            counter += 1
            numberSASS.innerHTML = counter + "%"
        }
    }, 18);

    let bar = document.querySelector('#progress-bar-sass')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "animSASS 1s linear forwards", 5)
}

function toggleJS() {
    infoJS.classList.toggle('active')
    infoHTML.classList.remove('active')
    infoCSS.classList.remove('active')
    infoSASS.classList.remove('active')
    infoSQL.classList.remove('active')
    infoXD.classList.remove('active')

    js.classList.toggle('active')
    html.classList.remove('active')
    css.classList.remove('active')
    sass.classList.remove('active')
    sql.classList.remove('active')
    xd.classList.remove('active')

    let numberJS = document.querySelector('#number-js')

    let counter = 0
    setInterval(() => {
        if (counter == 40) {
            clearInterval() 
        } else {
            counter += 1
            numberJS.innerHTML = counter + "%"
        }
    }, 25);

    let bar = document.querySelector('#progress-bar-js')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "animJS 1s linear forwards", 5)
}

function toggleSQL() {
    infoSQL.classList.toggle('active')
    infoJS.classList.remove('active')
    infoHTML.classList.remove('active')
    infoCSS.classList.remove('active')
    infoSASS.classList.remove('active')
    infoXD.classList.remove('active')
    js.classList.remove('active')
    html.classList.remove('active')
    css.classList.remove('active')
    sass.classList.remove('active')
    sql.classList.toggle('active')
    xd.classList.remove('active')

    let numberSQL = document.querySelector('#number-sql')

    let counter = 0
    setInterval(() => {
        if (counter == 50) {
            clearInterval() 
        } else {
            counter += 1
            numberSQL.innerHTML = counter + "%"
        }
    }, 20);

    
    let bar = document.querySelector('#progress-bar-sql')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "animSQL 1s linear forwards", 5)
}

function toggleXD() {
    infoXD.classList.toggle('active')
    infoSQL.classList.remove('active')
    infoJS.classList.remove('active')
    infoHTML.classList.remove('active')
    infoCSS.classList.remove('active')
    infoSASS.classList.remove('active')
    js.classList.remove('active')
    html.classList.remove('active')
    css.classList.remove('active')
    sass.classList.remove('active')
    sql.classList.remove('active')
    xd.classList.toggle('active')

    let numberXD = document.querySelector('#number-xd')

    let counter = 0
    setInterval(() => {
        if (counter == 80) {
            clearInterval() 
        } else {
            counter += 1
            numberXD.innerHTML = counter + "%"
        }
    }, 12);

    
    let bar = document.querySelector('#progress-bar-xd')
    bar.getElementsByClassName.animation = ""
    
    setTimeout(() => bar.style.animation = "animXD 1s linear forwards", 5)
}

