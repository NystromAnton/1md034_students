/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#dots',
  data: {
    orders: {},
    tmpSign: "T",
    tmpDetails: {x: 40,
                 y: 40},
    loc: "0",
    /*tmpLocation: { sign: "A",
                   details: { x: 40,
                              y: 40 }
                 }*/

  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.tmpLocation = data.tmpLocation;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      this.tmpLocation = data.tmpLocation;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      dots.loc = event.clientX - 10 - offset.x;
      dots.tmpSign = dots.loc;
      //dots.tmpSign = "A";
      dots.tmpDetails = {x: event.clientX - 10 - offset.x,
                         y: event.clientY - 10 - offset.y }
      console.log(dots.tmpDetails);
      var target = document.getElementById("target");
      target.innerHTML = dots.tmpSign;
      //dots.tmpDetails.x = event.clientX - 10 - offset.x;
      //dots.tmpDetails.y = event.clientY - 10 - offset.y;
      /*dots.tmpLocation = { sign: "T",
                           details: { x: event.clientX - 10 - offset.x,
                                      y: event.clientY - 10 - offset.y }
                         };*/

      //Lägg till en tmpadress, kolla i index.htlm efter den istället. Inget socket.
    }
  }
});
