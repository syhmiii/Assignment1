onClick="window.location.reload()";
function showStuff() {
    let hidden = document.getElementById('hidden');
    let hidden2 = document.getElementById('hidden2');
    let hidden3 = document.getElementById('hidden3');

    if (hidden.style.display == "none") {
      hidden.style.display = "inline-block"
      hidden2.style.display = "none"
      hidden3.style.display = "none"
    } 
    else {
      hidden.style.display = "none"
    }
  }
  function showStuff2() {
    let hidden = document.getElementById('hidden');
    let hidden2 = document.getElementById('hidden2');
    let hidden3 = document.getElementById('hidden3');

    if (hidden2.style.display == "none") {
      hidden.style.display = "none"
      hidden2.style.display = "inline-block"
      hidden3.style.display = "none"
    } 
    else {
      hidden2.style.display = "none"
    }
  }
  function showStuff3() {
    let hidden = document.getElementById('hidden');
    let hidden2 = document.getElementById('hidden2');
    let hidden3 = document.getElementById('hidden3');

    if (hidden3.style.display == "none") {
      hidden.style.display = "none"
      hidden2.style.display = "none"
      hidden3.style.display = "inline-block"
    } 
    else {
      hidden3.style.display = "none"
    }
  }