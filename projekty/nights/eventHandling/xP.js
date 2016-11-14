
//*
function addEventHandler(oNode, sEvt, fFunc, bCaptures){
		oNode.addEventListener(sEvt,fFunc,bCaptures);
}

//*
function removeEventHandler(oNode, sEvt, fFunc, bCaptures){
		oNode.removeEventListener(sEvt, fFunc, bCaptures);
}

function getEventTarget(e) {
    if ((window.event) && (window.event.srcElement)) return window.event.srcElement;
    else return e.target;
}

function onLinkClicked(e) {
    alert("You clicked the link!");
}
function onEnableClick(e) {
    var target = getEventTarget(e);
    if (target.checked)
       addEventHandler(document.getElementById("clickLink"), "click", onLinkClicked, false);
    else
        removeEventHandler(document.getElementById("clickLink"), "click", onLinkClicked, false);
}

function setUpClickEvent(e) {
    addEventHandler(document.getElementById("Checkbox1"), "click", onEnableClick, false);
}

addEventHandler(window, "load", setUpClickEvent, false);