
function ans1() {
  var quest1 = document.querySelector("#quest1");
  var ans1 = document.querySelector("#ans1");
  var q1btn = document.querySelector("#Abtn1")
  var hide1 = document.querySelector("#Hide1")

  if (quest1.style.display !== "none") {
    quest1.style.display = "none";
    ans1.style.display = "block";
    q1btn.style.display = "none";
    hide1.style.display = "block";
  }
  else{
    quest1.style.display = "block";
    ans1.style.display = "none";
    q1btn.style.display = "block";
    hide1.style.display = "none";
  }
};
