// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',() =>{
  let likes = document.querySelector('.like-glyph')
  // console.log(likes)
  likes.addEventListener('click', (event) => {
    event.preventDefault()
    if(likes.textContent === EMPTY_HEART ){
      mimicServerCall()
      // .then(response => response.json())
      .then( () =>{
        likes.textContent = FULL_HEART
        likes.className = 'activated-heart'
      })
      .catch((error)=>{
        const modal = document.getElementById('modal')
        modal.className = " "
        modal.innerText = error
        setTimeout(()=>{
          modal.className = "hidden",3000
        })
      })

    }
    else{
      likes.textContent = EMPTY_HEART
      likes.classList.remove('activated-heart')
    }
  })
})

// function heartClick(e){
//   const like = e.target
// }
// function manageError(){
//   let modal = document.getElementById('modal')
//   modal.classList.remove("hidden")
//   modal.textContent = data
//   setTimeout(()=> modal.classList.add("hidden"),3000)
// }



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
