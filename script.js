const addPiece = document.querySelector(".pieceAdd")
const btnAdd = document.querySelector(".Add")
const total = document.querySelector(".price3")
const product1 = document.querySelector(".product1")
const product2 = document.querySelector(".product2")
const btnAdd2 =document.querySelector(".Add2")
const addPiece2 = document.querySelector(".pieceAdd2")


total.innerHTML = 0;

btnAdd.addEventListener("click", function(){
    total.innerHTML = Number(total.innerHTML)+Number(addPiece.value * product1.innerHTML)
})
btnAdd2.addEventListener("click", function(){
    total.innerHTML = Number(total.innerHTML)+Number(addPiece.value * product1.innerHTML)
})


