document.querySelector('.close').addEventListener('click', function(){
  this.parentNode.remove();
  var num = document.getElementById('num')
  num.dataset.total -= 1;
  num.innerHTML = 'Emails (' + num.dataset.total + ')'

})
