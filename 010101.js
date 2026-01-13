document.addEventListener("DOMContentLoaded", async () => {

  const loginBtn = document.getElementById("login-btn");
  const pinInput = document.getElementById("pin-input");
  const loginContainer = document.getElementById("login-container");
  const mainSite = document.getElementById("main-site");
  const errorMsg = document.getElementById("error-msg");

  const PIN_HASH = "1c8e32d71b0127bc49eec30f72c6c7f17fda5f9cf7f0c9b55d0c5d2b9bb7f04f";

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
