//LAB 9-DATA STORAGE: PRODUCTS PAGE
window.onload = function () {
    let storedName = localStorage.getItem("name");
    let storedColor = localStorage.getItem("colour");

    if (storedName && storedColor) {
        document.getElementById("newMsgBox").textContent = `Welcome, ${storedName}`;
        document.body.style.background = storedColor;
    }
};
