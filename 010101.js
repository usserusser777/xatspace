document.addEventListener("DOMContentLoaded", async () => {

  const loginBtn = document.getElementById("login-btn");
  const pinInput = document.getElementById("pin-input");
  const loginContainer = document.getElementById("login-container");
  const mainSite = document.getElementById("main-site");
  const errorMsg = document.getElementById("error-msg");

  const PIN_HASH = "e78dcd2ab23bdc60f1f97aced1140b43d2cc47daee343654dc53e8672c74b1f5";

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  loginBtn.addEventListener("click", async () => {
    const input = pinInput.value.trim();
    const inputHash = await sha256(input);

    if (inputHash === PIN_HASH) {
      console.log("OK: ",PIN_HASH);
      loginContainer.style.display = "none";
      mainSite.style.display = "block";
    } else {
      console.log("BAD: ",PIN_HASH);
      errorMsg.style.display = "block";
      pinInput.value = "";
    }
  });

});
