function Move(element) {
    element.style.position = 'fixed'
    
    function moveToCoords(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function launchBall(left, bottom){
    let direction = null;
    let x = left;
    let y = bottom;
    
    element.style.left = left + 'px'
    element.style.bottom = bottom + 'px'


    function moveBall(xDirection, yDirection) {
        if(direction === 'north') {
            if(y < window.innerHeight - 50) {
              y = y + 1
              if(y === window.innerHeight - 50) {
                return direction = 'south'
              }
            }
        }
            
            if(direction === 'south') {
                 y = y - 1
            }


            if(direction === 'east') {
                 if(x < window.innerWidth - 50){
                    x = x + 1
                    if(x === window.innerWidth - 50) {
                        return direction = 'west'
                    }
                 }
            }

        if(direction === 'west') {
           if(x > 0){
            x = x - 1
            if(x === 0) {
                return direction = 'east'
            }
           }
            
        }
        
        
        

        
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        }
        setInterval(moveBall, 2)
    
        
    
        document.addEventListener('keydown', function(e){
            if(e.key === 'ArrowUp') {
                direction = 'north'
            }
        })
    }

    return{
        to: moveToCoords,
        withArrowKeys: launchBall
    }
    
    
}
    
    
  


   
    

 
    
    
    let ball = document.querySelector('.ball')
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