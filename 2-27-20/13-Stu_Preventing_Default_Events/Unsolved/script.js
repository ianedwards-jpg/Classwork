var submit = document.getElementById('submit');
//var decrement = document.getElementById('decrement');

function incrementOrDecrement(inc) {
  var cost = document.getElementById('form');
  var count = Number(countEl.innerText);
  if (inc) {
    count = count + 1;
  } else {
    count -= 1;
  }
  countEl.innerText = count;
}
submit.addEventListener('click', function(inc) {
  incrementOrDecrement(true);
});