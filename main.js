var width = (document.body.clientWidth)
		var height = (document.body.clientHeight)

		butterflies = [];

		for(let i=0; i<10; i++) {
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
					butterflies[i].moveTo(data[i].x*width, data[i].y*height, 5000+Math.floor(Math.random()*3000))
				}

			}).catch(function(error) {
				console.log(error)
			})
		}

		d3.select('body')
			.on('keyup', function(event) {
				drawCharacter(event.key);
			});