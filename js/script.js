// Greeting
const user = prompt("Enter your name:");
if(user){
  document.getElementById("greeting").innerText =
  "Hello " + user + ", Welcome!";
}

// Form Handler
document.getElementById("formMessage")
.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const msg = document.getElementById("message").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if(!name || !birth || !msg || !gender){
    alert("Please complete all fields.");
    return;
  }

  const now = new Date();

  document.getElementById("resultBox").innerHTML = `
    <p><strong>Time:</strong> ${now}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Birth Date:</strong> ${birth}</p>
    <p><strong>Gender:</strong> ${gender.value}</p>
    <p><strong>Message:</strong> ${msg}</p>
  `;
});