//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "trees"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";

//setup
var lastTwoFlippedCards = []
var score = 0;
var scoreElement = document.querySelector("#score")

//api call
var dataArray = axios.get(apiUrl)
.then(function (response){
    var cards = document.querySelectorAll(".grid-item")
    //let cards = [...deck];
    
    var imageSet = response.data.hits;
    var images = [...imageSet];

    var randomImages = shuffleArray(images).splice(0,10)
    var doubleImages = randomImages.concat(randomImages);
    var shuffledImages = shuffleArray(doubleImages);

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

var cardClicked = function (e){
    e.target.classList.add("up");
    lastTwoFlippedCards.push(e.target);

    if (lastTwoFlippedCards.length>0){ //already clicked one
        if (lastTwoFlippedCards.length === 2){ //check for pair
            cleanMatch(lastTwoFlippedCards);
            resetVariables();
        }
    }
}

function cleanMatch(array){
    if(array[0].firstChild.src!=array[1].firstChild.src){ 
        setTimeout(()=>{
            array[0].classList.remove("up");
            array[1].classList.remove("up");
        },200)
    }else{//correct match
        updateScore(100); 
    }
}

function resetVariables(){
    lastTwoFlippedCards = [];
}

// //randomizeAllImages(array) and getTenRandomImages do the same thing except one only returns 10 items
// function randomizeAllImages(array){
//     let copyArray = [];
//     while(array.length>0){
//         ranNumber = Math.floor(Math.random()*array.length);
//         copyArray.push(array[ranNumber])
//         array.splice(ranNumber,1)
//     }
//     return copyArray;
// }
// function getTenRandomImages(array){
//     var newArray = [];
//     for (var i=0;i<10;i++){
//         random = Math.floor(Math.random()*array.length)
//         newArray.push(array[random])
//         array.splice(random,1)
//     }
//     return newArray;
// }
//refactored into one array that shuffles, will clip the array length later by using splice
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
