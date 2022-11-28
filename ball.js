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
    
    let direction = null;
    let x = 880;
    let y = 122;  
    function moveBall() {
    if(direction === 'west') {
       if(x > 0){
        x-=1
       }
        
    }
    
    if(direction === 'east') {
         if(x < window.innerWidth - 50){
            x+=1
         }
    }
    
    if(direction === 'north') {
        if(y< window.innerHeight - 50) {
        y += 1
        }
    }
    
    if(direction === 'south') {
         y -= 1
    }
    
    ball.style.left = x + 'px'
    ball.style.bottom = y + 'px'
    
    }
    setInterval(moveBall, 1)
    
    
    
    let ball = document.querySelector('.ball')
Move(ball).to(880,122)