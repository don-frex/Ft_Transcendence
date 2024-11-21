class NavBar extends HTMLElement {
	constructor() {
	  super();
	  const shadow = this.attachShadow({ mode: 'open' });
	  shadow.innerHTML = `
		<style>
		  nav {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			background-color: #333;
			color: white;
		  }
		  .logo {
			height: 50px;
		  }
		  .user-pic {
			border-radius: 50%;
			cursor: pointer;
		  }
		</style>
		<nav>
		  <a href="Home Page.html">
			<img class="logo" src="../images/TR-logo.png" alt="Logo">
		  </a>
		  <img src="https://cdn.intra.42.fr/users/6346b9909265439cf973f7d7ecb87989/asaber.jpg" 
			   class="user-pic" onclick="toggleMenu()" alt="User Picture">
		</nav>
	  `;
	}
  }
  
  customElements.define('nav-bar', NavBar);