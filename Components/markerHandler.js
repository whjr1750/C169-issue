const { SwipeableListView } = require("react-native");

AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      console.log("marker found");
      this.handleMarkerFound();
    });
    this.el.addEventListener("markerLost", () => {
      console.log("marker lost");
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";
    var ratingButton = document.getElementById("rating-button");
    var orderButton = document.getElementById("order-button");
    ratingButton.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Rate Dish",
        text: "WORK IN PROGRESS",
      });
    });
    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6ULY.jpg",
        title: "THANKS FOR ORDERING",
        text: "YOUR ORDER WILL SOON BE SERVED",
      });
    });
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
