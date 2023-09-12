// function fetchImg(){
//     fetch('https://source.unsplash.com/random/1920x1080/?modern')
//         .then(response => response.blob())
//         .then(blob => {
//             const imgUrl = URL.createObjectURL(blob);
//             const imgElem = document.createElement("img");

//             document.getElementById("img").src = imgUrl;
           
//             document.body.appendChild(imgElem);
//         })
//         .catch(error => {
//             console.log("Error")
//         });

// }

function get_random_dog_image(){

    url = "https://dog.ceo/api/breeds/image/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url;
  }
  
  
