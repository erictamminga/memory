//make sure things are connected
console.log("oh hey")
let pictureArray = [];
// //What api are we calling
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=halloween&image_type=illustration";
axios.get(apiUrl)
.then(function (response){
    var picture= response.data.hits[Math.floor(Math.random()*50)].webformatURL;

    console.log(picture)
    var tableData = document.getElementById("halloween");
    console.log(tableData)
    tableData.src = picture
    console.log(tableData.src)
})