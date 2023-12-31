let label1 = document.getElementById("label1")
let label2 = document.getElementById("label2")
let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

label1.style.top = "0"
label1.style.fontSize = "16px"
label2.style.top = "0"
label2.style.fontSize = "16px"

inp1.addEventListener("focus",()=>{
    label1.style.top= "-20px"
    label1.style.fontSize = "12px"
})
inp1.addEventListener("blur",()=>{
    label1.style.top= "0"
    label1.style.fontSize = "16px"
})

inp2.addEventListener("focus",()=>{
    label2.style.top= "-20px"
    label2.style.fontSize = "12px"
})
inp2.addEventListener("blur",()=>{
    label2.style.top= "0"
    label2.style.fontSize = "16px"
})