// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Below is the DOM Content Loaded event listener, that also hides the default error by adding a class tag of "hidden", check CSS
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM Content Loaded!')
  });
//Code Below

const likeButton = document.querySelectorAll(".like-glyph");

for (const glyph of likeButton){
  glyph.addEventListener("click", likeCallBack)};

function likeCallBack(e){
  const heart = e.target;
  mimicServerCall()
  .then(responseServer => {
    if(heart.innerText === EMPTY_HEART){
    console.log(responseServer)
    alert('You Liked This Post!')
    heart.innerText = FULL_HEART
    heart.classList.add('activated-heart')}
    else{
      console.log(responseServer)
      alert('You Unliked This Post!')
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch(errorServer => {
    console.log(errorServer)
    alert(errorServer)
    let modalDOM = document.getElementById("modal")
    modalDOM.classList.remove('hidden')
    setTimeout(() => {
      modalDOM.classList.add('hidden')
    }, 3000)
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
