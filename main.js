//make sure things are connected
console.log("oh hey")

// //What api are we calling
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY;
axios.get(apiUrl)
.then(function (response){
    console.log(response)
})