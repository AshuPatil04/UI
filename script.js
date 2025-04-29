// Flag to track the first message
let isFirstMessage = true;

// Handle login
function handleLogin() {
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('password').value;

  if (email && pwd) {
    // Hide login page and show dashboard
    gsap.to("#loginPage", {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        document.getElementById("loginPage").remove();
        document.getElementById("dashboard").classList.remove("hidden");
        gsap.from("#dashboard", { opacity: 0, y: 50, duration: 1 });

        // Uncomment and add this if you want to show a bot message initially
        // setTimeout(() => {
        //   addMessage('bot', "How may I help you?");
        // }, 500);
      }
    });
  } else {
    alert('Please fill in both fields!');
  }
}

// Send message
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (!text) return;

  // If it's the first message, remove the system "How can I help you?" message
  if (isFirstMessage) {
    const systemMessage = document.querySelector(".system-message");
    if (systemMessage) {
      systemMessage.remove(); // Remove the "How can I help you?" message
    }
    isFirstMessage = false; // Set the flag to false after the first message
  }

  // Add the user message to the chat
  addMessage('user', text);
  input.value = '';

  // Simulate a bot reply after 1 second
  setTimeout(() => {
    addMessage('bot', "This is a dummy reply from Ocean Media Assistant.");
  }, 1000);
}

// Allow sending message on Enter key press
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("userInput");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or newline
      sendMessage(); // Call the sendMessage function
    }
  });
});

// Add message to chat area
function addMessage(type, text) {
  const chatArea = document.getElementById("chatArea");
  const msg = document.createElement('div');
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatArea.appendChild(msg);
  chatArea.scrollTop = chatArea.scrollHeight;

  // Add animation to the new message
  gsap.from(msg, { opacity: 0, x: type === 'user' ? 100 : -100, duration: 0.4 });
}

// Show history (dummy for now)
function showHistory() {
  addMessage('bot', "History feature is coming soon!");
}

// Sign out
function signOut() {
  if (confirm("Do you want to sign out?")) {
    location.reload();
  }
}
// Toggle the profile options dropdown when the profile icon is clicked
const profileIcon = document.querySelector('.profile-icon');
const profileOptions = document.querySelector('.profile-options');

profileIcon.addEventListener('click', () => {
    profileOptions.classList.toggle('show');
});

// Optional: Functions for Settings and Logout
function goToSettings() {
    alert('Redirecting to Settings...');
    // Replace with actual redirect code
}

function Upgrade() {
    alert('Redirecting...');
    // Add actual logout functionality (clear session, redirect, etc.)
}
