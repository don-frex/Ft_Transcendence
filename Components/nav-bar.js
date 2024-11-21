class NavBar extends HTMLElement {
	constructor() {
		super();
		// const LinkEelement = document.createElement("link");
		// LinkEelement.setAttribute("rel", "stylesheet");
		// LinkEelement.setAttribute("href", "../Home Page/style.css");
		this.shadow = this.attachShadow({ mode: 'open' });
		// this.shadow.appendChild(LinkEelement);
		this.shadow.innerHTML = `
		<link rel="stylesheet" href="../Home Page/style.css">
		<div class="body-form">
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
		</div>
	  `;
	}
}

customElements.define('nav-bar', NavBar);