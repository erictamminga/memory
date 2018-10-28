//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "halloween"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";


var dataArray = []
dataArray = axios.get(apiUrl)
.then(function (response){
    //console.log(response)
    var deck = document.querySelectorAll(".grid-item")
    //console.log(deck)
    var index = 0;
    var images = response.data.hits;
    //work here
    
    // console.log(images)
    // images.forEach((item)=>{
    //     var element = createImageElement(item.largeImageURL, 'frontFace')
    //     deck[index].appendChild(element)
    //     index ++;
    // });
     
    
    //we have a deck without images but they are cards
    //we are grabbing 10 images from the 20 available
    var imageSelection = grabRandomImage(images);
    console.log(imageSelection);
    //var shuffleImages = shuffle(imageSelection)
    //console.log(shuffleImages)
    
    

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
 
//  function shuffle(cards) {
//     cards.forEach(card => {
//       let ramdomPos = Math.floor(Math.random() * cards.length);
//       card.style.order = ramdomPos;
//     });
//     return cards
//    }