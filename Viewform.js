let submit_button = document.getElementById("submit");
let username = document.getElementById("name");
let age = document.getElementById("age");
let address = document.getElementById("address");

let errorname = document.getElementById("errorname");
let errorage = document.getElementById("errorage");
let erroradd = document.getElementById("erroradd");

const handlesubmit = (e) => {
  e.preventDefault();
  let flagname, flagage, flagaddress;

  ///....handling the name error
  if (username.value == "") {
    errorname.innerHTML = "** name is required";
  } else if (!isNaN(username.value)) {
    errorname.innerHTML = "** only alphabets are allowed ";
  } else if (username.value.length <= 2 || username.value > 20) {
    errorname.innerHTML = "** Name must be character between 3 and 20";
  } else {
    errorname.innerHTML = "";
    flagname = true;
    console.log(username.value);
  }

  ///...handling the age ..//
  if (age.value == "") {
    errorage.innerHTML = "** Age is required";
  } else if (age.value <= 12) {
    errorage.innerHTML = "** Age must be greater than 12";
  } else if (age.value >= 65) {
    errorage.innerHTML = "** Age must be less than 65 ";
  } else {
    errorage.innerHTML = "";
    flagage = true;
    console.log(age.value);
  }

  ///..handling the address...//
  if (address.value == "") {
    erroradd.innerHTML = "** address is required";
  } else if (address.value.length <= 15) {
    erroradd.innerHTML = "** address character must be between 3 and 20";
  } else {
    erroradd.innerHTML = "";
    flagaddress = true;
    console.log(address.value);
  }
  //all input field are correct
  if (flagname === true && flagage === true && flagaddress === true) {
    username.value = "";
    age.value = "";
    address.value = "";
  }
};

submit_button.addEventListener("click", handlesubmit);
