const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");

loginBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
});

loginModal.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});
