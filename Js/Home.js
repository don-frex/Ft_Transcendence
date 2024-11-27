$(document).ready(function(){
	$(".gameText").hide();
	$('.gameTitle').hide();
	$('#store').hide();

	// Variables for current position
	var x, y;

	function handleMouse(e) {
	
	}

	// Assign handleMouse to mouse movement events
	document.onmousemove = handleMouse;

	 $(window).scroll(function(){
		
	});
});

/******************** subMenu ***********************************/


$(".squareGame").hover(
	function(){
		$(this).find('.gameText').show();
		$(this).find('.gameTitle').show();
		$(this).find('#store').show();
	},
	function(){
		$(this).find('.gameText').hide();
		$(this).find('.gameTitle').hide();
		$(this).find('#store').hide();
	}
);

function init() {
  'use strict'
  function select(a) {
	return document.querySelector(a);
  }
  var randomNum = Math.floor((Math.random() * 24) + 1),
	  triangle = select('.triangle img'),
	  circle = select('.circle img'),
	  cross = select('.cross img'),
	  box = select('.boxi img'),
	  link = 'http://kapilnemo.free.fr/codepen/playstation-loading/',
	  order = [
		[1,2,3,4],
		[1,2,4,3],
		[1,3,2,4],
		[1,3,4,2],
		[1,4,2,3],
		[1,4,3,2],
		[2,1,3,4],
		[2,1,4,3],
		[2,3,1,4],
		[2,3,4,1],
		[2,4,1,3],
		[2,4,3,1],
		[3,1,2,4],
		[3,1,4,2],
		[3,2,1,4],
		[3,2,4,1],
		[3,4,1,2],
		[3,4,2,1],
		[4,1,2,3],
		[4,1,3,2],
		[4,2,1,3],
		[4,2,3,1],
		[4,3,1,2],
		[4,3,2,1]
	  ];


}
window.setInterval(init, 2000);