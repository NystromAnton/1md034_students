function MenuItem(name, kcal, gluten, lactose, img_url) {
  this.name = name;
  this.kcal = kcal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.img_url = img_url;
}

function getNameKcal() {
  return this.name + ' ' + this.kcal;
}

function init() {
  var burg1 = new MenuItem('The Bacon Burger', 950, 'true', 'false', 'img/baconburger.jpg');
  var burg2 = new MenuItem('The Chicken Burger', 730, 'true', 'true', 'img/chickenburger.jpg');
  var burg3 = new MenuItem('The Halloumi Burger', 820, 'true', 'true', 'img/halloumiburger.jpg');
  var burg4 = new MenuItem('The Nacho Burger', 890, 'true', 'false', 'img/nachoburger.jpg');
  var burg5 = new MenuItem('The Non-Burger', 10, 'false', 'false', 'img/nonburger.jpg');
  var menuarr = [burg1, burg2, burg3, burg4, burg5];
  return menuarr;
}

var menuarr = init();
var grid = document.getElementsByClassName("wrapper")[0];

for (var i = 0; i < menuarr.length; i++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box" + (i+1));

    box.appendChild(document.createElement("h4")).innerHTML = menuarr[i].name;

    var pic = document.createElement("img");
    pic.setAttribute("class", "burgerimages");
    pic.setAttribute("src", menuarr[i].img_url);
    box.appendChild(pic);

    var list = document.createElement("ul"); //List with burger-information
    list.setAttribute("class", "list");

    //Information about kcal
    var kcal = document.createElement("li");
    kcal.innerHTML = menuarr[i].kcal + " kcal";
    list.appendChild(kcal);

    //If burger contains lactose, show it
    if (menuarr[i].lactose === 'true') {
      var listelem = document.createElement("li");
      listelem.innerHTML = "Contains <span class=\"allergies\">lactose</span>";
      list.appendChild(listelem);
    }

    //If burger contains gluten, show it
    if (menuarr[i].gluten === 'true') {
      var listelem = document.createElement("li");
      listelem.innerHTML = "Contains <span class=\"allergies\">gluten</span>"
      list.appendChild(listelem);
    }

    box.appendChild(list);
    grid.appendChild(box);
}
