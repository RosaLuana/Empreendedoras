document.getElementById("botaoenviar").addEventListener("click", dadosOk)

function dadosOk() {
  if (document.getElementById("nome").value != "" 
  && document.getElementById("email").value != "" 
  && document.getElementById("whatsapp").value != "") 
  {
    alert("Show! Vamos entrar em contato com você")
  } 
    else 
  {
    alert("Por favor, preencha corretamente todos os campos.")
  }
}

