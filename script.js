

let main_menu = document.querySelector(".main-menu");
let sidebar = document.querySelector(".sidebar");

main_menu.onclick = function(){
  sidebar.classList.toggle("active");
}
document.onclick = function(e){
  if(!main_menu.contains(e.target) && !sidebar.contains(e.target)){
    sidebar.classList.remove("active");
  }
}