let loginForm = document.getElementById("contactForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("inputName");
  let email = document.getElementById("inputEmail");
  let mensaje = document.getElementById("inputMessage");

  if (nombre.value == "" || email.value == "" || mensaje.value == "") {
    alert("Debe completar Nombre y Email para poder enviar un mensaje.");
  } else {
    alert("Muchas gracias por tu contacto!");

    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }
});