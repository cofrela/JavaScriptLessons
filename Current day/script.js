function showDay() {
    var nDays = new Array ("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
    var now = new Date();
    var day = now.getDay();
    var iDay = nDays[day];
    var str = "Сегодня - " + iDay;
    document.write(str);
}