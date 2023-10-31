// write your JavaScript here

function setActiveDiv(element) {
  // check if others are active
  var div = document.getElementById("socials-icons").children;
  for (var i = 0; i < div.length; i++) {
    if (div[i].classList.contains("active") && div[i].id != element) {
      div[i].classList.remove("active");
    }
  }
  document.getElementById(element).classList.toggle("active");
}

function copyToClipboard() {
  // Get input field
  var copyText = document.getElementById("copy-input");

  // Select the text field
  copyText.select();

  // Copy the text to clipboard
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
