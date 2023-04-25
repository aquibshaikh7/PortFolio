const firebaseConfig = {
  apiKey: "AIzaSyB1FgH8hCp9UEk1HHgb21j4nvwLm2pVJpw",
  authDomain: "portfolio-990de.firebaseapp.com",
  databaseURL: "https://portfolio-990de-default-rtdb.firebaseio.com",
  projectId: "portfolio-990de",
  storageBucket: "portfolio-990de.appspot.com",
  messagingSenderId: "550409228128",
  appId: "1:550409228128:web:1ecd79bc98047a5df95805",
};

// --------------------------------------------------
// initialise

firebase.initializeApp(firebaseConfig);

// Reference
var portfolioDb = firebase.database().ref("portfolio");
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var mobileno = getElementVal("mobileNo");
  var msgContent = getElementVal("msgContent");

  saveMessage(name, emailid, mobileno, msgContent);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

const saveMessage = (name, emailid, mobileNo, msgContent) => {
  var newContactForm = portfolioDb.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    mobileno: mobileNo,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
