
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const pinInput = document.getElementById("pin-input");
  const loginContainer = document.getElementById("login-container");
  const mainSite = document.getElementById("main-site");
  const errorMsg = document.getElementById("error-msg");
  loginBtn.addEventListener("click", () => {
      var _0x1 = (!![] + [])[+!+[]].length + 5; 
      var _0x2 = (typeof NaN)[0].length + 3; 
      var _0x3 = ([![]]+[][[]])[+!+[]+[+[]]].length - 7; 
      var _0x4 = (+(+!+[] + (+!+[] + (+!+[] + (+!+[] + (+!+[] + [])))))) + 1; 
      var res = "" + _0x1 + _0x2 + _0x3 + _0x4;
      if (pinInput.value === res) {
          loginContainer.style.display = "none";
          mainSite.style.display = "block";
          console.log("Ok, intento: ", res);
      } else {
          errorMsg.style.display = "block";
          pinInput.value = "";
          console.log("Mal, intento: ", res);
      }
  });
  pinInput.addEventListener("keypress", (e) => {if (e.key === "Enter") loginBtn.click();});
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");
      buttons.forEach(b => b.classList.remove("is-active"));
      button.classList.add("is-active");
      sections.forEach(section => {
        section.classList.remove("is-active");
        if (section.id === sectionId.replace("#", "")) {section.classList.add("is-active");}
      });
    });
  });
});
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && ['c', 'x', 'u', 's', 'p'].includes(e.key.toLowerCase())) || e.key === "F12" || (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase()))) {
    e.preventDefault();
  }
});
