
function seed() {
 return Array.prototype.slice.call(arguments);


}


function same([x, y], [j, k]) {
return x===y && j===k;

}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  return this.some((c)=>same(c,cell));
}

const printCell = (cell, state) => {

  return contains.call(state, cell)? "\u25A3":"\u25A2";
};

const corners = (state = []) => {
  if(state.length===0){
    return {
      topRight:[0,0],
      bottomLeft:[0,0]
    }
    const xs = state.map(([x,_]));
    const ys = state.map(([_,y]));
     return {
      topRight:[Math.max(...xs),Math.max(...ys)],
      bottomLeft:[Math.min(...xy), Math.min(...ys)]
     }

  }
};

const printCells = (state) => {
  const { bottomLeft, topRight}=corners(state);
  let accumulator = "";
  for (let y=topRight[1]; y>=bottomLeft[1]; y--){
    let row=[];
    for (let x=bottomLeft[0]; x<=topRight[0];x++){
      row.push(printCell([x,y], state));
    }
    accumulator += row.join() +"\n";
  }
  return accumulator;
};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;