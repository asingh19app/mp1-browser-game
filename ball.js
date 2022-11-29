function Move(element) {
    element.style.position = 'fixed'
    
    function moveToCoords(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return{
        to: moveToCoords
    }
    
    
}
    
    
    
let ball = document.querySelector('.ball')
let direction = null;
let x = 880
let y = 120
let dx = 2
let dy = 2


function moveBall(){
if(direction === 'north') {
    if(y < window.innerHeight - 50) {
      y = y + dy
      if(y === window.innerHeight - 50) {
        return direction = 'south'
      }
    }
}
    
    if(direction === 'south') {
         y = y - dy
    }


    if(direction === 'east') {
         if(x < window.innerWidth - 50){
            x = x + dx
            if(x === window.innerWidth - 50) {
                return direction = 'west'
            }
         }
    }

if(direction === 'west') {
   if(x > 0){
    x = x - dx
    if(x === 0) {
        return direction = 'east'
    }
   }
    
}
ball.style.left = x + 'px'
ball.style.bottom = y + 'px'

}

setInterval(moveBall, 2)

Move(ball).to(880,120)

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