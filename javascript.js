// FUNCTION TO RELOAD PAGE FOR EVERY CLOCK TO SHOW ANIMATION //
onClick="window.location.reload()";

// FUNCTION FOR EACH CLICK ON IMAGE FOR WORK EXPERIENCE SECTION //
function showBanquet() {
    // GET ELEMENT BY ID
    let hideBanquet = document.getElementById('hideBanquet');
    let hideNinja = document.getElementById('hideNinja');
    let hideAssistant = document.getElementById('hideAssistant');
    // IF ELEMENT IS HIDDEN, SHOW ELEMENT WHEN CLICKED, WHEN NOT HIDDEN, HIDE IT //
    // NEED TO HIDE OTHER ELEMENTS THAT ARE SHOWN AS WELL //
    if (hideBanquet.style.display == "none") {
        hideBanquet.style.display = "inline-block"
        hideNinja.style.display = "none"
        hideAssistant.style.display = "none"
    } 
    else {
        hideBanquet.style.display = "none"
    }
}

function showNinja() {
    let hideBanquet = document.getElementById('hideBanquet');
    let hideNinja = document.getElementById('hideNinja');
    let hideAssistant = document.getElementById('hideAssistant');

    if (hideNinja.style.display == "none") {
        hideBanquet.style.display = "none"
        hideNinja.style.display = "inline-block"
        hideAssistant.style.display = "none"
    } 
    else {
        hideNinja.style.display = "none"
    }
}

function showAssistant() {
    let hideBanquet = document.getElementById('hideBanquet');
    let hideNinja = document.getElementById('hideNinja');
    let hideAssistant = document.getElementById('hideAssistant');

    if (hideAssistant.style.display == "none") {
        hideBanquet.style.display = "none"
        hideNinja.style.display = "none"
        hideAssistant.style.display = "inline-block"
    } 
    else {
        hideAssistant.style.display = "none"
    }
}

// SAME FUNCTIONS FOR EDUCATION SECTION //
function showYuhua() {
    // GET ELEMENT BY ID
    let hideYuhua = document.getElementById('hideYuhua');
    let hideJurongville = document.getElementById('hideJurongville');
    let hideNP = document.getElementById('hideNP');
    // IF ELEMENT IS HIDDEN, SHOW ELEMENT WHEN CLICKED, WHEN NOT HIDDEN, HIDE IT //
    // NEED TO HIDE OTHER ELEMENTS THAT ARE SHOWN AS WELL //
    if (hideYuhua.style.display == "none") {
        hideYuhua.style.display = "inline-block"
        hideJurongville.style.display = "none"
        hideNP.style.display = "none"
    } 
    else {
        hideYuhua.style.display = "none"
    }
}

function showJurongville() {
    let hideYuhua = document.getElementById('hideYuhua');
    let hideJurongville = document.getElementById('hideJurongville');
    let hideNP = document.getElementById('hideNP');

    if (hideJurongville.style.display == "none") {
        hideYuhua.style.display = "none"
        hideJurongville.style.display = "inline-block"
        hideNP.style.display = "none"
    } 
    else {
        hideJurongville.style.display = "none"
    }
}

function showNP() {
    let hideYuhua = document.getElementById('hideYuhua');
    let hideJurongville = document.getElementById('hideJurongville');
    let hideNP = document.getElementById('hideNP');

    if (hideNP.style.display == "none") {
        hideYuhua.style.display = "none"
        hideJurongville.style.display = "none"
        hideNP.style.display = "inline-block"
    } 
    else {
        hideNP.style.display = "none"
    }
}