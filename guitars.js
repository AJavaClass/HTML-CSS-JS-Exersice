"use strict";

function changeList(){
  var list = document.getElementById("guitars");
  var model = list.options[list.selectedIndex].id;
  var colorlist = document.getElementById("guitarcolors");

  var items;
  if (model == "stratocaster") {
    items = ["Black", "Brown", "Yellow"];
  } else {
    items = ["Brown", "Green", "Orange", "Yellow"]
  }
  var str = ""
  for (var item of items) {
    str += "<option value=" + item.toLowerCase() + ">" + item + "</option>"
  }
  colorlist.innerHTML = str;
}

function changeModel(){
  var list = document.getElementById("guitars");
  var model = list.options[list.selectedIndex];
  document.getElementById("pricelabel").innerHTML = model.value + "€";
}

changeModel()

changeList()

document.getElementById("guitars").addEventListener("change", () => {
     changeModel();
     changeList();
});
