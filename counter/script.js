
let count = 0;

function add(e) {
  count++;
  control('count');
}

function minus(e) {
  if (count == 0) {
    count = 0;
  } else {
    count--;
  }
  control('count');
}

function control(id) {
  document.getElementById('count').innerText = count;
}
