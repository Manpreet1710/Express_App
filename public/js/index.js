
// Hamburger Menu
const menu = document.getElementById("menu");
const close = document.getElementById("close");
menu.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  close.style.display = "block";
  menu.style.display = "none";
  ul.classList.add("active");

  const li = document.getElementsByTagName("li");
  Array.from(li).forEach(element => {
    element.classList.add("same2");
  });
})

close.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  close.style.display = "none";
  menu.style.display = "block";
  ul.classList.remove("active");

  const li = document.getElementsByTagName("li");
  Array.from(li).forEach(element => {
    element.classList.remove("same2");
  });
})


// Advance Form Validation
const submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
  const form1 = document.querySelector(".form1");
    if(form1 === ''){
      alert("err");
      return false;
    }
})