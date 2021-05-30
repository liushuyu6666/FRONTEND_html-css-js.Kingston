function mySubmit(event) {
    let alert;
    event.preventDefault();
    let boxWidth = document.getElementById("input_width").value;
    let boxHeight = document.getElementById("input_height").value;
    let boxColor = document.getElementById("input_color").value;
    let box = document.getElementById("box");
    if (isNaN(boxWidth) || isNaN(boxHeight)) {
        let alert = document.getElementById("alert");
        // var alertText = document.createTextNode("input color is invalid");
        // alert.appendChild(alertText);
        alert.innerHTML = "input size is not number";
        box.setAttribute("style", "");
        return;
    } else if (!isColor(boxColor)) {
        alert = document.getElementById("alert");
        // var alertText = document.createTextNode("input color is invalid");
        // alert.appendChild(alertText);
        alert.innerHTML = "input color is invalid";
        box.setAttribute("style", "");
        return;
    } else {
        alert = document.getElementById("alert");
        // var alertText = document.createTextNode("input color is invalid");
        // alert.appendChild(alertText);
        alert.innerHTML = "";
        let styleStr =
            "width:" +
            boxWidth +
            "px;height:" +
            boxHeight +
            "px;background-color:" +
            boxColor;
        box.setAttribute("style", styleStr);
    }
}

function isColor(strColor) {
    const pattern = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    const s = new Option().style;
    s.color = strColor;
    if (pattern.test(strColor)) {
        return true;
    }
    if (s.color == strColor) {
        return true;
    }
    return false;
}
