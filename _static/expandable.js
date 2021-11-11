var expnd = document.getElementsByClassName("expandable");
var i;

for (i = 0; i < expnd.length; i++) {
  expnd[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
