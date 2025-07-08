// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    event.preventDefault();
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    event.preventDefault();
  }
});

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
