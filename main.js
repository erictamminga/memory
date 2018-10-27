//make sure things are connected
console.log("oh hey")

// //What api are we calling
var API_KEY = "10520998-dbab288ebe7e1df80d761b434"
var SearchValue = "halloween"
var apiUrl = "https://pixabay.com/api/?key="+API_KEY + "&q=" + SearchValue + "&image_type=illustration&orientation=vertical";
axios.get(apiUrl)
.then(function (response){
    var pictureArray=[];
    ran = Math.floor(Math.random()*20)
    for(var i=0;i<20;i++){
        pictureArray[i]= response.data.hits[i].largeImageURL;
    }
    console.log(pictureArray[0])

    
    var tableData = document.getElementById(1 + "x" + 1);
    tableData.src = pictureArray[0]
    var tableData = document.getElementById(1 + "x" + 2);
    tableData.src = pictureArray[1]
    var tableData = document.getElementById(1 + "x" + 3);
    tableData.src = pictureArray[2]
    var tableData = document.getElementById(1 + "x" + 4);
    tableData.src = pictureArray[3]
    var tableData = document.getElementById(1 + "x" + 5);
    tableData.src = pictureArray[4]
    


    // var tableData2 = document.getElementById(2 + "x" + 3);
    // tableData2.src = pictureArray[2]



    console.log(response);
})
.catch(function (error){
    console.log(error)
})