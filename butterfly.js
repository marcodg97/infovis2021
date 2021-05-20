/*

InfoVis 2021 - Butterfly homework
Marco De Giovanni - 499633

*/

class Butterfly {

	constructor(id, dimension = 5) {
		this.x = 0
		this.y = 0

		this.x_offset = id*document.body.clientWidth*(dimension/100)+(document.body.clientWidth*(dimension/200))
		this.y_offset = document.body.clientWidth*(dimension/200)

		this.flapping = false

		//create a butterfly SVG with the specified dimensions
		this.svg = d3.select('body')
			.append('svg')
			.attr('width', dimension+'%')
			.attr('viewBox', '0 0 512 512')

		//Left wing
		this.leftWing = this.svg.append('g').attr('transform-origin', 'center').style('stroke','black')
		this.leftWing.append('path').style('fill', '#73BEFF').attr('stroke-width', '3').attr('d', 'M247, 278l-8 ,54c-1 ,7.5-3, 15-5.8, 22 c-6.8, 16.5-22.5, 45-57, 74c-13.8, 11.5-21.5, 29-24.5, 38c-1.2, 3.5-4.5, 5.8-8, 5.8 h-13.5c-3.8, 0-7-2.5-8-6c-4-11.8-15.6-40-42-73.5c-27.5-34.5-56-100.4, 23-135.7 l142.3-13.2L247, 278z');
		this.leftWing.append('path').style('fill', '#73BEFF').attr('stroke-width', '3').attr('d', 'M35, 39.5C17.5, 40, 0, 46.7, 0, 66C0, 92.5, 17.5, 225.103, 53, 251.5 c25.4, 19, 194, 0, 194, 0v-17.6C247, 234, 114.8, 39.8, 35, 40z')

		//Right wing
		this.rightWing = this.svg.append('g').attr('transform-origin', 'center').style('stroke','black')
		this.rightWing.append('path').style('fill', '#73BEFF').attr('stroke-width', '3').attr('d', 'M265, 278l8, 54c1, 7.5, 3, 15, 5.8, 22 c6.8, 16.5, 22.5, 45, 57, 74c13.761, 11.5, 21.5, 29, 24.5, 38c1.2, 3.5, 4.5, 5.8, 8, 5.8h13.5 c3.8, 0, 7-2.5, 8-6c4-11.8, 15.6-40, 42-73.5c27.5-34.5, 56-100.5-23-135.7 l-142.3-13.2L265, 278z');
		this.rightWing.append('path').style('fill', '#73BEFF').attr('stroke-width', '3').attr('d', 'M477, 39.5c17.5, 0, 35, 7, 35, 26.5c0, 26.5-17.5, 159-53, 185 c-25.5, 19-194, 0-194, 0v-17.5C265, 234, 397, 39.7, 476.7, 40z')

		//Body
		let body = this.svg.append('g')
		body.append('ellipse').style('fill', '#444444')
			.attr('cx', '255')
			.attr('cy', '250')
			.attr('rx', '26')
			.attr('ry', '80')

		//Make a fast flap if clicked
		this.svg.on('mouseup', () => {this.flap()})
	}

	//Make the butterfly flapping
	flap(duration = 50, times = 1, minimum_wing_close = 0.1) {
		this.flapping = true

		this.leftWing
			.transition()
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale('+minimum_wing_close+' 1)');
		this.leftWing
			.transition()
			.delay(duration)
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale(1 1)');

		this.rightWing
			.transition()
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale('+minimum_wing_close+' 1)');
		this.rightWing
			.transition()
			.delay(duration)
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale(1 1)')
			.on('end', () => {
				if(times > 0)
					this.flap(duration, times-1, minimum_wing_close)
				else
					this.flapping = false
			})
	}

	//if called, the butterfly begins to make randomly single flaps
	flapSometimes(min, max) {
		setTimeout(() => {

			if(this.flapping == false)
				this.flap(50+Math.floor(Math.random()*400), 1, Math.random());
			this.flapSometimes(min, max);

		}, min+Math.floor(Math.random()*max));
	}

	//Move the butterfly into the position at coordinate X;Y 
	moveTo(x, y, duration = 4000) {
		x -= this.x_offset
		y -= this.y_offset

		let delay_duration = Math.floor(Math.random()*500)
		let turn_duration = Math.floor(Math.random()*duration/2)-delay_duration
		if(turn_duration < 0) turn_duration = 0

		let flight_duration = duration-turn_duration

		//Distance: x^2 + y^2 (Pythagoras in the <3)...
		let dist = Math.sqrt(x*x+y*y);
		let angle = 0;

		if(dist > 0) {
			//...and then calc the rotation angle
			angle = ((180*Math.asin(y/dist))/Math.PI)
			if(this.x < x && this.y < y) angle += 90
			else if(this.x < x) angle += 45
			else if(this.y < y) angle -= 145
			else angle -= 90
		}

		setTimeout(() => {
			//Flap the wings as many times as necessary for the flight
			this.flap(50, (turn_duration+flight_duration)/100)

			//First animation step: Rotate the butterfly
			this.svg
				.transition()
				.delay(delay_duration)
				.duration(turn_duration)
				.ease(d3.easeQuadOut)
				.attr('transform', 'translate('+this.x+' '+this.y+') rotate ('+angle+')')

			//Second animation step: move forward the butterfly
			this.svg
				.transition()
				.delay(turn_duration)
				.duration(flight_duration)
				.attr('transform', 'translate('+x+' '+y+') rotate('+angle+')').
				on('end', () => {
					this.x = x
					this.y = y

					//Make one or more randomic slow flaps at the end of the flight
					this.flap(200+Math.floor(Math.random()*300), 1+Math.floor(Math.random()*4), Math.random())
				})
		}, delay_duration)
	}

}