var expnd = document.getElementsByClassName("expandable");
var i;

for (i = 0; i < expnd.length; i++) {
  expnd[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block"){
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
