/* Abre e fecha o menu em smartphone */

document.querySelector(".menu_abrir").onclick = function () {
  document.documentElement.classList.add("menu_ativo");
};

document.querySelector(".menu_fechar").onclick = function () {
  document.documentElement.classList.remove("menu_ativo");
};

document.documentElement.onclick = function (event) {
  if (event.target == document.documentElement) {
    document.documentElement.classList.remove("menu_ativo");
  }
};
