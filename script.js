// ================================
// Custom Contact Popup
// ================================
const alertBtn = document.getElementById("alertBtn");

// Create popup element
const popup = document.createElement("div");
popup.id = "contactPopup";
popup.innerHTML = `
    <h3>Let's Connect! 😏👇</h3>
    <p>Email: <a href="mailto:armand199701@gmail.com">armand199701@gmail.com</a></p>
    <button id="closePopup">Close</button>
`;
document.body.appendChild(popup);

// Button click event
alertBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

// Close button event
document.getElementById("closePopup").addEventListener("click", () => {
    popup.classList.remove("show");
});
