/*PS4 Interface Version 1.0.0
  thanks to
  https://codepen.io/Kapilnemo/pen/bwYoPZ
  and
  https://codepen.io/rstacruz/pen/oxJqNv
*/
// nav bar

class NavBar extends HTMLElement {
	constructor() {
	  super();
	  const shadow = this.attachShadow({ mode: 'open' });
	  shadow.innerHTML = `
		<style>
			.logo{
	width: 300px;
	/* margin-bottom: -50px; */
}

.user-pic{
	width: 40px;
	border-radius: 50%;
	cursor: pointer;
	margin-left: 30px;
}


.particles {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
  }

header{
	height: 3em;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
}

header div{
	height: 100%;
	display: inline-block;
}

#plus{
	width: 3em;
	background-image: url("https://s20.postimg.org/9jdjr9lml/plus.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	float: left;
}

#info{
	width: 3em;
	/*background-image: url("https://i.postimg.cc/m2x13xDd/info.png");*/
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	float: left;
}

h3{
	color: aliceblue;
}

#textInfo{
	color: white;
	font-family: arial;
	font-size: 20px;
	font-weight: bold;
	width: 25%;
	float: left;
	line-height: 1em;
}

nav{
	/* background: #1a1a1a; */
	width: 98%;
	margin-top: -15px;
	/* padding: -20px 10%; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 2;
}

#friends{
	width: 3em;
	background-image: url("https://i.postimg.cc/vHwbv8v1/friends.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	float: left;
	width: 25%;
}

#user{
	margin-left: 1em;
	width: 3em;
	background-image: url("https://s20.postimg.org/yvwsexlfh/user.png");
	background-size: 140%;
	background-repeat: no-repeat;
	background-position: center;
	float: left;
}

#userName{
	color: white;
	font-family: arial;
	width: 10%;
	float: right;
	line-height: 1em;
}

#trophies{
	margin-left: 1em;
	width: 3em;
	background-image: url("https://i.postimg.cc/wTKmp1Cx/trophy.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	float: left;
}

#clock{
	font-family: arial;
	line-height: 3em;
	float: right;
	margin-right: 1em;
	color: white;;
}


.sub-menu-wrap{
	position: absolute;
	top: 60%;
	right: -1%;
	width: 320px;
	max-height: 0px;
	overflow: hidden;
	transition: max-height 0.5s;
}

.sub-menu-wrap.open-menu{
	max-height: 400px;
}

.sub-menu{
	--theme-bg-color: rgba(16 18 27 / 40%);
	background: #fff;
	padding: 20px;
	margin: 15px;
	border-radius: 6%;
}

.user-info{
	display: flex;
	align-items: center;
}

.user-info h3{
	font-weight: 500;
}

.user-info img{
	width: 60px;
	border-radius: 50%;
	margin-right: 15px;
}

.sub-menu hr{
	border: 0;
	height: 1px;
	width: 100%;
	background: #ccc;
	margin: 15px 0 10px;
}

.sub-menu-link{
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #525252;
	margin: 12px 0;
}

.sub-menu-link p{
	width: 100%;
}

.sub-menu-link img{
	width: 40px;
	background: #e5e5e5;
	border-radius: 50%;
	padding: 8px;
	margin-right: 15px;
}

.sub-menu-link span{
	font-size: 12px;
	transition: transfrom 0.5s;
}

.sub-menu-link:hover span{
	transform: translateX(5px);
}

.sub-menu-link:hover p{
	font-weight: 900;
}
		</style>
		<nav>
			<a href="Home Page.html">
				<img class="logo" src="../images/TR-logo.png">
			</a>
				<img src="https://cdn.intra.42.fr/users/6346b9909265439cf973f7d7ecb87989/asaber.jpg" class="user-pic" onclick="toggleMenu()">
			<div class="sub-menu-wrap" id="subMenu">
					<div class="sub-menu">
						<div class="user-info">
							<img src="https://cdn.intra.42.fr/users/6346b9909265439cf973f7d7ecb87989/asaber.jpg">
							<h2>Adnane Saber</h2>
						</div>
						<hr>
						<a href="Profile Page.html" class="sub-menu-link">
							<img src="../images/user-icon.png">
							<p> Profile</p>
							<span>></span>
						</a>
						<a href="Profile Settings.html" class="sub-menu-link">
							<img src="../images/setting-icon.png">
							<p> Settings</p>
							<span>></span>
						</a>
						<a href="../index.html" class="sub-menu-link">
							<img src="../images/og-out-icon.png">
							<p> Log out</p>
							<span>></span>
						</a>
					</div>
				</div>
		</nav>
	  `;
	}
  }
  
  customElements.define('nav-bar', NavBar);

// ************************
$(document).ready(function(){
	$(".gameText").hide();
	$('.gameTitle').hide();
	$('#store').hide();
	timeout();

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
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
	subMenu.classList.toggle("open-menu");
}

var time = 0;

function timeout() {
	// setTimeout(function () {
	// 	if(time===0){
	// 		$("#textInfo").text("Rocket League new content!");
	// 		$("#textInfo").addClass("animated slideInDown");
	// 		time++;
	// 	}else
	// 		if(time===1){
	// 		$("#textInfo").text("Outlast 2 Demo Downloaded");
	// 		$("#textInfo").addClass("animated slideInDown");
	// 		time++;
	// 	}else
	// 		if(time===2){
	// 		$("#textInfo").text("Overwatch Update V 1.2.3");
	// 		$("#textInfo").addClass("animated slideInDown");
	// 		time=0;
	// 	}
	// 	setTimeout(function () {
	// 		$("#textInfo").removeClass("animated slideInDown");
	// 	}, 1000);
	// 	timeout();
	// }, 4000);
}

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

  //triangle.src = link + order[randomNum][0] + ".png";
  circle.src = link + order[randomNum][1] + ".png";
  cross.src = link + order[randomNum][2] + ".png";
  box.src = link + order[randomNum][3] + ".png";


}
window.setInterval(init, 2000);