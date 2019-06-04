window.onload = function () {
  document.querySelectorAll("input").forEach((item) => {
    item.addEventListener('input', countChange);
  })
}

function countChange(e) {
  e.target.parentNode.children[2].innerHTML = e.target.value * priceList[e.target.id] + "р.";

}

const priceList = {
  "template": 1000,
  "blocks": 500,
  "hard":500,
  "interactive": 700,
  "sliders":500,
  "forms":300,
  "modals":300
};