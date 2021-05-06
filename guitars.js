"use strict";

function changeList(){
  var list = document.getElementById("guitars");
  var model = list.options[list.selectedIndex].id;
  var colorlist = document.getElementById("guitarcolors");

  var items;
  if (model == "stra") {
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
  document.getElementById("guitarpricelabel").innerHTML = parseInt(model.value) + "€";
  return model.value;
}

function changeCombo(){
  var combolist = document.getElementById("guitarbundles");
  var combo = combolist.options[combolist.selectedIndex];
  document.getElementById("combopricelabel").innerHTML = parseInt(combo.value) + "€";
}

function changeImage(){
  var guitarslist = document.getElementById("guitars");
  var model = guitarslist.options[guitarslist.selectedIndex].id;
  var color = document.getElementById("guitarcolors").value;
  var image = document.getElementById("guitarimage");
  var combolist = document.getElementById("guitarbundles");
  var combo = combolist.options[combolist.selectedIndex].id;

  if(combo == "nocombo"){
    image.src = "Pictures/Guitars/" + model + "_" + color + ".png";
  }
  else if(combo == "amp"){
    image.src = "Pictures/Bundle Guitars/" + model + "_" + color + ".png";
  }
  else{
    image.src = "Pictures/Bundle Guitars Case/" + model + "_" + color + ".png";
  }

}

function calculateTotal(){
  var guitarprice = document.getElementById("guitars").value;
  var comboprice = document.getElementById("guitarbundles").value;
  document.getElementById("totalpricelabel").innerHTML = parseInt(guitarprice) + parseInt(comboprice) + "€";
}

changeModel();
changeList();
changeCombo();
changeImage();
calculateTotal();

document.getElementById("guitars").addEventListener("change", () => {
     changeModel();
     changeList();
     changeCombo();
     changeImage();
     calculateTotal();
});

document.getElementById("guitarcolors").addEventListener("change", () => {
     changeImage();
});

document.getElementById("guitarbundles").addEventListener("change", () => {
    changeCombo();
    changeImage();
    calculateTotal();
});

document.getElementById('calcbutton').addEventListener("click", () => {
    calculateTotal();
});
