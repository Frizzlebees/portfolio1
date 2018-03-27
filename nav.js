const toggleNavView = function() {
  document.getElementById('menu').classList.toggle('hidden');
  document.getElementById('nav').classList.toggle('menuView');
  document.getElementById('navIconBars').classList.toggle('hidden');
  document.getElementById('navIconClose').classList.toggle('hidden');
};

document.getElementById('navIconBars').addEventListener('click', function() {
  toggleNavView();
});

document.getElementById('navIconClose').addEventListener('click', function() {
  toggleNavView();
});