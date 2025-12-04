# odin_tic-tac-toe
factory functions and module pattern exercise


## how tic-tac-toe works in plain english

two players
x and o
grid of 9 squares,
3 rows and 3 columns

to play:

set up a grid of 3 x 3 squares
designate one player x
designate another player o

player has the state "token choice" set to null then updated to either x or o

of the squares that are available
[squares have the state "available" boolean]
playerX chooses a square "available"
playerO chooses a square "available"
keep going until one of the win conditions are met


// win conditions:

if row is full and type is all x or all o
  {type} = winner

if column is full and type is all x or all o
  {type} = winner

if row1col1, row2 col2, and row3 col3 is all x or all o
{type} is winner

if row1col3, row2 col2, and row3 col1 is all x or all o
{type} is winner

else if all row and all columns are full
there is no winner



as little **global** code as possible

store gameboard as an array inside of a Gamboard object

players will be store in objects

gameController will be an object as well
  method: playRound()

game, player, or gameboard objects.

include logic that checks if the game is over: all winning rows/columns/diagonals and ties.
