//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "halloween"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";

var dataArray = []
dataArray = axios.get(apiUrl)
.then(function (response){
    console.log(response)
    return response.data.hits.forEach((item)=>{return createImageElement(item.largeImageURL)});
}).then(function (results){
    console.log(results)
})
.catch(function (error){
    console.log(error)
})

function createImageElement(src){
    var img = document.createElement('img');
    img.src = src;
    console.log(img)
    return img;
}
