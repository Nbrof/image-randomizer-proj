
const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]

//   const randomPic = Math.floor(Math.random() * cards.length)
//   console.log(randomPic)






const $main = $("main")
const $div = $("<div>")

$main.css("display", "flex")
$main.css("flex-wrap", "wrap")
$div.css("height", "100px")
$div.css("width", "100px")
$div.css("background-color", "blue")
// $div.css("display", "flex")


$main.append($div)
$div.text("Add an Image")

 

$div.on("click", (event) =>{
    imageAdd()     
})


const imageAdd = () => {
    const randomPic = Math.floor(Math.random() * cards.length)
    // const $main = $("main")
    const $div = $("<div>")
    const $img = $("<img>").attr("src", cards[randomPic])
    $img.addClass("square")
    $main.append($div)
    $div.append($img)
    
    $div.on("click", (event) =>{
    imageAdd()   
    })     
}

// $div.on("click", (event) =>{
//     imageAdd()
    
    
// })

// for (let index = 0; index < cards.length; index++) {
//     randomPic = Math.floor(Math.random() * cards.length);
//     console.log(randomPic)
// }









// $("main").append(".")


// $("div").on("click", (event)   => {
//     $div = $("div")
    
    
//     const clone = $(event.target) 
//     const $div = $("div")