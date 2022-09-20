// https://www.omnicalculator.com/health/homa-ir

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const HOMAIRRadio = document.getElementById('HOMAIRRadio');
const glucoseRadio = document.getElementById('glucoseRadio');
const insulinRadio = document.getElementById('insulinRadio');

let HOMAIR;
let glucose = v1;
let insulin = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

HOMAIRRadio.addEventListener('click', function() {
  variable1.textContent = 'Glucose';
  variable2.textContent = 'Insulin';
  glucose = v1;
  insulin = v2;
  result.textContent = '';
});

glucoseRadio.addEventListener('click', function() {
  variable1.textContent = 'HOMA-IR';
  variable2.textContent = 'Insulin';
  HOMAIR = v1;
  insulin = v2;
  result.textContent = '';
});

insulinRadio.addEventListener('click', function() {
  variable1.textContent = 'HOMA-IR';
  variable2.textContent = 'Glucose';
  HOMAIR = v1;
  glucose = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(HOMAIRRadio.checked)
    result.textContent = `HOMA-IR = ${computeHOMAIR().toFixed(2)}`;

  else if(glucoseRadio.checked)
    result.textContent = `Glucose = ${computeglucose().toFixed(2)}`;

  else if(insulinRadio.checked)
    result.textContent = `Insulin = ${computeinsulin().toFixed(2)}`;
})

// calculation

// HOMA-IR = (insulin * glucose) / 405

function computeHOMAIR() {
  return (Number(glucose.value) * Number(insulin.value)) / 405;
}

function computeglucose() {
  return (Number(HOMAIR.value) * 405) / Number(insulin.value);
}

function computeinsulin() {
  return (Number(HOMAIR.value) * 405) / Number(glucose.value);
}