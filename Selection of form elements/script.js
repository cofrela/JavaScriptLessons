function Vday(obj) {
    if (obj.elements[0][0].selected)
        obj.res.value = "В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";
    if (obj.elements[0][1].selected)
        obj.res.value="Во вторник будет солнечно, температура воздуха поднимется до +25 градусов";
    if (obj.elements[0][2].selected)
        obj.res.value="В среду будет прохладно, температура воздуха опустится до +17 градусов";
    if (obj.elements[0][3].selected)
        obj.res.value="В четверг будет пасмурно, температура воздуха опустится до +10 градусов";
    if (obj.elements[0][4].selected)
        obj.res.value="В пятницу будет облачно, температура воздуха поднимется до +15 градусов";
    if (obj.elements[0][5].selected)
        obj.res.value="В субботу будет ветрено, температура воздуха поднимется до +27 градусов";
    if (obj.elements[0][6].selected)
        obj.res.value="В воскресенье будет ясно, температура воздуха поднимется до +30 градусов";
}