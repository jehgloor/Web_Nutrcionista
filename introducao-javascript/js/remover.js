
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    // var alvoEvento = event.target; // td
    // var paiDoAlvo = alvoEvento.parentNode; //tr

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
      event.target.parentNode.remove();
    },500);
  //  paiDoAlvo.remove();

});

// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     console.log("fui clicado com o duplço clique");
//     this.remove();
//   });
// });
