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
    
    console.log(images)
    images.forEach((item)=>{
        var element = createImageElement(item.largeImageURL, 'frontFace')
        deck[index].appendChild(element)
        index ++;
    });
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


