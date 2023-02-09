 // evento para el botón guardar
 document.getElementById("saveBtn").addEventListener("click", function() {
    alert("Guardado");
  });

  // evento para el primer input
  document.getElementById("inputName").addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });
  document.getElementById("inputName").addEventListener("blur", function() {
    this.style.backgroundColor = "white";
  });

  // evento para el segundo input
  document.getElementById("inputLetter").addEventListener("input", function() {
    let letter = this.value;
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      this.style.color = "red";
    } else {
      this.style.color = "blue";
    }
  });