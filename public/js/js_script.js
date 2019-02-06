var grid = document.getElementsByClassName("wrapper")[0];

for (var i = 0; i < food.length; i++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box" + (i+1));

    box.appendChild(document.createElement("h4")).innerHTML = food[i].name;

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "burgercheck" + (i+1));
    box.appendChild(checkbox);
    box.appendChild(document.createElement("br"));
    box.appendChild(document.createElement("br"));

    var pic = document.createElement("img");
    pic.setAttribute("class", "burgerimages");
    pic.setAttribute("src", food[i].img);
    box.appendChild(pic);

    var list = document.createElement("ul"); //List with burger-information
    list.setAttribute("class", "list");

    //Information about kcal
    var kcal = document.createElement("li");
    kcal.innerHTML = food[i].kcal + " kcal";
    list.appendChild(kcal);

    //If burger contains lactose, show it
    if (food[i].lactose) {
      var listelem = document.createElement("li");
      listelem.innerHTML = "Contains <span class=\"allergies\">lactose</span>";
      list.appendChild(listelem);
    }

    //If burger contains gluten, show it
    if (food[i].gluten) {
      var listelem = document.createElement("li");
      listelem.innerHTML = "Contains <span class=\"allergies\">gluten</span>"
      list.appendChild(listelem);
    }

    box.appendChild(list);
    grid.appendChild(box);
}

function getValues() {
  var fullname = document.getElementById("fullname").value;
  var email = " " + document.getElementById("email").value;
  var street = " " + document.getElementById("street").value;
  var house = " " + document.getElementById("house").value;
  var po = " " + document.getElementById("Payment options").value;
  var gender = document.getElementsByName("gender");

  var checkedburger = [];
  for (var i = 0; i < food.length; i++) {
    var isChecked = document.getElementById("burgercheck" + (i+1)).checked;
    if (isChecked) {
      if (checkedburger.length === 0) {
        checkedburger = checkedburger + " " + food[i].name;
      } else {
      checkedburger = checkedburger + ", " + food[i].name;
    }
    }
  }

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender = gender[i].value;
      break;
    }
  }
  gender = " " + gender;

  var values = [fullname, email, street, house, po, gender, checkedburger];
  return values;
}

/*
var orderButton = document.getElementById("orderButton");
  orderButton.onclick = function() {
    console.log(getValues());
    var order = document.createElement("div");
    order.innerHTML = getValues();
    var output = document.getElementById("orderoutput");
    order.setAttribute("id", "order");
    output.appendChild(order);
}
*/
