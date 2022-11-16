# MP1 Browser Game


## Project Description 

The browser game will be a solo player brick smashing game. My idea is to have rows of bricks that the user will be prompted to break using a user controlled bar and a non-user controlled ball which will be directed by the user controlled bar.

## Game Logic

The game will load with two window alerts, one of which introducing the game to the user, and second telling the user how to start the game, the controls, and endgoal.

I will choose to hardcode an image most likely of a sunny backround with clouds in the back with 20-30 bricks maybe of multiple random colors over it- will need to utillize flexbox, z-index, and a certain loop(most likely .forEach) to set the pattern for the rainbow colored bricks 
The bricks will either be made via css or be an image or gif I set as a relative path. Most likely will use css.

Next, I will make an user-controlled bar that has a fixed vertical position yet can be moved horizontally with the left and right arrows, I will have to implement an addEventListener for that - reference elfGame. I have to implement some type of border so the ucb(user controlled bar) stays within the frames of the monitor it is on. (collision-detection btw ball and brick)

Next, I will have to make the ball and the game will start when the user clicks on space bar and this will launch the ball upwards/north, and the ucb will direct the ball to hit all of bricks. I will most likely use either a gif or use css to implement the ball and I have to posititon the ball on top of the bar(have to review positioning methods). I will use setInterval to ensure a set time for the ball to come down instanly as it touches the brick, but I have to implement the border (same thing with the ucb) not to move from the frames of the screen. However, it will have have the option of going down/south if the ucb misses it, so I will have to set if else statements for now to set conditions but will use async and await to make it easier to read.

When a player wins or loses, the game status and/or score should display visually to the player in a way that does not rely on console.logs or alerts
the player will have three lives, if the player misses a ball with the UCB, they will lose a life until the reach zero in which they will be alerted they lost lives



## MVP
- User can move UCB across screen

- The ball changes direction when hits UCB, wall, and or brick

- One line of bricks are removed when they are hit 

- If ball goes under UCB, restart game and tell user how many lives are left

- Knock out all bricks, indicate user won game


## Post-MVP

This game should be winnable or it should keep score (whichever makes more sense)

- Endgoal will be to destroy all bricks and the user will alerted they completed the task

- A sound will be added when the player hits a brick with the ball

- Use Canvas API