document.getElementById("tarifaForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var consumo = parseFloat(document.getElementById("consumo").value);
    var valor = parseFloat(document.getElementById("valor").value);
  
    var total = consumo * valor;
  
    document.getElementById("totalValue").textContent = "$ " + total.toFixed(2);
    document.getElementById("totalContainer").style.display = "block";
  });