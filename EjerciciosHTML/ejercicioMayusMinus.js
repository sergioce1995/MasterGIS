const frase = document.getElementById("frase");
      const comprobar = document.getElementById("comprobar");
      const resultado = document.getElementById("resultado");
      
      comprobar.addEventListener("click", function() {
        if (frase.value === frase.value.toUpperCase()) {
          resultado.innerHTML = "La frase está escrita en mayúsculas.";
        } else if (frase.value === frase.value.toLowerCase()) {
          resultado.innerHTML = "La frase está escrita en minúsculas.";
        } else {
          resultado.innerHTML = "La frase está escrita con mayúsculas y minúsculas.";
        }
      });