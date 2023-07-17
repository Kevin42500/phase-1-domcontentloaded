// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementById('text');
    textElement.textContent = 'This is really cool!';
  });
  