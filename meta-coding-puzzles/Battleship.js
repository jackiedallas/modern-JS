
function getHitProbability(R, C, G) {
	let firedShot = [];
	// let grid = [];
	// let rows = [];
	// let columns = [];
	// grid.length = G;
	// rows.length = R;
	// columns.length = C;
	let i = C;
	G.length = R;
	G[i].length = C;
	// firedShot.push(Math.floor(Math.random() * rows.length + 1));
	// firedShot.push(Math.floor(Math.random() * columns.length + 1));
	
	let yCord = Math.floor(Math.random() * (R + 1));
	let xCord = Math.floor(Math.random() * (C + 1));
	
	// grid.push(xCord);
	// grid.push(yCord);
	let rowCount = 0;
	let columnCount = 0;
	
	for (let i = 0; i <= G[0].length; i++) {
		if (G[0][i] === 1) {
		
		}
		// grid.push();
		for (let j = 0; j < G[1].length; j++) {
			// check if coord 0,0 has ship
			// grid.push();
		}
	}
	
	console.log(grid)
	
	// let hitProb = 
	
	// grid.push(rows);
	// grid.push(columns);
	
	// console.log(grid);
	// console.log(firedShot.toString());
	
	// console.log("X,Y Coordinates: " + "[" + xCord + "," + yCord + "]");
	// console.log(columnCellLocation);
	
}
getHitProbability(2, 3, 0)
