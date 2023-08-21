document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("intro");
    const submitBtn = document.getElementById("BtonUp");

    submitBtn.addEventListener("click", function() {
      const username = usernameInput.value.trim();

      if (validateUsername(username)) {
        window.location.href = "Bienvenida.html";
      } else {
        alert("Nombre de usuario no válido.");
      }
    });

    function validateUsername(username) {
      // Requisitos básicos: entre 3 y 20 caracteres alfanuméricos
      const regex = /^[a-zA-Z0-9]{3,20}$/;
      return regex.test(username);
    }
});