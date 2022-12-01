let ballLives = document.querySelector('.ballLives')
let ballLife1 = document.querySelector('.ballLife-1')
let ballLife2 = document.querySelector('.ballLife-2')
let ballLife3 = document.querySelector('.ballLife-3')
let caption = document.querySelector('.caption')
function move (element) {
    element.style.position = 'fixed';

    //function move defines a function in move
    function setCoordinates(left, bottom){
    element.style.left = left + 'px';
    element.style.bottom = bottom + 'px';
    }
    return{
        to: setCoordinates
    }
}

move(ballLives).to(175,10)
move(caption).to(10,-5)

let numBalls = [
    ballLife1,
    ballLife2,
    ballLife3
]


function removeBall(){
//     for(let x = 0; x < numBalls.length; x++){
//        numBalls[x].remove()
// }
const ballToRemove = numBalls.pop()
//.opo will ake last element and rmeove it from the array and return
//grabbing ball life three and returning it to the variable so you can do line 36
ballToRemove.remove()
}