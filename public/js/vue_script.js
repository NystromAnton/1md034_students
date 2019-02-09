/*var menuarr = [];
for (var i = 0; i < food.length; i++) {
  menuarr.concat(food[i]);
}*/

var menuarr = [food[0], food[1], food[2], food[3], food[4]];

/* Display burger selection */
new Vue({
  el: '#burgervue',
  data: {
    menu: menuarr,
    select: "Select burgers",
    selectinfo: "This is where you execute burger selection",
  },
})

//Get values from form
function getValues() {

  //Save values to variables
  var fullname = "Name: " + document.getElementById("fullname").value;
  var email = " Email: " + document.getElementById("email").value;
  var street = " Street: " + document.getElementById("street").value;
  var house = " House: " + document.getElementById("house").value;
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

    var values = [fullname, email, street, house, po, gender, checkedburger];
    return values;
  }

// 'PLACE MY ORDER' - BUTTONCLICK
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
