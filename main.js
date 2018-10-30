//Api variables
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "dogs"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";

//setup global variables
var lastTwoFlippedCards = []
var score = 0;
var totalPairs =10;
var scoreElement = document.querySelector("#score")

//api call
var dataArray = axios.get(apiUrl)
.then(function (response){
    var cards = document.querySelectorAll(".grid-item")
    var imageSet = response.data.hits;
    var randomTenImages = shuffleArray(imageSet).splice(0,10)
    var doubleImages = randomTenImages.concat(randomTenImages);
    var shuffledImages = shuffleArray(doubleImages);

    //add the images to the div's
    shuffledImages.forEach((image,index)=>{
        var element = createImageElement(image.largeImageURL)
        cards[index].appendChild(element)
    })
document.querySelector(".grid-container").addEventListener("click", cardClicked);
})
.catch(function (error){console.log(error)})

function createImageElement(src){
    var img = document.createElement('img');
    img.src = src;
    return img;
}

function cardClicked(e){
    e.target.classList.add("up");
    lastTwoFlippedCards.push(e.target);
    if (lastTwoFlippedCards.length === 2){ //check for pair
        cleanUpNonMatch(lastTwoFlippedCards);
        lastTwoFlippedCards = [];
    }
}

function cleanUpNonMatch(array){
    if(array[0].firstChild.src!=array[1].firstChild.src){ 
        setTimeout(()=>{
            array[0].classList.remove("up");
            array[1].classList.remove("up");
        },200)
    }else{//correct match
        updateScore(100); 
        if (score/100==totalPairs){
            setTimeout(()=>{alert("You Win",resetGame())},500)
        }
    }
}

function shuffleArray(array){
    var length = array.length;
    var newArray = [];
    for (var i=0;i<length;i++){
        random = Math.floor(Math.random()*array.length)
        newArray.push(array[random])
        array.splice(random,1)
    }
    return newArray;
}

//add to the score variable and then replace the text content with the new content
function updateScore(amount){
    score += amount
    scoreElement.textContent = "Score: " + score;
}

function resetGame(){
    //clear all tiles
    var cards = document.querySelectorAll(".grid-item")
    cards.forEach((image)=>{
        image.classList.remove("up")
    })
    //remove child images
    //shuffle images
    //append child images
}