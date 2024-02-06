"use strict";
addEventListener("DOMContentLoaded", (event) => {
  let currentCount = 11;
  const imgRocket = document.getElementById("rocket");
  const btnfire = document.getElementById("firing-button");

  function btnFire() {
    btnfire.addEventListener("click", () => {
      btnfire.src = "images/cancel-button.png";
      imgRocket.src = "images/rocket2.gif";
      setInterval(chrono, 1000);
    });
  }

  function chrono() {
    const billboard = document.querySelector("#billboard span");
    if (currentCount === 0) {
      imgRocket.src = "images/rocket3.gif";
      imgRocket.classList.add("tookOff");
      btnfire.classList.add("disabled");
    } else {
      currentCount--;
      billboard.innerHTML = currentCount;
    }
  }

  btnFire();
});
