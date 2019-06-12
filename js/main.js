document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".val").forEach((item) => {
    item.addEventListener('input', countChange);
  })
  document.querySelectorAll(".check").forEach((item) => {
    item.addEventListener('change', adaptiveCheck);
  })

  priceListSumm.forEach((item, key) => {
    let span = document.querySelector("#" + key);
    if (span != null)
      span.innerHTML = item + "р.";
  });
});

//0 - все выключено
//1 - один из
//2 - оба
let adaptiveFlag = 0; 

function adaptiveCheck(e) {
  let tab = document.querySelector("#adaptiveTab").checked;
  let mobile = document.querySelector("#adaptiveMobile").checked;


  if(tab && mobile) adaptiveFlag = 2;
    else if(tab || mobile) adaptiveFlag = 1;
      else adaptiveFlag = 0;
  adaptiveSumm();
}

function adaptiveSumm() {
  let sum = 0;
  document.querySelectorAll(".val").forEach((item) => {
    // console.log(item);
    sum += item.value * 100; //100 рублей за элемент верстки
  });
  priceListSumm['adaptivePrice'] = sum;
  if(adaptiveFlag === 2) {
    document.querySelector("#adaptivePrice").innerHTML = priceListSumm['adaptivePrice'] * 2 + 'р.';
  }
  if(adaptiveFlag === 1){
    document.querySelector("#adaptivePrice").innerHTML = priceListSumm['adaptivePrice'] + 'р.';
  } 
  if(adaptiveFlag === 0) {
    document.querySelector("#adaptivePrice").innerHTML = 0 + 'р.';
  }
}

function countChange(e) {
  let span = e.target.parentNode.children[2];
  let summ = e.target.value * priceList[e.target.id];
  span.innerHTML = summ + "р.";
  priceListSumm.set(span.id, summ);
  updateSumm();
  adaptiveSumm();
}

function updateSumm() {
  let sum = 0;
  priceListSumm.forEach((item) => {
    sum += item;
  })

  document.querySelector(".summ").innerHTML = sum + "р.";
}

const priceList = {
  "template": 1000,
  "blocks": 500,
  "hard": 500,
  "interactive": 700,
  "sliders": 500,
  "forms": 300,
  "modals": 300,
};

const priceListSumm = new Map([
  ["templatePrice", 0],
  ["blocksPrice", 0],
  ["hardPrice", 0],
  ["interactivePrice", 0],
  ["slidersPrice", 0],
  ["formsPrice", 0],
  ["modalsPrice", 0],
  ["adaptivePrice", 0]
]);