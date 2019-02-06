function MenuItem(name, kcal, gluten, lactose, img_url) {
  this.name = name;
  this.kcal = kcal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.img_url = img_url;
}

var burg1 = new MenuItem('The Bacon Burger', 950, 'true', 'false', 'img/baconburger.jpg');
var burg2 = new MenuItem('The Chicken Burger', 730, 'true', 'true', 'img/chickenburger.jpg');
var burg3 = new MenuItem('The Halloumi Burger', 820, 'true', 'true', 'img/halloumiburger.jpg');
var burg4 = new MenuItem('The Nacho Burger', 890, 'true', 'false', 'img/nachoburger.jpg');
var burg5 = new MenuItem('The Non-Burger', 10, 'false', 'false', 'img/nonburger.jpg');
var menuarr = [burg1, burg2, burg3, burg4, burg5];

new Vue({
  el: '#burgervue',
  data: {
    menu: menuarr,
    select: "Select burgers",
    selectinfo: "This is where you execute burger selection"
  },
})

/*
new Vue({
  el: "#orderButton",
  methods: {
    markDone: function () {
      console.log(getValues());
      var order = document.createElement("div");
      order.innerHTML = getValues();
      var output = document.getElementById("orderoutput");
      order.setAttribute("id", "order");
      output.appendChild(order);
    }
  }
})*/
