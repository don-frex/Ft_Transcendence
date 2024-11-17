const container= document.getElementById('container');
const login_btn = document.getElementById('login');
const register_btn = document.getElementById('register');

register_btn.addEventListener('click', () => {
	container.classList.add("active");
});

login_btn.addEventListener('click', () =>{
	container.classList.remove("active");
});