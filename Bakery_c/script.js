
const bakeryInfo = {
  name: "North Star Bakery",
  category: "Fresh Baked Goods",
  message: "Thank you for choosing North Star Bakery!"
};

const bakeryTreats = [
  "Bread",
  "Cookies",
  "Cakes",
  "Pastries"
];

const bakeryChoice = document.getElementById("bakeryChoice");
const saveFavorite = document.getElementById("saveFavorite");
const favoriteMessage = document.getElementById("favoriteMessage");

if (saveFavorite && bakeryChoice && favoriteMessage) {
saveFavorite.addEventListener("click", function () {
  const favorite = bakeryChoice.value;

  
if (!isValidBakeryTreat(favorite)) {


    favoriteMessage.textContent = "Please choose a treat first!";
  } else {
    localStorage.setItem("bakeryFavorite", favorite);
    
favoriteMessage.textContent =
  "Your favorite " + favorite + " has been saved! " + bakeryInfo.message;

  }
});
}

if (bakeryChoice && favoriteMessage) {
const savedFavorite = localStorage.getItem("bakeryFavorite");

if (savedFavorite) {
  bakeryChoice.value = savedFavorite;
  favoriteMessage.textContent =
    "Your saved favorite is " + savedFavorite + "!";
}
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customer-name");
    const email = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    if (!email.validity.valid || email.value.trim() === "") {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (isValid) {
      alert("Your form has been completed successfully!");
    }
  });
}



function getBakeryTreats() {
  return bakeryTreats;
}

function isValidBakeryTreat(treat) {
  return getBakeryTreats().includes(treat);
}
