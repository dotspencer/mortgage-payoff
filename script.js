const boxesWrap = document.querySelector('.boxes-wrap');

const loanAmount = 348000;
const chunks = 10000;

const ceilAmount = Math.ceil(348000 / chunks) * chunks;
const remaining = 344776.22;

console.log('ceilAmount:', ceilAmount);

const boxes = ceilAmount / chunks;

const startAmount = document.createElement('div');
startAmount.classList.add('amount');
startAmount.innerText = toK(loanAmount);
boxesWrap.appendChild(startAmount);

for (let i = 0; i < boxes; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  boxesWrap.appendChild(box);

  const amount = document.createElement('div');
  amount.classList.add('amount');
  amount.innerText = toK(ceilAmount - ((i + 1) * chunks));
  boxesWrap.appendChild(amount);
}

function toK(value) {
  if (!value) {
    return '0';
  }
  return `${value / 1000}K`;
}
