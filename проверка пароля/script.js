function prov() {
    var a = document.forma1.elements[2].value;
    var b = document.forma1.elements[3].value;
    if (a == b) {
        alert("Вы зарегистрированы!");
    } else {
        alert ("Введите правильный пароль.");
    }
}