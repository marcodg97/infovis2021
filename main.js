/*

InfoVis 2021 - Butterfly homework
Marco De Giovanni - 499633

*/

//Calculate the screen size, in pixels
const NUMBER_OF_BUTTERFLIES = 10


const width = (document.body.clientWidth)
const height = (document.body.clientHeight)

let butterflies = [];

for(let i=0; i<NUMBER_OF_BUTTERFLIES; i++) {
	//Instantiate the butterfly
	butterflies[i] = new Butterfly(i);

	//Make it fly to a starting random position
	butterflies[i].moveTo(Math.random()*width, Math.random()*height, 5000+Math.floor(Math.random()*3000));

	//Butterfly can make a single flap sometimes
	butterflies[i].flapSometimes(2000, 10000);
}

function drawCharacter(character) {
	d3.json('characters/'+character+'.json').then(function(data) {

		for(let i=0; i<data.length; i++) {

			/*check if there are enough butterflies to complete the letter
			(Yes i know, there are exactly 10 butterflies, but never say never, the json could be wrong!)*/
			if(i < butterflies.length)
				butterflies[i].moveTo(data[i].x*width, data[i].y*height, 5000+Math.floor(Math.random()*3000))
			else
				break;

		}

	}).catch(function(error) {
		console.log(error)
	});
}

d3.select('body')
	.on('keyup', function(event) {
		drawCharacter(event.key);
	});