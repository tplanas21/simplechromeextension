function setBackgroundImg(){
    let url = "https://source.unsplash.com/random/1920x1080/?modern"
    fetch(url)
        .then(response=>response.json())
        .then(data =>{
           // document.getElementById("image").src = data.message;
           document.body.style.backgroundImage = url;
        })
        .catch(error => {
            console.log("error");
        });
}

