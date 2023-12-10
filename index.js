/*--------------Task 1--------------------*/

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const course = 40;
  for (let i = 10; i <= 100; i += 10) {
    alert(`Вартість ${i} доларів - ${course * i} грн`);
  }

  let i = 10;
  while (i <= 100) {
    alert(`Вартість ${i} доларів - ${course * i} грн`);
    i += 10;
  }

  i = 10;
  do {
    alert(`Вартість ${i} доларів - ${course * i} грн`);
    i += 10;
  } while (i <= 100);
});

/*--------------Task 2--------------------*/

// '' - 'Строка не має бути пустою'
// '       ' - 'Строка не має бути пустою'
// '123жщт123' - 'Введить коректне число'
// '-123' - 'Число має бути більшим за 0'
// '0' - 'Число має бути більшим за 0'
// '123.123' - 'Число має бути цілим'
// null - cancel
// '   123     ' - OK

const getNaturalValue = () => {
  // Валідація одна для другого і третього таску
  const num = prompt("Введіть натуральне число");
  if (num === null) {
    alert("OK. Bye)");
    return;
  } else if (num.trim() === "") {
    alert("Строка не має бути пустою");
    return getNaturalValue();
  } else if (isNaN(num)) {
    alert("Введить коректне число");
    return getNaturalValue();
  } else if (+num <= 0) {
    alert("Число має більшим за 0");
    return getNaturalValue();
  } else if (!Number.isInteger(+num) || !isFinite(num)) {
    alert("Число має бути цілим і кінцевим");
    return getNaturalValue();
  } else {
    return +num;
  }
};

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  const num = getNaturalValue();

  if (num === 1) {
    alert("Число " + num + " не просте і не 'не просте'. Воно само по собі)");
    return;
  }

  let flag = true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i !== 0) {
      continue;
    } else {
      flag = false;
      break;
    }
  }

  num &&
    (flag // Якщо так не зробити (num && ...), то при Cancel у промпті буде писати , що undefined - просте
      ? alert("Число " + num + " просте")
      : alert("Число " + num + " не просте"));
});

/*--------------Task 3--------------------*/
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
  const num = getNaturalValue();
  let flag = false;
  let i = 0;

  while (3 ** i <= num) {
    if (3 ** i === num) {
      flag = true;
      break;
    } else {
      i++;
    }
  }

  num &&
    (flag
      ? alert(`Можна одержати. Це 3^${i}`)
      : alert(
          `Не можна одержати число ${num} шляхом зведення числа 3 в цілий ступінь`
        ));
});
