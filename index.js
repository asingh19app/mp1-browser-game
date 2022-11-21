function move (element) {
    element.style.position = 'relative ';

    //function move defines a function in move
    function setCoordinates(left, top){
    element.style.left = left + 'px';
    element.style.top = top + 'px';
    }

    function moveWithArrows(left, top) {
        let direction = null;
        let x = left;
        let y = top;

        element.style.left = x + 'px'
        element.style.top = y + 'px'

        function moveUCB() {
            if(direction === 'west') {
                x = x - 1
            }
            
            if(direction === 'east') {
                x = x + 1
            }
            
            if(direction === 'north') {
                y === y
            }
            
            if(direction === 'south') {
                y === y
            }
            
            
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            
            }

            setInterval(moveUCB, 1)

document.addEventListener('keydown', function(e){
if (e.repeat) return ;
//The keydown event fires multiple times as long as a user holds down a key. To make our logic simpler, we will use this line to skip any repeat events.

if(e.key === 'ArrowLeft') {
    direction = 'west'
}
if(e.key === 'ArrowRight') {
    direction = 'east'
}

})

document.addEventListener('keyup', function(e){
    direction = null
})

    }
return {
    to: setCoordinates,
    //then defines an object in move
    //then gives the object a to property
    //the value of our to property is our function 
    // as a result we can access setCoordinates outside our function 
   withArrowKeys: moveWithArrows
}
}







let UCB = document.querySelector('.UCB')
move(UCB).withArrowKeys(800,300)
let ball = document.querySelector('.ball')
move(ball).to(875, 200)



// let UCB = document.querySelector('.UCB')
// let direction = null;
// let x = 800;
// let y = 300;
// move(UCB).to(800, 300)

// function moveUCB() {
// if(direction === 'west') {
//     x = x - 1
// }

// if(direction === 'east') {
//     x = x + 1
// }

// if(direction === 'north') {
//     y === y
// }

// if(direction === 'south') {
//     y === y
// }


// UCB.style.left = x + 'px'
// UCB.style.top = y + 'px'

// }

// setInterval(moveUCB, 1)

// document.addEventListener('keydown', function(e){
// if (e.repeat) return ;
// //The keydown event fires multiple times as long as a user holds down a key. To make our logic simpler, we will use this line to skip any repeat events.

// if(e.key === 'ArrowLeft') {
//     direction = 'west'
// }
// if(e.key === 'ArrowRight') {
//     direction = 'east'
// }

// })

// document.addEventListener('keyup', function(e){
//     direction = null
// })
