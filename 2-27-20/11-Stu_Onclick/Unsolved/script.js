var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
function incrementOrDecrement(inc) {
  var countEl = document.getElementById('count');
  var count = Number(countEl.innerText);
  if (inc) {
    count = count + 1;
  } else {
    count -= 1;
  }
  countEl.innerText = count;
}
increment.addEventListener('click', function() {
  incrementOrDecrement(true);
});
decrement.addEventListener('click', function() {
  incrementOrDecrement(false);
});