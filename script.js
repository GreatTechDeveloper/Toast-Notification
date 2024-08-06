const toastBox = document.getElementById("toastBox");
const successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
const errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix error!`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again `;

function showToast(msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  } else if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
