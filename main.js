let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
const plusBtn1 = document.getElementById("plusBtn1");
const minusBtn1 = document.getElementById("minusBtn1");
const plusBtn2 = document.getElementById("plusBtn2");
const minusBtn2 = document.getElementById("minusBtn2");

plusBtn1.addEventListener('click', () => {
    input1.value++ ;
});

minusBtn1.addEventListener('click', () => {
  if(input1.value > 1) {
    input1.value-- ;
  };
});

plusBtn2.addEventListener('click', () => {
    input2.value++ ;
});

minusBtn2.addEventListener('click', () => {
  if(input2.value > 1) {
    input2.value-- ;
  };
});
