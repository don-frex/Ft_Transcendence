const container= document.getElementById('container');
const login_btn = document.getElementById('login');
const register_btn = document.getElementById('register');

register_btn.addEventListener('click', () => {
	container.classList.add("active");
});

login_btn.addEventListener('click', () =>{
	container.classList.remove("active");
});

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