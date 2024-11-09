// Dummy Data
const friends = [
	{ id: 1, name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
	{ id: 2, name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' },
	{ id: 3, name: 'Charlie', email: 'charlie@example.com', phone: '555-666-7777' },
  ];
  
  let selectedFriend = null;
  
  // Populate Friend List
  const friendsList = document.getElementById('friends');
  friends.forEach(friend => {
	const li = document.createElement('li');
	li.textContent = friend.name;
	li.dataset.id = friend.id;
	li.addEventListener('click', () => selectFriend(friend));
	friendsList.appendChild(li);
  });
  
  // Select a Friend
  function selectFriend(friend) {
	selectedFriend = friend;
  
	// Show chat window messages
	const chatWindow = document.getElementById('chat-window');
	chatWindow.innerHTML = `<div class="message received">Hello, this is ${friend.name}!</div>`;
  
	// Show contact details
	const contactInfo = document.getElementById('contact-info');
	contactInfo.innerHTML = `
	  <p><strong>Name:</strong> ${friend.name}</p>
	  <p><strong>Email:</strong> ${friend.email}</p>
	  <p><strong>Phone:</strong> ${friend.phone}</p>
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
		replyElement.textContent = `Hi, I'm ${selectedFriend.name}!`;
		chatWindow.appendChild(replyElement);
		chatWindow.scrollTop = chatWindow.scrollHeight;
	  }, 1000);
	}
  }
  