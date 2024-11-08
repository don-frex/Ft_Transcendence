let profile_pic = document.getElementById("profile-pic");
let input_file = document.getElementById("input-file");

input_file.onchange = function(){
	profile_pic.src = URL.createObjectURL(input_file.files[0]);
}

particlesJS("particles-js", {
	particles: {
	  number: {
		value: 180,
		density: {
		  enable: true,
		  value_area: 800,
		},
	  },
	  color: {
		value: "#fff",
	  },
	  shape: {
		type: "circle",
	  },
	  opacity: {
		value: 0.3,
		random: false,
		anim: {
		  enable: false,
		  speed: 4,
		  opacity_min: 0.1,
		  sync: false,
		},
	  },
	  size: {
		value: 4,
		random: true,
		anim: {
		  enable: true,
		  speed: 2,
		  size_min: 0.1,
		  sync: false,
		},
	  },
	  line_linked: {
		enable: false,
	  },
	  move: {
		enable: true,
		speed: 0.4,
		direction: "right",
		random: true,
		straight: false,
		out_mode: "none",
		bounce: false,
		attract: {
		  enable: false,
		  rotateX: 600,
		  rotateY: 1200,
		},
	  },
	},
	retina_detect: true,
  });