function validateForm() {
  const email = document.getElementById("email");
  const temat = document.getElementById("temat");
  const wiadomosc = document.getElementById("wiadomosc");

  // Check if email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Proszę podać prawidłowy adres e-mail.");
    email.focus();
    return false;
  }

  // Ensure "temat" is selected
  if (temat.value === "") {
    alert("Proszę wybrać temat wiadomości.");
    temat.focus();
    return false;
  }

  // Check if message is long enough
  if (wiadomosc.value.length < 10) {
    alert("Wiadomość musi zawierać co najmniej 10 znaków.");
    wiadomosc.focus();
    return false;
  }

  return true; // Form is valid
}
