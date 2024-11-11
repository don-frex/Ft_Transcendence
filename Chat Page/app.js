
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
  
// Dummy Data
const friends = [
	{ id: 1, name: 'Don-frex', email: 'Don-frex@example.com', phone: '123-456-7890', imageURL: 'https://avatars.githubusercontent.com/u/70679159' },
	{ id: 2, name: 'Yassine', email: 'Yassine@example.com', phone: '987-654-3210', imageURL: 'https://cdn.intra.42.fr/users/1762786def18acd298d27100e94b6f66/ymaaloum.jpg'},
	{ id: 3, name: 'Yassir', email: 'Yassir@example.com', phone: '555-666-7777', imageURL: 'https://cdn.intra.42.fr/users/cf987edde4ffa352bdff70950565e929/ylaaross.jpg' },
  ];
  
  let selectedFriend = null;
  
  // Populate Friend List
  const friendsList = document.getElementById('friends');
  friends.forEach(friend => {
	const li = document.createElement('li');
	li.dataset.id = friend.id;
	const avatar = document.createElement('div');
	avatar.classList.add('avatarContainer');
	const img = document.createElement('img');
	img.src =  friend.imageURL;
	img.classList.add('avatar');
	img.setAttribute("alt", friend.name);
	avatar.appendChild(img);
	li.appendChild(avatar);
	// li.textContent = friend.name;
	li.append(friend.name)	
	// li.addEventListener('click', () => selectFriend(friend));
	li.addEventListener('click', () => selectFriend(friend));
	friendsList.appendChild(li);
  });
  
  // Select a Friend
  function selectFriend(friend) {
	  selectedFriend = friend;
	  const contactImage = document.getElementById('contact-image');
	
	// Show chat window messages
	const chatWindow = document.getElementById('chat-window');
	chatWindow.innerHTML = `<div class="message received">Hello, this is ${friend.name}!</div>`;
	
	// Show contact details
	const contactInfo = document.getElementById('contact-info');
	contactImage.src = friend.imageURL || 'default-image.png'; // Default image fallback
  	//contactImage.alt = `${friend.name}'s image`;
	contactInfo.innerHTML = `
		<h1>${friend.name}</h1>
	  	<nav class="user-panel" aria-label="User actions">
    <button class="panel-option" aria-label="View profile">
        <span class="option-icon">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d00984856a6e4e4fc6cacf6193655e1fe96696ed9d79af881455ff7a035b029?placeholderIfAbsent=true&apiKey=7c996a33a93047e99bde1636afc980c5" alt="" />
        </span>
        <span class="option-text">View profile</span>
    </button>
    <button class="panel-option" aria-label="Invite to a game">
        <span class="option-icon">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a41e797efdf453abaa5586bc6a1db7a39ad686263f2df371265880e84f2029a?placeholderIfAbsent=true&apiKey=7c996a33a93047e99bde1636afc980c5" alt="" />
        </span>
        <span class="option-text">Invite to a game</span>
    </button>
    <button class="panel-option" aria-label="Block">
        <span class="option-icon">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/976c928a190bea484b5a13d5b8e41707fe5d79bd9df7850506d056ab16e95aa7?placeholderIfAbsent=true&apiKey=7c996a33a93047e99bde1636afc980c5" alt="" />
        </span>
        <span class="option-text">Block</span>
    </button>
</nav>
	`;
  }
  
  // Chat Functionality
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatWindow = document.getElementById('chat-window');
  
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
	  sendMessage();
	}
  });
  
  function sendMessage() {
	const message = messageInput.value.trim();
	if (message && selectedFriend) {
	  const messageElement = document.createElement('div');
	  messageElement.classList.add('message', 'sent');
	  messageElement.textContent = message;
	  chatWindow.appendChild(messageElement);
	  chatWindow.scrollTop = chatWindow.scrollHeight;
	  messageInput.value = '';
  
	  // Simulate a reply
	  setTimeout(() => {
		const replyElement = document.createElement('div');
		replyElement.classList.add('message', 'received');
		replyElement.textContent = `message resived ${selectedFriend.name}!`;
		chatWindow.appendChild(replyElement);
		chatWindow.scrollTop = chatWindow.scrollHeight;
	  }, 1000);
	}
  }
  