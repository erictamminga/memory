//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "halloween"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";
var value1 = []
var value2 = []

var dataArray = []
dataArray = axios.get(apiUrl)
.then(function (response){
    //console.log(response)
    var deck = document.querySelectorAll(".grid-item")
    let cards = [...deck];
    console.log(cards);
    for (var i = 0; i < cards.length; i++){
            cards[i].addEventListener("click", displayCard);
         };
    //console.log(deck)
    var index = 0;
    var images = response.data.hits;
    //work here
     
    
    //we have a deck without images but they are cards
    //we are grabbing 10 images from the 20 available
    var imageSelection = grabRandomImage(images);
    //const animalArray = [{animal:'dogs'},{animal:'birds'},{animal:'man'}];
    const sortArray = array =>{
        let copy = array.map(el => el);
        copy.sort(()=>{ return Math.floor(Math.random() * 20)});
        return copy;
    }
    console.log(imageSelection)
    const shuffledImages = sortArray(imageSelection);
    console.log(shuffledImages)

   //s console.log(imageSelection);
    //var shuffleImages = shuffle(imageSelection)
    //console.log(shuffleImages)
    shuffledArray =shuffle(imageSelection)
        console.log(shuffledArray)
        
    // 
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            //console.log(x)
            a[i] = a[j];
            a[j] = x;
            //console.log(a[j])
        }
        return a;
    }


    //from those 10 images we need to attach each one to two cards
        // for(var i=0; i < imageSelection.length;i++){
        //     deck[0]=createImageElement(imageSelection[i].largeImageURL, 'frontFace')
        //     deck[1]=createImageElement(imageSelection[i].largeImageURL, 'frontFace')
        // }
})
.catch(function (error){
    console.log(error)
})

function createImageElement(src, face){
    var img = document.createElement('img');
    img.src = src;
    img.className = face; 
    console.log(src)
    console.log(img)
    return img;
}

function grabRandomImage(array){
    var newArray = [];
    var count = array.length
    for (var i=0;i<10;i++){
        random = Math.floor(Math.random()*array.length)
        newArray.push(array[random])
        array.splice(random,1)
    }
    return newArray.concat(newArray);
 }
 
 function shuffle(array) {
    array.forEach(item => {
      let ramdomPos = Math.floor(Math.random() * 20);
      item.style.order = ramdomPos;
    });
}

// // cards array holds all cards
// let card = document.getElementsByClassName("card");
// let cards = [...card];
// // loop to add event listeners to each card
// for (var i = 0; i < cards.length; i++){
//    cards[i].addEventListener("click", displayCard);
// };
// //displayCard is a function we'll talk about this soon

var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
 }