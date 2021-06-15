const rect = require('./rectangle')


function solveRectangle(l ,w){
  console.log(` Solving for rectangle with dimensions: ${l}, ${w}`)

  if (l <= 0 || w <= 0){
 console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
  }else{
    console.log(` Area of rectangle: ${rect.area(l, w)}`)
    console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`)
  }
}

solveRectangle(2, 5);
solveRectangle(7, 0);
solveRectangle(8, 15);
solveRectangle(3, -3);
solveRectangle(4, 4);
