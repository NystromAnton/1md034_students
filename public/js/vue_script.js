function MenuItem(name, kcal, gluten, lactose, img_url) {
  this.name = name;
  this.kcal = kcal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.img_url = img_url;
}

//var menuarr = [];
/*
for (var i = 0; i<food.length; i++) {
  menuarr = menuarr + food[i];
  console.log(food[i]);
} */

var menuarr = [food[0], food[1], food[2], food[3], food[4]];

new Vue({
  el: '#burgervue',
  data: {
    menu: menuarr,
    select: "Select burgers",
    selectinfo: "This is where you execute burger selection"
  },
})

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
})
