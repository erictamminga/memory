
//Api
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "halloween"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";

axios.get(apiUrl)
.then(function (response){
    return dataArray= response.data.hits;
})
.catch(function (error){
    console.log(error)
})


function createImage(src){
    var img = document.createElement('img');
    img.src = src;
    return img;
}
