//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "trees"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";

var lastTwoFlippedCards = []


var dataArray = axios.get(apiUrl)
.then(function (response){
    var deck = document.querySelectorAll(".grid-item")
    let cards = [...deck];
    
    
    var imageSet = response.data.hits;
    var images = [...imageSet];

    var randomImages = getTenRandomImages(images);
    var doubleImages = randomImages.concat(randomImages);    
    var shuffledImages = randomizeAllImages(doubleImages);

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

function getTenRandomImages(array){
    var newArray = [];
    var count = array.length
    for (var i=0;i<10;i++){
        random = Math.floor(Math.random()*array.length)
        newArray.push(array[random])
        array.splice(random,1)
    }
    return newArray;
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
    }
 }
 function resetVariables(){
     lastTwoFlippedCards = [];
 }

function randomizeAllImages(array){
    let copyArray = [];
    while(array.length>0){
        ranNumber = Math.floor(Math.random()*array.length);
        copyArray.push(array[ranNumber])
        array.splice(ranNumber,1)
    }
    return copyArray;
}
