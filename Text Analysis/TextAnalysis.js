const input = document.getElementById('input');
const output = document.getElementById('output');

const btnUpercase = document.getElementById('btnUpercase');
const btnLowercase = document.getElementById('btnLowercase');
const btnRemovespace = document.getElementById('btnRemovespace');

const uper = btnUpercase.classList;
const lower = btnLowercase.classList;
const remove = btnRemovespace.classList;


function Upercase() {
  const value = input.value.toUpperCase();
  output.innerHTML = value;
}

function Lowercase() {
  const value = input.value.toLowerCase();
  output.innerHTML = value;
}

function Removespace() {
  const value = input.value.split(' ').join('');
  output.innerHTML = value;
}


function copy() {
  console.log(output.lenght);
  output.select();
  document.execCommand('copy');
}

function clean() {
  output.innerText = null;
}


function keyup() {
  if (uper == 'block') {
    const value = input.value.toUpperCase();
    output.innerHTML = value;
  }
  else if (lower == 'block') {
    const value = input.value.toLowerCase();
    output.innerHTML = value;
  }
  else if (remove == 'block') {
    const value = input.value.split(' ').join('');
    output.innerHTML = value;
  }
}


function left() {
  if (uper == 'block') {
    uper.add('none');
    uper.remove('block');
    remove.add('block');
    remove.remove('remove');
    remove.remove('none');

    const value = input.value.split(' ').join('');
    output.innerHTML = value;
  }
  else if (remove == 'block') {
    remove.add('none');
    remove.remove('block');
    lower.add('block');
    lower.remove('lower');
    lower.remove('none');

    const value = input.value.toLowerCase();
    output.innerHTML = value;
  }
  else if (lower == 'block') {
    lower.add('none');
    lower.remove('block');
    uper.add('block');
    uper.remove('none');

    const value = input.value.toUpperCase();
    output.innerHTML = value;
  }
}

function right() {
  if (uper == 'block') {
    uper.add('none');
    uper.remove('block');
    lower.remove('lower');
    lower.add('block');
    lower.remove('none');

    const value = input.value.toLowerCase();
    output.innerHTML = value;
  }
  else if (lower == 'block') {
    lower.add('none');
    lower.remove('block');
    remove.remove('remove');
    remove.add('block');
    remove.remove('none');

    const value = input.value.split(' ').join('');
    output.innerHTML = value;
  }
  else if (remove == 'block') {
    remove.add('none');
    remove.remove('block');
    uper.remove('none');
    uper.add('block')

    const value = input.value.toUpperCase();
    output.innerHTML = value;
  }

}
