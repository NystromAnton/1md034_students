/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();


/*var menuarr = [];
for (var i = 0; i < food.length; i++) {
  menuarr.concat(food[i]);
}*/

var menuarr = [food[0], food[1], food[2], food[3], food[4]];

//Add burgers with checked boxes
function getCheckedBurgers() {
  var checkedburger = [];
  var burgerarray = (document.getElementsByName("burgers"));
  for (var i = 0; i < food.length; i++) {
    var isChecked = burgerarray[i].checked;
    if (isChecked) {
      if (checkedburger.length === 0) {
        checkedburger = checkedburger + " " + burgerarray[i].value;
      } else {
      checkedburger = checkedburger + ", " + burgerarray[i].value;
        }
      }
    }
    console.log(checkedburger);
    return checkedburger;
}

//Get values from form
function getValues() {

  //Save values to variables
  var fullname = "Name: " + document.getElementById("fullname").value;
  var email = " Email: " + document.getElementById("email").value;
  //var street = " Street: " + document.getElementById("street").value;
  //var house = " House: " + document.getElementById("house").value;
  var po = " Payment: " + document.getElementById("Payment options").value;
  var gender = document.getElementsByName("gender");

  //Add burgers with checked boxes
  var checkedburger = [" Selected burgers:"];
  var burgerarray = (document.getElementsByName("burgers"));
  for (var i = 0; i < food.length; i++) {
    var isChecked = burgerarray[i].checked;
    if (isChecked) {
      if (checkedburger.length === 1) {
        checkedburger = checkedburger + " " + burgerarray[i].value;
      } else {
      checkedburger = checkedburger + ", " + burgerarray[i].value;
        }
      }
    }

    //Add the checked gender
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        gender = gender[i].value;
        break;
      }
    }
    gender = " Gender: " + gender;

    //var values = [fullname, email, street, house, po, gender, checkedburger];
    var values = [fullname, email, po, gender, checkedburger];
    return values;
  }

new Vue({
  el: '#main',
  data: {
    menu: menuarr,
    select: "Select burgers",
    selectinfo: "This is where you execute burger selection",
    orders: {},
    tmpSign: "T",
    tmpDetails: {x: -30,
                 y: -30},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    markDone: function () {
      console.log(getValues());
      var order = document.createElement("div");
      order.innerHTML = getValues();
      var output = document.getElementById("orderoutput");
      order.setAttribute("id", "order");
      output.appendChild(order);
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      this.markDone();
      var info = getValues();
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: this.tmpDetails,
                                orderItems: [getCheckedBurgers()],
                                personalItems: [info[0], info[1], info[2], info[3]]
                              });
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.tmpDetails = {x: event.clientX - 10 - offset.x,
                         y: event.clientY - 10 - offset.y }
    }
  }
})
