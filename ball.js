// setting variables so we can access the div classes of container and UCB
let container = document.querySelector('.container')
let ball = document.querySelector('.ball')

// this function sets the starting position of the ball
// we have its position fixed and we set another function in Move and set the left and bottom coordinates. Then that function moveToCoords defines an object in Move: which is the to: moveToCoords, we give that object a to property, the value of that to property is our function, and as a result we can access moveToCoords outside of Move
function Move(element) {
    element.style.position = 'fixed'
    function moveToCoords(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function launchBallArrowKey(){
    // let x = left
    // let y = bottom

    //     // only happens one time once intitilzied
    //     element.style.bottom = y + 'px'
    //     element.style.left = x + 'px'

    //     function launchBall() {
    //         if(direction === 'northwest') {
    //             y = y + 1
    //             x = x - 1
    //             }
            
    //         element.style.bottom = y + 'px'
    //         element.style.left= x + 'px'
    //     }
    //  setInterval(launchBall,1)

     document.addEventListener('keydown', function(e){
        if(e.key === 'ArrowUp' && direction ===  null) {
            direction = 'northeast'
        }
        
     })
    }
    return {
        to:moveToCoords,
        withArrowKeys: launchBallArrowKey
    }
}

let direction = null
// x and y are the starting points of the ball
let x = 880
let y = 122

// initially we had straight cardinal angles, but now we have angular angles
// now we set that if northeast equals direction add 1 to x and 1 to y
//our northeast section checks two things: if it hits the top or side.
// If it hits the top, it will bounce to the southeast direction defined which is defined later on
//if it hits the right side wall it will bounce northwest which is defined later on
function moveBall(){
if(direction === 'northeast') {
    // if(y < window.innerHeight - 50) {
      y = y + 1
      x = x + 1
      //angular direction now cahnges x and y , not just x and y singularly 
      // for norths checks if it hits top or side, if so switch to appro direction
      if(y > window.innerHeight - 50) {
        direction = 'southeast'
      }
      if(x > window.innerWidth - 50) {
        direction = 'northwest'
      }
    //}
}

//if northwest, y + 1 and x + 1
// if it hits to of screen first the direction goes to southwest
// if it hits left wall first it goes northwest 
if(direction === 'northwest') {
    // if(y < window.innerHeight - 50) {
      y = y + 1
      x = x - 1
      if(y > window.innerHeight - 50) {
        direction = 'southwest'
      }
      if(x < 0) {
        direction = 'northeast'
      }
    //}
}


// with south directions we have to check if it goes past the paddle in which we indicate the user lost a life 
// so if ball is in the direction of southeast- y -1 and x + 1
// if it past when the screen is 0 aka the bototm of the screen it will say you lose
// if not we set the UCB and to make the ball bounce off the paddle 
// paddle is confusing so chekc later
// if from southeast, if it hits the right side wall first, it will bounce southeast 
if(direction === 'southeast') {
    y = y - 1
    x = x + 1
      if(y < -80) {
        console.log('you lose!')
        direction = null
        removeHeart()
        //checks if goes past UCB, and if it hits UCB, then it hits UCB goes angle opposite, in bar level and width bounce off, and if hit right side wallit bounces to appro direction 
      }
      if(y == container.offsetHeight - UCB.offsetTop 
        // && y > container.offsetHeight - UCB.offsetTop - 50
        && x >= UCB.offsetLeft - 50
        && x <= UCB.offsetLeft + UCB.offsetWidth + 50
        ){
        direction = 'northeast'
      }
      // if ball is at ucb level, and ball x is btween ucb edges use &&
      //use less than, if we make change to function, lets say y -2 or y +2, so we dont want it to move boundaries
      if(x > window.innerWidth - 50) {
        direction = 'southwest'
      }

}


// if(direction === 'southeast') {
//     if(x < window.innerWidth - 50){
//        x = x + 1
//        if(x === window.innerWidth - 50) {
//          direction = 'west'
//        }
//     }
// }


// if direction is southwest we have y -1 and x -1
// we need paddle for both souths 
//  check if goes past the paddle or it bounces off it
// if it bounces paddle it goes northwest, if not you lose 
// and if it hits left wall it goes southeast 
// paddle(lines 142-147) x and y rep current ball pos, offsetHeight-: whole height of container; offsetTop is difference from top of paddle from container, so we check if y is btw that area of paddle or less than that paddle height. we had situation where ball drops past the y = 0 and would bounce back up so it checked if ball is on screen
//left edge of container and ball is = x, offsetLeft distance btw inner left edge of parent container and left edge of element in question
//is x equal to that than its left of paddle, then we check right with offsetWidth which we get a total value of left and width to check 
if(direction === 'southwest') {
    y = y - 1
    x = x - 1
    if(y < -80) {
        console.log('you lose!')
        direction = null;
        removeHeart()
      }
 if(y == container.offsetHeight - UCB.offsetTop 
    // && y > container.offsetHeight - UCB.offsetTop - 50
    && x >= UCB.offsetLeft - 50
    && x <= UCB.offsetLeft + UCB.offsetWidth + 50
    ){
        direction = 'northwest'
      }

if(x <= 0) {
 direction = 'southeast'
}


}
ball.style.left = x + 'px'
ball.style.bottom = y + 'px'

}

// we set the interval for the function and it moves the ball two miliseconds as the funciton is called
setInterval(moveBall, 2)



Move(ball).withArrowKeys(880,122)

//TODO
//make function called launch ball which launches ball north when clicking top arrow key-done
//create ball movement 
//need ball to bounce off UCB
//need ball to remove brick once it touches it
// need to remove life if ball goes past paddle

//need to make counter that counts bricks removed
// need to make welcome page with controls intro
// need to make game over page if lives finished
//need to make you won page 