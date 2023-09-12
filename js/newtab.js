function fetchImg(){
    fetch("https://source.unsplash.com/random/1920x1080/?modern")
    .then(function(response){
        return response.json();
    })
    .then(data => {
        const imgUrl = URL.createObjectURL(data);
        document.getElementById("img").src = imgUrl;
    })
    .catch(error => {
        console.log("Error")
    });
}
