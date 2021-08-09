let input = document.querySelectorAll(".itemNum");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

plus[0].addEventListener('click', plusNum0 );
minus[0].addEventListener('click', minusNum0 );
function plusNum0() {
  if(input[0].value < 5) {
    input[0].value++ ;
  };
};

function minusNum0() {
  if(input[0].value > 1) {
    input[0].value-- ;
  };
};

plus[1].addEventListener("click", plusNum1 );
minus[1].addEventListener("click", minusNum1 );
function plusNum1() {
  if(input[1].value < 5) {
    input[1].value++ ;
  };
};

function minusNum1() {
  if(input[1].value > 1) {
    input[1].value-- ;
  };
};