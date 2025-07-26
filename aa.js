function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  const li = document.createElement("li");
  li.textContent = taskText;

  const del = document.createElement("span");
  del.textContent = "✓ ";
  del.className = "deleteBtn";
  del.onclick = () => li.remove();

  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}