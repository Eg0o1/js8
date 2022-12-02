let range = document.getElementById("range");
let views = document.getElementById("views");
let dollar = document.getElementById("dollar");
let witch = document.getElementById("witch");
let month = document.getElementById("month");
let pageView = [100, 200, 300, 400, 500];

dollar.innerText = range.value;
views.innerHTML = "500k";

range.oninput = function () {
  dollar.innerText = this.value;

  if (range.value === "1") {
    views.innerHTML = "500k";
  } else if (range.value === "6") {
    views.innerHTML = "600k";
  } else if (range.value === "11") {
    views.innerHTML = "700k";
  } else if (range.value === "16") {
    views.innerHTML = "800k";
  } else if (range.value === "21") {
    views.innerHTML = "900k";
  } else {views.innerHTML = "1m";}
};

witch.onclick = function () {
  this.toggleAttribute("checked");

  if (witch.hasAttribute("checked")) {
    dollar.innerText = range.value * 12;
    month.innerText = "/year";

    range.oninput = function () {
      dollar.innerText = this.value * 12;
      month.innerText = "/year";
    };
  } else {
    month.innerText = "/month";
    dollar.innerText = range.value;
    range.oninput = function () {
      dollar.innerText = this.value;
    };
  }
};
