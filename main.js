/*

InfoVis 2021 - Butterfly homework
Marco De Giovanni - 499633

*/

class Butterfly {

	constructor() {
		this.svg = d3.select('#content')
			.append('svg')
			.attr('transform-origin', 'center')
			.attr('width', '5%')
			.attr('viewBox', '0 0 550 480')

		//Left wing
		let leftWing = this.svg.append('g')
		leftWing.append('path').style('fill', '#73BEFF').attr('d', 'M247.172,278.069l-7.722,54.056c-1.071,7.501-2.914,14.881-5.792,21.891 c-6.79,16.541-22.559,45.332-57.107,74.122c-13.761,11.468-21.408,29.199-24.631,38.304c-1.248,3.526-4.557,5.834-8.297,5.834 h-13.537c-3.795,0-7.132-2.418-8.363-6.008c-4.077-11.885-15.645-40.152-42.275-73.44c-27.573-34.466-56.276-100.414,23.172-135.724 l142.345-13.241L247.172,278.069z');
		leftWing.append('path').style('fill', '#64A0F0').attr('d', 'M246.614,269.409l-0.388-6.025l0,0l-1.26-19.522l-11.633,1.081l0,0l-130.712,12.16 c-12.374,5.5-22.12,11.743-29.66,18.494c10.178,1.316,23.59,2.132,41.672,2.132c20.177,0,42.217-1.002,62.524-2.321L53.357,342.545 c1.43,5.785,3.413,11.462,5.788,16.941l153.889-83.454L97.172,417.412c3.698,5.72,6.823,11.06,9.615,16.119l133.994-163.505 C243.185,269.778,245.235,269.56,246.614,269.409z');
		leftWing.append('path').style('fill', '#73BEFF').attr('d', 'M35.31,39.724C17.655,39.724,0,46.72,0,66.207C0,92.69,17.655,225.103,52.966,251.586 c25.463,19.097,194.207,0,194.207,0v-17.655C247.172,233.931,114.759,39.724,35.31,39.724z');
		leftWing.append('path').style('fill', '#64A0F0').attr('d', 'M111.284,136.122c24.308,3.498,49.438,8.591,72.722,15.698c-6.76-7.971-13.827-16.07-21.16-24.095 C99.98,112.934,32.531,110.604,4.391,110.326c0.822,5.657,1.76,11.604,2.813,17.738c16.039,0.264,42.761,1.205,73.366,4.308 c12.153,11.284,24.162,21.614,35.848,31.132c-33.707-2.489-74.594-2.09-102.43-1.351c1.35,5.906,2.791,11.789,4.334,17.575 c36.111-0.855,91.243-1.018,123.953,4.428c0.252,0.042,0.498,0.042,0.746,0.062c8.04,5.971,15.763,11.48,23.104,16.514 c-55.298,2.452-105.756,12.052-134.612,18.547c2.561,6.006,5.279,11.492,8.152,16.306c33.495-7.306,92.186-17.838,152.152-17.838 c0.07,0,0.127-0.039,0.196-0.04c24.694,15.417,41.053,23.477,42.476,24.169c1.241,0.599,2.552,0.884,3.844,0.884 c3.276,0,6.422-1.827,7.948-4.974c0.628-1.292,0.815-2.649,0.791-3.994c-0.244-0.356-2.226-3.25-5.782-8.252 C233.487,221.598,175.371,191.438,111.284,136.122z');
		leftWing.append('path').style('fill', '#463246').attr('d', 'M247.172,233.931c0,0-132.414-194.207-211.862-194.207C17.655,39.724,0,46.72,0,66.207 c0,4.843,0.597,13.255,1.778,23.887C4.046,73.195,72.753,19.87,247.172,233.931z');
		leftWing.append('path').style('fill', '#594759').attr('d', 'M151.922,466.442c3.222-9.105,10.869-26.837,24.63-38.304c34.549-28.79,50.317-57.581,57.107-74.122 c2.877-7.01,4.719-14.39,5.792-21.891l7.722-54.056l-1.458-22.599c-40.932,99.921-83.148,198.967-127.61,201.353 c1.534,3.722,2.783,7.005,3.619,9.444c1.231,3.59,4.568,6.008,8.363,6.008h13.538C147.364,472.276,150.673,469.967,151.922,466.442z');

		//Right wing
		let rightWing = this.svg.append('g')
		rightWing.append('path').style('fill', '#73BEFF').attr('d', 'M264.828,278.069l7.722,54.056c1.071,7.501,2.914,14.881,5.792,21.891 c6.789,16.541,22.558,45.332,57.107,74.122c13.761,11.468,21.408,29.199,24.631,38.304c1.248,3.526,4.557,5.834,8.297,5.834h13.537 c3.795,0,7.132-2.418,8.363-6.008c4.077-11.885,15.645-40.152,42.275-73.44c27.573-34.466,56.276-100.414-23.172-135.724 l-142.345-13.241L264.828,278.069z');
		rightWing.append('path').style('fill', '#64A0F0').attr('d', 'M265.386,269.409l0.388-6.025l0,0l1.26-19.522l11.633,1.081l0,0l130.712,12.16 c12.374,5.5,22.12,11.743,29.66,18.494c-10.178,1.316-23.59,2.132-41.672,2.132c-20.177,0-42.217-1.002-62.524-2.321l123.798,67.135 c-1.43,5.785-3.413,11.462-5.788,16.941l-153.889-83.454l115.862,141.38c-3.698,5.72-6.823,11.06-9.615,16.119L271.219,270.027 C268.815,269.778,266.765,269.56,265.386,269.409z');
		rightWing.append('path').style('fill', '#73BEFF').attr('d', 'M476.69,39.724c17.655,0,35.31,6.996,35.31,26.483c0,26.483-17.655,158.897-52.966,185.379 c-25.463,19.097-194.207,0-194.207,0v-17.655C264.828,233.931,397.241,39.724,476.69,39.724z')
		rightWing.append('path').style('fill', '#64A0F0').attr('d', 'M400.716,136.122c-24.308,3.498-49.438,8.591-72.722,15.698c6.76-7.971,13.827-16.07,21.16-24.095 c62.866-14.792,130.315-17.122,158.456-17.4c-0.822,5.657-1.76,11.604-2.813,17.738c-16.039,0.264-42.761,1.205-73.366,4.308 c-12.153,11.284-24.162,21.614-35.848,31.132c33.707-2.489,74.594-2.09,102.43-1.351c-1.35,5.906-2.791,11.789-4.334,17.575 c-36.111-0.855-91.243-1.018-123.953,4.428c-0.252,0.042-0.498,0.042-0.746,0.062c-8.04,5.971-15.763,11.48-23.104,16.514 c55.298,2.452,105.756,12.052,134.612,18.547c-2.561,6.006-5.279,11.492-8.152,16.306c-33.495-7.306-92.186-17.838-152.152-17.838 c-0.07,0-0.127-0.039-0.196-0.04c-24.694,15.417-41.053,23.477-42.476,24.169c-1.241,0.599-2.552,0.884-3.844,0.884 c-3.276,0-6.422-1.827-7.948-4.974c-0.628-1.292-0.815-2.649-0.791-3.994c0.244-0.356,2.226-3.25,5.782-8.252 C278.513,221.598,336.629,191.438,400.716,136.122z');
		rightWing.append('path').style('fill', '#463246').attr('d', 'M264.828,233.931c0,0,132.414-194.207,211.862-194.207c17.655,0,35.31,6.996,35.31,26.483 c0,4.843-0.597,13.255-1.778,23.887C507.954,73.195,439.247,19.87,264.828,233.931z');
		rightWing.append('path').style('fill', '#594759').attr('d', 'M360.078,466.442c-3.222-9.105-10.869-26.837-24.63-38.304 c-34.549-28.79-50.317-57.581-57.107-74.122c-2.877-7.01-4.719-14.39-5.792-21.891l-7.722-54.056l1.458-22.599 c40.932,99.921,83.148,198.967,127.611,201.353c-1.534,3.722-2.783,7.005-3.619,9.444c-1.231,3.59-4.568,6.008-8.363,6.008h-13.538 C364.636,472.276,361.327,469.967,360.078,466.442z');

		//Body
		let body = this.svg.append('g')
		body.append('path').style('fill', '#908490').attr('d', 'M256,229.517c-1.836,0-3.482-1.142-4.129-2.862l-26.483-70.621c-0.862-2.284,0.294-4.828,2.578-5.685 c2.276-0.836,4.828,0.298,5.681,2.582L256,212.534l22.354-59.604c0.853-2.289,3.423-3.423,5.681-2.582 c2.284,0.857,3.439,3.401,2.578,5.685l-26.483,70.621C259.482,228.375,257.836,229.517,256,229.517z');
		body.append('path').style('fill', '#463246').attr('d', 'M256,278.069L256,278.069c-9.751,0-17.655-7.904-17.655-17.655v-26.483 c0-9.751,7.904-17.655,17.655-17.655l0,0c9.751,0,17.655,7.904,17.655,17.655v26.483C273.655,270.165,265.751,278.069,256,278.069z');
	}

	flap(duration = 50) {
		this.svg
			.transition()
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale(0.1 1)');

		this.svg
			.transition()
			.delay(duration)
			.duration(duration)
			.ease(d3.easeLinear)
			.attr('transform', 'scale(1 1)');
	}

	moveTo(x, y, duration = 3000) {
		this.svg
			.transition()
			.duration(duration)
			.attr('transform', 'translate('+x+' '+y+')')
	}

}
