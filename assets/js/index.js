document.body.onload = userLogged;
var date = new Date();
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// window.onpopstate=function(event) {
//     if(JSON.stringify(event.state)!=null) {
//         window.location.replace('http://127.0.0.1:5500/views/');
//     }
// }

window.addEventListener(
  "popstate",
  function(event) {
    console.log(event);
    if (JSON.stringify(event.state) == null) {
      userLogged();
    } else if (JSON.stringify(event.state) !== null) {
      // history.back();
      // history.pushState(event.state,null,'http://127.0.0.1:5500/views/'+event.state);
      //event.preventDefault();
      if (event.state == "Login" && localStorage.getItem("user") == null) {
        //history.pushState(event.state,null,"");
        history.replaceState("Login", null, "Login");
        loginPage();
        //history.pushState(event.state,null,'http://127.0.0.1:5500/views/'+event.state);
      } else if (event.state == "Signup") {
        //history.pushState(event.state,null,"");
        history.replaceState("Signup", null, "Signup");
        signupPage();
        //history.pushState(event.state,null,'http://127.0.0.1:5500/views/'+event.state);
      } else if (
        event.state == "Home" &&
        localStorage.getItem("user") != null
      ) {
        history.replaceState("Home", null, "Home");
        todoListPage();
      } else if (
        event.state == "Login" &&
        localStorage.getItem("user") != null
      ) {
        history.replaceState("Home", null, "Home");
      } else if (
        event.state == "Home" &&
        localStorage.getItem("user") == null
      ) {
        history.replaceState("Login", null, "Login");
      }
    }
  },
  false
);

function loginPage() {
  // location.hash ="Login";
  document.getElementById("bodyWrapper").innerHTML = "";
  document.getElementById("pageCSS").href = "../assets/css/signup.css";
  var container = document.createElement("div");
  document.getElementById("bodyWrapper").appendChild(container);
  container.setAttribute("id", "container");
  var header = document.createElement("div");
  container.appendChild(header);
  header.setAttribute("id", "header");
  var innerHeader = document.createElement("div");
  header.appendChild(innerHeader);
  innerHeader.setAttribute("class", "innerHeader");
  var logosvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/todoist_logo.svg" class="logo"><path fill="currentColor" fill-rule="evenodd" d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"></path></svg>';
  innerHeader.insertAdjacentHTML("afterbegin", logosvg);
  var logoText = document.createElement("div");
  innerHeader.appendChild(logoText);
  logoText.setAttribute("class", "logoText");
  logoText.textContent = "TodoList";
  var body = document.createElement("div");
  container.appendChild(body);
  body.setAttribute("id", "body");
  var fullForm = document.createElement("div");
  body.appendChild(fullForm);
  fullForm.setAttribute("class", "fullForm");
  var div1 = document.createElement("div");
  fullForm.appendChild(div1);
  var h3 = document.createElement("h3");
  div1.appendChild(h3);
  h3.textContent = "Login";
  var form = document.createElement("form");
  fullForm.appendChild(form);
  form.setAttribute("autocomplete", "off");
  var formElement1 = document.createElement("div");
  form.appendChild(formElement1);
  formElement1.setAttribute("class", "formElements");
  var email = document.createElement("input");
  formElement1.appendChild(email);
  email.setAttribute("id", "email");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "Email");
  email.setAttribute("class", "form-control");
  var emailErrorLabel = document.createElement("label");
  formElement1.appendChild(emailErrorLabel);
  emailErrorLabel.setAttribute("class", "redText");
  var formElement2 = document.createElement("div");
  form.appendChild(formElement2);
  formElement2.setAttribute("class", "formElements");
  var password = document.createElement("input");
  formElement2.appendChild(password);
  password.setAttribute("id", "password");
  password.setAttribute("type", "password");
  password.setAttribute("placeholder", "Password");
  password.setAttribute("class", "form-control");
  var passwordErrorLabel = document.createElement("label");
  formElement2.appendChild(passwordErrorLabel);
  passwordErrorLabel.setAttribute("class", "redText");
  var formElement3 = document.createElement("div");
  form.appendChild(formElement3);
  formElement3.setAttribute("class", "formElements center");
  var loginbtn = document.createElement("button");
  formElement3.appendChild(loginbtn);
  loginbtn.setAttribute("type", "button");
  loginbtn.setAttribute("id", "login");
  loginbtn.setAttribute("class", "btn btn-md btn-danger");
  loginbtn.textContent = "Login";
  var formElement4 = document.createElement("div");
  form.appendChild(formElement4);
  formElement4.setAttribute("class", "formElements center");
  var signupbtn = document.createElement("a");
  signupbtn.textContent = "Don't have an account?";
  signupbtn.setAttribute("href", "javascript:void(0)");
  formElement4.appendChild(signupbtn);
  signupbtn.addEventListener("click", () => {
    history.pushState("Signup", null, "Signup");
    signupPage();
  });

  document.getElementById("login").addEventListener("click", login);

  document.body.addEventListener("keyup", function(event) {
    if (event.which == 13) {
      history.pushState("Login", null, "Login");
      login();
    }
  });

  var chkbox = document.querySelector("input[type=checkbox]");
  if (chkbox != null) {
    chkbox.checked = false;
  }

  var formElements = document.querySelectorAll(".form-control");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("keyup", function() {
      validateLogin(formElements, true);
    });
  }
  // window.onpopstate=function(event) {
  //     if(JSON.stringify(event.state)!=null) {
  //         window.location.replace('http://127.0.0.1:5500/views/');
  //     }
  // }
}

function todoListPage() {
  //location.hash ="Home";
  //history.pushState('home', null, 'Home');
  document.getElementById("bodyWrapper").innerHTML = "";
  var container = document.createElement("div");
  document.getElementById("bodyWrapper").appendChild(container);
  container.setAttribute("id", "container");
  var header = document.createElement("div");
  container.appendChild(header);
  header.setAttribute("id", "header");
  var innerHeader = document.createElement("div");
  header.appendChild(innerHeader);
  innerHeader.setAttribute("class", "innerHeader");
  var logosvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/todoist_logo.svg" class="logo"><path fill="currentColor" fill-rule="evenodd" d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"></path></svg>';
  innerHeader.insertAdjacentHTML("afterbegin", logosvg);
  var logoText = document.createElement("div");
  innerHeader.appendChild(logoText);
  logoText.setAttribute("class", "logoText");
  logoText.textContent = "TodoList";
  var quickFindDiv = document.createElement("div");
  innerHeader.appendChild(quickFindDiv);
  quickFindDiv.setAttribute("class", "quickFindDiv");
  var quickFind = document.createElement("input");
  quickFindDiv.appendChild(quickFind);
  quickFind.setAttribute("id", "qfind");
  quickFind.setAttribute("type", "text");
  quickFind.setAttribute("placeholder", "Quick Find");
  quickFind.setAttribute("class", "quickFind");
  var welcomeSpan = document.createElement("span");
  innerHeader.appendChild(welcomeSpan);
  welcomeSpan.setAttribute("id", "welcome");
  welcomeSpan.textContent = "Welcome ";
  var userName = document.createElement("span");
  welcomeSpan.appendChild(userName);
  userName.setAttribute("id", "user");
  var body = document.createElement("div");
  container.appendChild(body);
  body.setAttribute("id", "body");
  var leftNavBar = document.createElement("div");
  body.appendChild(leftNavBar);
  leftNavBar.setAttribute("class", "leftNavBar");
  var rightNavBar = document.createElement("div");
  body.appendChild(rightNavBar);
  rightNavBar.setAttribute("class", "rightTasks");
  var clear = document.createElement("div");
  body.appendChild(clear);
  clear.setAttribute("class", "clear");
  document.getElementById("pageCSS").href = "../assets/css/index.css";
  document.getElementById("user").innerText = JSON.parse(
    localStorage.getItem("user")
  ).name;
  var qfind = document.getElementById("qfind");
  var welcome = document.getElementById("welcome");

  var logoutbtn = document.createElement("a");
  logoutbtn.textContent = "(logout)";
  logoutbtn.setAttribute("href", "javascript:void(0)");
  document.getElementById("user").appendChild(logoutbtn);
  logoutbtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    history.replaceState("Login", null, "Login");
    loginPage();
  });

  qfind.addEventListener("focus", () => {
    qfind.style.width = "600px";
    qfind.style.border = "1px solid #505050";
    welcome.style.display = "none";
  });
  qfind.addEventListener("blur", function() {
    qfind.style.width = "350px";
    qfind.style.border = "none";
    setTimeout(function() {welcome.style.display = "block" },500);
  });

  allTasks();

  qfind.addEventListener("keyup", searchFilter);

  function searchFilter() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue, hr;
    input = document.getElementById("qfind");
    filter = input.value.toUpperCase();
    ul = document.querySelector("ul");
    li = document.getElementsByTagName("li");
    hr = document.getElementsByTagName("hr");
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length - 1; i++) {
      a = document.querySelectorAll(".eachTaskName");
      txtValue = a[i].textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        hr[i].style.display = "";
      } else {
        li[i].style.display = "none";
        hr[i].style.display = "none";
      }
    }
  }

  // window.onpopstate=function(event) {
  //     if(JSON.stringify(event.state)!=null) {
  //         window.location.replace('http://127.0.0.1:5500/views/');
  //     }
  // }
}

function signupPage() {
  //location.hash ="SignUp";
  document.getElementById("bodyWrapper").innerHTML = "";
  document.getElementById("pageCSS").href = "../assets/css/signup.css";
  var container = document.createElement("div");
  document.getElementById("bodyWrapper").appendChild(container);
  container.setAttribute("id", "container");
  var header = document.createElement("div");
  container.appendChild(header);
  header.setAttribute("id", "header");
  var innerHeader = document.createElement("div");
  header.appendChild(innerHeader);
  innerHeader.setAttribute("class", "innerHeader");
  var logosvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/todoist_logo.svg" class="logo"><path fill="currentColor" fill-rule="evenodd" d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"></path></svg>';
  innerHeader.insertAdjacentHTML("afterbegin", logosvg);
  var logoText = document.createElement("div");
  innerHeader.appendChild(logoText);
  logoText.setAttribute("class", "logoText");
  logoText.textContent = "TodoList";
  var body = document.createElement("div");
  container.appendChild(body);
  body.setAttribute("id", "body");
  var fullForm = document.createElement("div");
  body.appendChild(fullForm);
  fullForm.setAttribute("class", "fullForm");
  var div1 = document.createElement("div");
  fullForm.appendChild(div1);
  var h3 = document.createElement("h3");
  div1.appendChild(h3);
  h3.textContent = "SignUp";
  var form = document.createElement("form");
  fullForm.appendChild(form);
  form.setAttribute("autocomplete", "off");
  var formElement1 = document.createElement("div");
  form.appendChild(formElement1);
  formElement1.setAttribute("class", "formElements");
  var name = document.createElement("input");
  formElement1.appendChild(name);
  name.setAttribute("type", "text");
  name.setAttribute("id", "name");
  name.setAttribute("placeholder", "Your Name");
  name.setAttribute("class", "form-control");
  var nameError = document.createElement("label");
  formElement1.appendChild(nameError);
  nameError.setAttribute("class", "redText");
  var formElement2 = document.createElement("div");
  form.appendChild(formElement2);
  formElement2.setAttribute("class", "formElements");
  var email = document.createElement("input");
  formElement2.appendChild(email);
  email.setAttribute("type", "email");
  email.setAttribute("id", "email");
  email.setAttribute("placeholder", "Your Email");
  email.setAttribute("class", "form-control");
  var emailError = document.createElement("label");
  formElement2.appendChild(emailError);
  emailError.setAttribute("class", "redText");
  var formElement3 = document.createElement("div");
  form.appendChild(formElement3);
  formElement3.setAttribute("class", "formElements");
  var password = document.createElement("input");
  formElement3.appendChild(password);
  password.setAttribute("type", "password");
  password.setAttribute("id", "password");
  password.setAttribute("placeholder", "Your Password");
  password.setAttribute("class", "form-control");
  var passwordError = document.createElement("label");
  formElement3.appendChild(passwordError);
  passwordError.setAttribute("class", "redText");
  var formElement4 = document.createElement("div");
  form.appendChild(formElement4);
  formElement4.setAttribute("class", "formElements");
  var cnfpassword = document.createElement("input");
  formElement4.appendChild(cnfpassword);
  cnfpassword.setAttribute("type", "password");
  cnfpassword.setAttribute("id", "cnfpassword");
  cnfpassword.setAttribute("placeholder", "Confirm Password");
  cnfpassword.setAttribute("class", "form-control");
  var cnfpasswordError = document.createElement("label");
  formElement4.appendChild(cnfpasswordError);
  cnfpasswordError.setAttribute("class", "redText");
  var formElement5 = document.createElement("div");
  form.appendChild(formElement5);
  formElement5.setAttribute("class", "formElements");
  var chklabel = document.createElement("label");
  formElement5.appendChild(chklabel);
  chklabel.setAttribute("class", "container");
  chklabel.textContent = "I accept the Terms And Conditions";
  var chkbox = document.createElement("input");
  chklabel.appendChild(chkbox);
  chkbox.setAttribute("type", "checkbox");
  chkbox.setAttribute("checked", "checked");
  var chkspan = document.createElement("span");
  chklabel.appendChild(chkspan);
  chkspan.setAttribute("class", "checkmark");

  var formElement6 = document.createElement("div");
  form.appendChild(formElement6);
  formElement6.setAttribute("class", "formElements center");
  var signupbtn = document.createElement("button");
  formElement6.appendChild(signupbtn);
  signupbtn.setAttribute("type", "button");
  signupbtn.setAttribute("id", "submit");
  signupbtn.setAttribute("class", "btn btn-md btn-danger");
  signupbtn.textContent = "Sign Up";

  var formElement7 = document.createElement("div");
  form.appendChild(formElement7);
  formElement7.setAttribute("class", "formElements center");
  var loginbtn = document.createElement("a");
  loginbtn.textContent = "Already have an account?";
  loginbtn.setAttribute("href", "javascript:void(0)");
  formElement7.appendChild(loginbtn);
  loginbtn.addEventListener("click", () => {
    history.pushState("Login", null, "Login");
    loginPage();
  });
  var formElements = document.querySelectorAll(".form-control");
  name.addEventListener("keyup", function() {
    validateSignUp(formElements, "name");
  });
  email.addEventListener("keyup", function() {
    validateSignUp(formElements, "email");
  });
  cnfpassword.addEventListener("keyup", function() {
    validateSignUp(formElements, "cnfpass");
  });

  var chkbox = document.querySelector("input[type=checkbox]");
  if (chkbox != null) {
    chkbox.checked = false;
  }

  document.getElementById("submit").addEventListener("click", function(event) {
    history.replaceState("Login", null, "Login");
    signup();
  });

  document.body.addEventListener("keyup", function(event) {
    if (event.which == 13) {
      history.replaceState("Login", null, "Login");
      signup();
    }
  });

  // window.onpopstate=function(event) {
  //     if(JSON.stringify(event.state)!=null) {
  //         window.location.replace('http://127.0.0.1:5500/views/');
  //     }
  // }
}

function ajaxAddTask() {
  var todoObj = {};
  todoObj.firebaseid = JSON.parse(localStorage.getItem("user")).firebaseid;
  todoObj.todo = document.querySelector(".addTaskName").value;
  todoObj.date = document.querySelector("input[type=date]").value;
  var ajaxObj = new ajaxWrapper(JSON.stringify(todoObj));
  ajaxObj.setMethod("POST");
  ajaxObj.setURL("https://to-do-list-b734d.firebaseio.com/todos.json");

  ajaxObj.setLoadingFn(() => {
    document.querySelector(".rightTasks").innerHTML =
      '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
  });
  ajaxObj.setRemoveLoadingFn(() => {
    document.getElementById("loading").innerHTML = "";
  });

  ajaxObj.executeCall().then(() => allTasks());
  document.querySelector(".rightTasks").innerHTML = "";
}

function addTask() {
  var taskEditorDiv = document.createElement("div");
  document.querySelector(".rightTasks").appendChild(taskEditorDiv);
  taskEditorDiv.setAttribute("class", "tasksEditor");
  var div1 = document.createElement("div");
  taskEditorDiv.appendChild(div1);
  var today = document.createElement("a");
  div1.appendChild(today);
  today.setAttribute("href", "#");
  today.setAttribute("class", "whiteColor bigText todayA");
  today.textContent = "Today";
  var smallDate = document.createElement("span");
  div1.appendChild(smallDate);
  smallDate.setAttribute("class", "smallDate");
  smallDate.textContent =
    days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  var ul = document.createElement("ul");
  taskEditorDiv.appendChild(ul);
  var li = document.createElement("li");
  ul.appendChild(li);
  var form = document.createElement("div");
  li.appendChild(form);
  var div2 = document.createElement("div");
  form.appendChild(div2);
  var taskNameinp = document.createElement("input");
  div2.appendChild(taskNameinp);
  taskNameinp.setAttribute("type", "text");
  taskNameinp.setAttribute("class", "addTaskName floatLeft");
  taskNameinp.setAttribute(
    "placeholder",
    "e.g. Read every day p3 @goals #Learning"
  );
  var taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.setAttribute("class", "selectDate smallText floatLeft");
  taskDate.valueAsDate = new Date();
  if (date.getMonth() < 9) {
    taskDate.setAttribute(
      "min",
      date.getFullYear() +
        "-" +
        "0" +
        parseInt(date.getMonth() + 1) +
        "-" +
        date.getDate()
    );
  } else {
    taskDate.setAttribute(
      "min",
      date.getFullYear() +
        "-" +
        parseInt(date.getMonth() + 1) +
        "-" +
        date.getDate()
    );
  }
  div2.appendChild(taskDate);
  var clearDiv = document.createElement("div");
  div2.appendChild(clearDiv);
  clearDiv.setAttribute("class", "clear");
  var addTaskBottom = document.createElement("div");
  form.appendChild(addTaskBottom);
  addTaskBottom.setAttribute("class", "addTaskBottom");
  var submitButton = document.createElement("button");
  addTaskBottom.appendChild(submitButton);
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("class", "btn btn-primary btn-sm btn-danger");
  submitButton.textContent = "Add Task";
  var cancelButton = document.createElement("button");
  addTaskBottom.appendChild(cancelButton);
  cancelButton.setAttribute("class", "btn btn-link cancelbtn smallText");
  cancelButton.textContent = "Cancel";
  var taskBottomicons =
    '<div class="floatRight priority"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-svgs-path="sm1/priority_flag.svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor"><path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z"></path><path fill-rule="nonzero" d="M5 13.51V5.29l.26-.15c.17-.09.46-.21.88-.33 1.62-.47 3.65-.46 6.02.31a11.9 11.9 0 0 0 6.91.15l.21-.06.09-.02.1-.01c.18-.05.18-.05.51.5l.01 8.29-.32.12c-.2.08-.58.2-1.09.31a12.7 12.7 0 0 1-6.74-.33 9.2 9.2 0 0 0-5.43-.3 3.66 3.66 0 0 0-.67.25.5.5 0 0 1-.74-.47.5.5 0 0 1 0-.04zm1.14-.7a10.2 10.2 0 0 1 6.02.31 11.72 11.72 0 0 0 6.83.15V6.32a12.63 12.63 0 0 1-.47.11c-2.08.43-4.34.4-6.68-.36A9.2 9.2 0 0 0 6 5.91v6.94l.14-.04z"></path></g></g></svg></div><div class="floatRight reminders"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/reminder.svg"><path fill="currentColor" fill-rule="evenodd" d="M12 12h3.5a.5.5 0 1 1 0 1H11V9.5a.5.5 0 0 1 1 0V12zm4.58 6.29A6.97 6.97 0 0 1 12 20a6.97 6.97 0 0 1-4.58-1.71l-1.27 1.27a.5.5 0 0 1-.71-.7l1.27-1.28a7 7 0 1 1 10.58 0l1.27 1.27a.5.5 0 0 1-.7.71l-1.28-1.27zM12 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM5.04 9.02l-.71.7-.42-.41a2.5 2.5 0 0 1 0-3.55l.7-.7a2.5 2.5 0 0 1 3.55 0l.36.37-.7.7-.37-.36a1.5 1.5 0 0 0-2.13 0l-.7.7a1.5 1.5 0 0 0 0 2.13l.42.42zm14.63.7l-.7-.7.41-.42a1.5 1.5 0 0 0 0-2.13l-.7-.7a1.5 1.5 0 0 0-2.13 0l-.36.37-.7-.71.36-.37a2.5 2.5 0 0 1 3.54 0l.7.7a2.5 2.5 0 0 1 0 3.55l-.42.41z"></path></svg></div><div class="floatRight project"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-svgs-path="sm1/project.svg"><path fill="currentColor" fill-rule="evenodd" d="M6 8a1 1 0 0 0-1 1v8c0 .5.5 1 1 1h12a1 1 0 0 0 1-1V9c0-.5-.5-1-1-1H6zM4 7c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm3 4h10v1H7v-1zm0 3h10v1H7v-1z"></path></svg></div><div class="clear"></div>';
  addTaskBottom.insertAdjacentHTML("beforeend", taskBottomicons);
  taskNameinp.focus();
  listAllTasks(responseObj);
  cancelButton.addEventListener("click", () => {
    document.querySelector(".rightTasks").innerHTML = "";
    addTaskDiv();
    listAllTasks(responseObj);
  });

  submitButton.addEventListener("click", ajaxAddTask);
  taskNameinp.addEventListener("keyup", event => {
    if (event.keyCode == 13) {
      ajaxAddTask();
    }
  });
}

function userLogged() {
  if (localStorage.getItem("user") != null) {
    history.pushState("Home", null, "Home");
    todoListPage();
  } else {
    history.pushState("Login", null, "Login");
    loginPage();
  }
}

var responseObj;
function allTasks() {
  var ajaxObj = new ajaxWrapper();
  ajaxObj.setMethod("GET");
  ajaxObj.setLoadingFn(() => {
    document.querySelector(".rightTasks").innerHTML =
      '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
  });
  ajaxObj.setRemoveLoadingFn(() => {
    document.getElementById("loading").innerHTML = "";
  });
  let userKey = JSON.parse(localStorage.getItem("user")).firebaseid;
  ajaxObj.setURL(
    `https://to-do-list-b734d.firebaseio.com/todos.json?orderBy="firebaseid"&equalTo="${userKey}"`
  );
  ajaxObj.executeCall().then((response) => {
    localStorage.setItem("tasks", response);
    responseObj = JSON.parse(response);
    console.log(responseObj);
    if (Object.keys(responseObj).length == 0) {
      history.pushState("Home", null, "Home");
      emptyList();
    } else {
      history.pushState("Home", null, "Home");
      addTaskDiv();
      listAllTasks(responseObj);
    }
  });
}

function addTaskDiv() {
  var taskEditorDiv = document.createElement("div");
  document.querySelector(".rightTasks").appendChild(taskEditorDiv);
  taskEditorDiv.setAttribute("class", "tasksEditor");
  var div1 = document.createElement("div");
  taskEditorDiv.appendChild(div1);
  var today = document.createElement("a");
  div1.appendChild(today);
  today.setAttribute("href", "#");
  today.setAttribute("class", "whiteColor bigText todayA");
  today.textContent = "Today";
  var smallDate = document.createElement("span");
  div1.appendChild(smallDate);
  smallDate.setAttribute("class", "smallDate");
  smallDate.textContent =
    days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  var ul = document.createElement("ul");
  taskEditorDiv.appendChild(ul);
  var addTaska = document.createElement("a");
  ul.appendChild(addTaska);
  addTaska.setAttribute("id", "addTasks");
  addTaska.setAttribute("href", "javascript:void(0)");
  var li = document.createElement("li");
  addTaska.appendChild(li);
  li.setAttribute("class", "plussvg");
  var AddTaskdiv = document.createElement("div");
  li.appendChild(AddTaskdiv);
  AddTaskdiv.setAttribute("class", "addTask");
  AddTaskdiv.textContent = "Add Task";
  addTaska.addEventListener("click", addTaskFn);
}

function listAllTasks(responseObj) {
  var taskName = "";
  var dateArray = [],
    keyArray = [],
    i = 0;
  for (var task in responseObj) {
    dateArray[i] = new Date(responseObj[task].date);
    i++;
  }
  dateArray.sort(function(a, b) {
    return b.getTime() - a.getTime();
  });
  dateArray.forEach(function(date) {
    for (var key in responseObj) {
      var eachdate = new Date(responseObj[key].date);
      if (eachdate.getTime() == date.getTime() && keyArray.indexOf(key) == -1) {
        keyArray.push(key);
      }
    }
  });
  keyArray.forEach(function(task) {
    var taskdate = new Date(responseObj[task].date);
    Date.prototype.withoutTime = function () {
        var d = new Date(this);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    taskName = responseObj[task].todo; //or use Object.keys(responseObj) which returns an array of keys and use foreach loop to get the taskName OR use Object.values(responseObj) to get the values as an array but you wont get the index/keys.
    var html =
      '<li id="li:' +
      task +
      '"><label class="container" data-tooltip="Task Done?"><input type="checkbox" id="chk:' +
      task +
      '" checked="checked"><span class="checkmark" style="margin-top: 2px"></span></label><div class="eachTaskPos"><span style="margin-left:30px" id="taskName:' +
      task +
      '" class="eachTaskName" data-tooltip="Edit Task Name?">' +
      taskName +
      '</span><span style="float:right" id="taskDate:' +
      task +
      '" class="eachTaskDate" data-tooltip="Edit Task Date?">' +
      responseObj[task].date +
      '</span><span class="clear"></span><div></li><hr>';
    if (
        new Date().withoutTime() > taskdate.withoutTime()
    ) {
      var html =
        '<li id="li:' +
        task +
        '"><label class="container" data-tooltip="Task Done?"><input type="checkbox" id="chk:' +
        task +
        '" checked="checked"><span class="checkmark" style="margin-top: 2px"></span></label><div class="eachTaskPos"><span style="margin-left:30px" id="taskName:' +
        task +
        '" class="eachTaskName" data-tooltip="Edit Task Name?">' +
        taskName +
        '</span><span style="font-size: 12px; color:red; padding-left:5px">Overdue</span><span style="float:right" id="taskDate+' +
        task +
        '" class="eachTaskDate" data-tooltip="Edit Task Date?">' +
        responseObj[task].date +
        '</span><span class="clear"></span><div></li><hr>';
    }
    else if( 
        new Date().withoutTime() < taskdate.withoutTime()
    ) {
        var html =
        '<li id="li:' +
        task +
        '"><label class="container" data-tooltip="Task Done?"><input type="checkbox" id="chk:' +
        task +
        '" checked="checked"><span class="checkmark" style="margin-top: 2px"></span></label><div class="eachTaskPos"><span style="margin-left:30px" id="taskName:' +
        task +
        '" class="eachTaskName" data-tooltip="Edit Task Name?">' +
        taskName +
        '</span><span style="font-size: 12px; color:green; padding-left:5px">Upcoming</span><span style="float:right" id="taskDate+' +
        task +
        '" class="eachTaskDate" data-tooltip="Edit Task Date?">' +
        responseObj[task].date +
        '</span><span class="clear"></span><div></li><hr>';
    }
    document
      .getElementsByTagName("ul")[0]
      .insertAdjacentHTML("afterbegin", html);
  });
  var eachTask = document.querySelectorAll("input[type=checkbox]");
  for (var i = 0; i < eachTask.length; i++) {
    eachTask[i].checked = false;
    eachTask[i].addEventListener("change", function(event) {
      if (this.checked == true) {
        var ajaxObj = new ajaxWrapper();
        ajaxObj.setMethod("DELETE");
        ajaxObj.setURL(
          `https://to-do-list-b734d.firebaseio.com/todos/${
            event.target.id.split(":")[1]
          }.json`
        );
        ajaxObj.setLoadingFn(() => {
        setTimeOut(function() {
          document.querySelector(".rightTasks").innerHTML =
            '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
        },200);
        });
        ajaxObj.setRemoveLoadingFn(() => {
          document.getElementById("loading").innerHTML = "";
        });
        ajaxObj.executeCall().then(() => allTasks());
      }
    });
  }

  var editTask = document.querySelectorAll(".eachTaskName,.eachTaskDate");
  for (var i = 0; i < editTask.length; i++) {
    editTask[i].addEventListener("click", function(event) {
      var li = document.getElementById(`li:${event.target.id.split(":")[1]}`);
      li.innerHTML = "";
      var form = document.createElement("div");
      li.appendChild(form);
      var div2 = document.createElement("div");
      form.appendChild(div2);
      var taskNameinp = document.createElement("input");
      div2.appendChild(taskNameinp);
      taskNameinp.setAttribute("type", "text");
      taskNameinp.setAttribute("class", "addTaskName floatLeft");
      taskNameinp.setAttribute(
        "placeholder",
        "e.g. Read every day p3 @goals #Learning"
      );
      taskNameinp.setAttribute("id", `in:${event.target.id.split(":")[1]}`);
      // var dateinp=document.createElement('div');
      // div2.appendChild(dateinp);
      // dateinp.setAttribute('class','selectDate smallText floatLeft');
      // dateinp.textContent=date.getDate()+" "+months[date.getMonth()];
      var taskDate = document.createElement("input");
      taskDate.setAttribute("type", "date");
      taskDate.setAttribute("class", "selectDate smallText floatLeft");
      taskDate.valueAsDate = new Date();
      if (date.getMonth() < 9) {
        taskDate.setAttribute(
          "min",
          date.getFullYear() +
            "-" +
            "0" +
            parseInt(date.getMonth() + 1) +
            "-" +
            date.getDate()
        );
      } else {
        taskDate.setAttribute(
          "min",
          date.getFullYear() +
            "-" +
            parseInt(date.getMonth() + 1) +
            "-" +
            date.getDate()
        );
      }
      div2.appendChild(taskDate);
      var clearDiv = document.createElement("div");
      div2.appendChild(clearDiv);
      clearDiv.setAttribute("class", "clear");
      var addTaskBottom = document.createElement("div");
      form.appendChild(addTaskBottom);
      addTaskBottom.setAttribute("class", "addTaskBottom");
      var submitButton = document.createElement("button");
      addTaskBottom.appendChild(submitButton);
      submitButton.setAttribute("type", "button");
      submitButton.setAttribute("class", "btn btn-primary btn-sm btn-danger");
      submitButton.setAttribute("id", `btn:${event.target.id.split(":")[1]}`);
      submitButton.textContent = "Save";
      var cancelButton = document.createElement("button");
      addTaskBottom.appendChild(cancelButton);
      cancelButton.setAttribute("class", "btn btn-link cancelbtn smallText");
      cancelButton.textContent = "Cancel";
      var taskBottomicons =
        '<div class="floatRight priority"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-svgs-path="sm1/priority_flag.svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor"><path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z"></path><path fill-rule="nonzero" d="M5 13.51V5.29l.26-.15c.17-.09.46-.21.88-.33 1.62-.47 3.65-.46 6.02.31a11.9 11.9 0 0 0 6.91.15l.21-.06.09-.02.1-.01c.18-.05.18-.05.51.5l.01 8.29-.32.12c-.2.08-.58.2-1.09.31a12.7 12.7 0 0 1-6.74-.33 9.2 9.2 0 0 0-5.43-.3 3.66 3.66 0 0 0-.67.25.5.5 0 0 1-.74-.47.5.5 0 0 1 0-.04zm1.14-.7a10.2 10.2 0 0 1 6.02.31 11.72 11.72 0 0 0 6.83.15V6.32a12.63 12.63 0 0 1-.47.11c-2.08.43-4.34.4-6.68-.36A9.2 9.2 0 0 0 6 5.91v6.94l.14-.04z"></path></g></g></svg></div><div class="floatRight reminders"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/reminder.svg"><path fill="currentColor" fill-rule="evenodd" d="M12 12h3.5a.5.5 0 1 1 0 1H11V9.5a.5.5 0 0 1 1 0V12zm4.58 6.29A6.97 6.97 0 0 1 12 20a6.97 6.97 0 0 1-4.58-1.71l-1.27 1.27a.5.5 0 0 1-.71-.7l1.27-1.28a7 7 0 1 1 10.58 0l1.27 1.27a.5.5 0 0 1-.7.71l-1.28-1.27zM12 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM5.04 9.02l-.71.7-.42-.41a2.5 2.5 0 0 1 0-3.55l.7-.7a2.5 2.5 0 0 1 3.55 0l.36.37-.7.7-.37-.36a1.5 1.5 0 0 0-2.13 0l-.7.7a1.5 1.5 0 0 0 0 2.13l.42.42zm14.63.7l-.7-.7.41-.42a1.5 1.5 0 0 0 0-2.13l-.7-.7a1.5 1.5 0 0 0-2.13 0l-.36.37-.7-.71.36-.37a2.5 2.5 0 0 1 3.54 0l.7.7a2.5 2.5 0 0 1 0 3.55l-.42.41z"></path></svg></div><div class="floatRight project"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-svgs-path="sm1/project.svg"><path fill="currentColor" fill-rule="evenodd" d="M6 8a1 1 0 0 0-1 1v8c0 .5.5 1 1 1h12a1 1 0 0 0 1-1V9c0-.5-.5-1-1-1H6zM4 7c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm3 4h10v1H7v-1zm0 3h10v1H7v-1z"></path></svg></div><div class="clear"></div>';
      addTaskBottom.insertAdjacentHTML("beforeend", taskBottomicons);
      taskNameinp.value = responseObj[event.target.id.split(":")[1]].todo;
      taskNameinp.focus();
      submitButton.addEventListener("click", ajaxEditTask);
      taskNameinp.addEventListener("keyup", function(event) {
        if (event.which == 13) {
          ajaxEditTask(event);
        }
      });
      function ajaxEditTask(event) {
        var todoObj = {};
        todoObj.firebaseid = JSON.parse(
          localStorage.getItem("user")
        ).firebaseid;
        var newTaskName = document.querySelector(".addTaskName").value;
        if (newTaskName == "") {
          todoObj.todo = responseObj[event.target.id.split(":")[1]].todo;
        } else {
          todoObj.todo = document.querySelector(".addTaskName").value;
        }
        todoObj.date = document.querySelector("input[type=date]").value;
        var ajaxObj = new ajaxWrapper(JSON.stringify(todoObj));
        ajaxObj.setMethod("PATCH");
        ajaxObj.setURL(
          "https://to-do-list-b734d.firebaseio.com/todos/" +
            event.target.id.split(":")[1] +
            ".json"
        );

        ajaxObj.setLoadingFn(() => {
          document.querySelector(".rightTasks").innerHTML =
            '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
        });
        ajaxObj.setRemoveLoadingFn(() => {
          document.getElementById("loading").innerHTML = "";
        });
        ajaxObj.executeCall().then(() => allTasks());
        document.querySelector(".rightTasks").innerHTML = "";
      }

      cancelButton.addEventListener("click", () => {
        document.querySelector(".rightTasks").innerHTML = "";
        addTaskDiv();
        listAllTasks(responseObj);
      });
    });
  }
}

function emptyList() {
  addTaskDiv();
  var emptyListDiv = document.createElement("div");
  document.querySelector(".rightTasks").appendChild(emptyListDiv);
  emptyListDiv.setAttribute("class", "emptyList");
  var svg =
    '<svg data-svgs-path="theme_dark/project_zero.svg" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><g transform="translate(-2800 -240)"><g id="ProjectNew"><path fill="none" d="M1800-100h300v300h-300z" transform="matrix(.73333 0 0 .66667 1480 306.667)"></path><path d="M19249.7 1267h-50v60.8l50 9.74V1267z" fill="#404040" stroke="#404040" stroke-width="3.2" transform="matrix(.07647 0 -.2183 -.8732 1784.795 1497.148)"></path><path d="M19249.7 1267h-50v82.69" fill="none" stroke="#404040" stroke-width="2.24" stroke-linejoin="miter" transform="matrix(1.13552 0 -.21699 .86796 -18612.74 -811.212)"></path><path d="M19200.3 1283.96c-6.3.23-7.9.54-8.3 1.4v64.61c.6 1.17 14.7.95 15.5-.55v-64.61c-.5-.8-1.3-.93-7.2-.85zM19250.3 1265.88c-6.3.23-7.9.53-8.3 1.4v66.62c.6 1.16 14.7.95 15.5-.55v-66.62c-.5-.8-1.3-.93-7.2-.85z" fill="#404040" fill-rule="nonzero" transform="matrix(-.1332 0 -.22039 .88155 5812.674 -832.598)"></path><path fill="#404040" d="M19199.7 1267h50v82.695h-50z" transform="matrix(-1.33455 0 .01261 -.05045 28582.064 352.417)"></path><path d="M19199.8 1369.29c-.6-3.68-.8-9.2-.8-24.4v-82.7c0-12.86.1-14.08.5-15.01h50c.8 1.52 1 15.99 1 24.63v82.69c0 12.86-.1 14.09-.6 15.02h-50c0-.08-.1-.15-.1-.23zm49.2-39.42v-43.05h-48.5v43.05h48.5z" fill="#404040" fill-rule="nonzero" transform="matrix(-1.33455 0 .01261 -.05045 28582.064 352.417)"></path><path fill="#404040" stroke="#404040" stroke-width="6.66" d="M19199.7 1267h50v82.695h-50z" transform="matrix(-.07647 0 .10594 -.42378 4277.86 824.587)"></path><path fill="#404040" stroke="#404040" stroke-width="6.56" d="M19199.7 1267h50v82.695h-50z" transform="matrix(-.07647 0 .10754 -.43017 4269.21 935.737)"></path><path d="M16552.5 1390h52.7" fill="#fff" transform="matrix(.42129 0 0 .42129 -4046.398 -194.795)"></path><path d="M16605.4 1387.64c4.6.64 2 4.63-.2 4.73h-52.7c-4.5-.21-2.6-4.62 0-4.74 17.6 0 35.3-.81 52.9.01z" fill="#404040" fill-rule="nonzero" transform="matrix(.42129 0 0 .42129 -4046.398 -194.795)"></path><path d="M16552.5 1390h95" fill="#fff" transform="matrix(.42129 0 0 .42129 -4010.738 -194.795)"></path><path d="M16647.8 1387.64c4.4.84 1.9 4.6-.3 4.73h-95c-2.5-.15-3.6-4.52 0-4.74h95c.1 0 .2.01.3.01z" fill="#404040" fill-rule="nonzero" transform="matrix(.42129 0 0 .42129 -4010.738 -194.795)"></path><path d="M16003 624.294c-7.6 8.064-9.1 23.123-3.8 32.949" fill="none" stroke="#797979" stroke-width="1.94" transform="matrix(1.14978 0 0 .89148 -15565.633 -208.494)"></path><path d="M19262.4 1267h-62.7v82.69h66.8l-4.1-82.69z" fill="#404040" transform="matrix(-.85107 0 .01261 -.05045 19281.444 421.147)"></path><path d="M19199.9 1369.32c-.8-2.41-1.3-9.25-1.4-24.43v-82.7c.1-12.86.2-14.08.9-15.01h62.7c.7.84.9 4.13 1.2 9.84l4.1 82.7c.6 13.19.3 28.66-.6 29.8h-66.8c0-.07-.1-.13-.1-.2zm64.3-39.45l-2.1-43.05h-61.2v43.05h63.3z" fill="#404040" fill-rule="nonzero" transform="matrix(-.85107 0 .01261 -.05045 19281.444 421.147)"></path><path d="M19245.2 1314.42c1.8 1.05 14.9.67 15.4-.73l-6.3-52.75c-.7-1.13-14.8-1.14-15.5.59l6.3 52.74c0 .05.1.1.1.15z" fill="#797979" fill-rule="nonzero" transform="matrix(.03447 .12866 .90855 -.01528 1104.478 -2103.974)"></path><path d="M19246.3 1323.23c1.8 1 14.8.64 15.3-.75l-7.3-61.54c-.7-1.15-14.9-.84-15.5.59l7.3 61.54c.1.05.1.1.2.16z" fill="#797979" fill-rule="nonzero" transform="matrix(.03447 .12866 .90855 -.01528 1094.671 -2168.354)"></path><path d="M19265.2 1097.4c1.4-2.57 2.2-5.57 3.5-8.18" fill="none" stroke="#797979" stroke-width="2" transform="matrix(.95795 0 0 1.03606 -15481.433 -868.863)"></path><path d="M19286.3 1102.52c1.1.08 1.3 1.47.1 1.96-2.2.95-3.9 3.03-6.3 3.56-.1.03-.3.04-.4.02-.1-.02-.3-.07-.4-.13-.7-.41-.5-1.42.4-1.82 2.3-.95 3.9-3.04 6.3-3.56.1-.02.1-.03.3-.03zM19277.7 1127.04c.5.05 1.1.36 1.6.57 2.7.95 6.1 1.67 6.5 2.64.4.91-.6 1.5-2.7.75-2.7-.95-6.2-1.7-6.5-2.71-.2-.61.2-1.28 1.1-1.25z" fill="#797979" fill-rule="nonzero" transform="matrix(.95795 0 0 1.03606 -15481.433 -868.863)"></path><path d="M19167.2 1070.73c-.6 3.88-.9 7.8-1.3 11.7M19159.8 1076.51c4.4-.23 8.8-.55 13.2-.5" fill="none" stroke="#404040" stroke-width="3.54" transform="matrix(.56424 0 0 .56423 -7914.567 -339.462)"></path><path d="M19167.3 1068.96c3.2.22 1 8.15.4 13.67-.4 2.21-3.8 2.26-3.3-2.58.5-4.78 0-11.14 2.9-11.09z" fill="#404040" fill-rule="nonzero" transform="matrix(.56424 0 0 .56423 -7824.656 -277.755)"></path><path d="M19172.6 1074.23c2.3.02 3.3 3.52-1.2 3.55-4.8.05-11.1 1.33-12.6.14-1.4-1.04-.6-3.09 2.6-3.27 3.7-.21 7.4-.43 11.2-.42z" fill="#404040" fill-rule="nonzero" transform="matrix(.56424 0 0 .56423 -7824.656 -277.755)"></path><path d="M19167.2 1070.73c-.6 3.88-.9 7.8-1.3 11.7M19159.8 1076.51c4.4-.23 8.8-.55 13.2-.5" fill="none" stroke="#404040" stroke-width="3.54" transform="matrix(.56424 0 0 .56423 -7994.157 -297.504)"></path><g transform="translate(-14492.231 -834.45) scale(.90071)"><path d="M19276.9 1295l-2.9 11.86-7.4 3.34s-27.7 6.81-33.5 51.1h21.7l6.3-19.44 4.2 18.98 41.9 1.29-23-67.13h-7.3z" fill="#797979"></path><clipPath id="_clip1"><path d="M19276.9 1295l-2.9 11.86-7.4 3.34s-27.7 6.81-33.5 51.1h21.7l6.3-19.44 4.2 18.98 41.9 1.29-23-67.13h-7.3z"></path></clipPath><g clip-path="url(#_clip1)"><path fill="#bcbcbc" d="M16017.8 601h47v19h-47z" transform="matrix(.98975 0 0 1.08891 3394.58 632.633)"></path></g></g><path d="M19295.2 1306.61c-.2-.47-.1-.98.2-1.38.3-.41.7-.65 1.2-.64 3.7.02 10.8.07 10.8.07 10.9 17.48 28.7 27.88 28.3 44.64-.4 18.31-18 18-18 18s-18.5-49.92-22.5-60.69z" fill="#797979" transform="matrix(.85845 0 0 .85845 -13676.33 -776.881)"></path><g transform="matrix(0 -.85845 .85845 0 1711.975 16981.555)"><path d="M19291.7 1372.3c-.1 10.6-8.8 12.98-7.7 24.55.9 8.77 9 17.03 20.7 17.45 19.5.7 27.6-13.14 27-26-.3-7.76-3-14.23-6.5-19.41v7.49c0 3.9-2.5 7.34-6.3 8.43 2.3-3.87 2-9.12 2-9.12-1.6 2.67-5.6 7.9-10.9 9.4-1.7.49-4.8-.31-5.8-2.46-1.1-2.29-.9-5.51 1.1-7.58 4.8-5 7.6-9.54 7.2-16.74-8-2.64-20.6-1.96-20.8 13.99z" fill="#404040"></path><clipPath id="_clip2"><path d="M19291.7 1372.3c-.1 10.6-8.8 12.98-7.7 24.55.9 8.77 9 17.03 20.7 17.45 19.5.7 27.6-13.14 27-26-.3-7.76-3-14.23-6.5-19.41v7.49c0 3.9-2.5 7.34-6.3 8.43 2.3-3.87 2-9.12 2-9.12-1.6 2.67-5.6 7.9-10.9 9.4-1.7.49-4.8-.31-5.8-2.46-1.1-2.29-.9-5.51 1.1-7.58 4.8-5 7.6-9.54 7.2-16.74-8-2.64-20.6-1.96-20.8 13.99z"></path></clipPath><g clip-path="url(#_clip2)"><path d="M16099.6 679.265c2.4 0 4.2 2.639 4.2 4.985 0 2.346-1.9 4.25-4.2 4.25-2.4 0-4.3-1.904-4.3-4.25s2-4.985 4.3-4.985z" fill="#797979" transform="matrix(-.28842 .97029 -.92651 -.2754 24572.3 -14047.1)"></path><path d="M16099.6 679.265c2.4 0 4.2 2.639 4.2 4.985 0 2.346-1.9 4.25-4.2 4.25-2.4 0-4.3-1.904-4.3-4.25s2-4.985 4.3-4.985z" fill="#fff" transform="matrix(-.28842 .97029 -.92651 -.2754 24599.2 -14038.7)"></path><path d="M16099.6 679.265c2.4 0 4.2 2.639 4.2 4.985 0 2.346-1.9 4.25-4.2 4.25-2.4 0-4.3-1.904-4.3-4.25s2-4.985 4.3-4.985z" fill="#fff" transform="matrix(-.32435 1.09119 -1.04196 -.30972 25246.8 -15951)"></path></g><path d="M19291.7 1372.3c-.1 10.6-8.8 12.98-7.7 24.55.9 8.77 9 17.03 20.7 17.45 19.5.7 27.6-13.14 27-26-.3-7.76-3-14.23-6.5-19.41v7.49c0 3.9-2.5 7.34-6.3 8.43 0 0 0 0 0 0 2.3-3.87 2-9.12 2-9.12-1.6 2.67-5.6 7.9-10.9 9.4-1.7.49-4.8-.31-5.8-2.46-1.1-2.29-.9-5.51 1.1-7.58 4.8-5 7.6-9.54 7.2-16.74-8-2.64-20.6-1.96-20.8 13.99z" fill="none" stroke="#404040" stroke-width="2.33"></path></g><path d="M16107.3 700.521c-1.2-.843-2.8-.789-3.9.132-.3.161-.6.347-.6.347-3.4 3.002-.9 9.41 3.1 8.522 3.2-.702 4.9-5.184 2.6-7.863-.3-.454-.7-.83-1.2-1.138z" fill="#fff" transform="matrix(.97753 -.51297 .51297 .97753 -13190.728 7988.74)"></path><path d="M19470.3 1352.95h52.7s7.1.23 12.4.41c3.5.12 6.6 2.35 7.8 5.65.3.95.6 1.65.6 1.65" fill="none" stroke="#797979" stroke-width="2.12" transform="translate(-15499.133 -882.078) scale(.9415)"></path><path d="M16068.8 683.026c6.5 1.439 12.1 7.636 13.9 11.287" fill="none" stroke="#bcbcbc" stroke-width="2.22" transform="matrix(.89465 0 0 .9083 -11491.324 -220.686)"></path><path d="M16068.7 683.395c6.5 1.439 12.1 7.636 13.8 11.287" fill="none" stroke="#bcbcbc" stroke-width="1.88" transform="matrix(.95306 0 0 1.1624 -12427.227 -397.535)"></path><path d="M16068.9 683.279c6.5 1.439 12.1 7.636 13.8 11.287" fill="none" stroke="#bcbcbc" stroke-width="2.07" transform="matrix(.85407 0 0 1.06841 -10833.823 -335.455)"></path><path d="M19274.4 1304.12c-3.6.35-8.1 1.92-11.6 3.5-5.1 2.4-18.9 9.99-25.4 25.53-6.8 15.95-9.5 33.38-5.7 42.15 3.3 7.32 13 6.68 19 5.5 4.4-.86 25.8-7.04 34.9-6.79 4.1.11 9.2 1.35 16 8.5" fill="none" stroke="#bcbcbc" stroke-width="2.33" transform="matrix(.86182 0 0 .8537 -13741.13 -770.678)"></path><path d="M16058.9 653.508c-.4 5.37-2 10.503-5.9 14.712" fill="none" stroke="#fff" stroke-width="1.92" transform="matrix(1.1425 0 0 .9299 -15464.433 -236.626)"></path><path d="M19538.1 1258.3c2 8.28-.1 14.71-4.9 19.81" fill="none" stroke="#797979" stroke-width="2.66" transform="matrix(.7015 0 0 .80046 -10814.023 -694.515)"></path><path d="M19529.2 1271.24c-3.3 3.35-3.7 6.53-.7 12.37 1.5 2.95 3.2 7.03 5.6 12.69" fill="none" stroke="#797979" stroke-width="2.4" transform="matrix(.83438 0 0 .83438 -13410.529 -737.193)"></path><path d="M19160.4 1277.9c.2 6.19-4.2 11.55-10.3 12.49-.7.1-1.2.48-1.5 1.03-.3.56-.4 1.22-.1 1.81 1.6 3.71 6 7.85 12.6 5.02 7-2.99 4.9-15.42-.7-20.78v.43z" fill="#797979" transform="matrix(1.49043 .00256 -.00256 1.49043 -25673.656 -1657.511)"></path><path d="M16022.3 611.33l36.8-31.33" fill="none" stroke="#fff" stroke-width="4.62" transform="matrix(.52844 0 0 .31016 -5585.881 133.434)"></path><path d="M16107.3 535s-8.5 11.9-8.5 17c0 3.863 3.9 7 8.5 7 4.7 0 8.5-3.137 8.5-7 0-5.1-8.5-17-8.5-17z" fill="#fff" transform="matrix(.1581 .47606 -.57807 .19198 679.295 -7463.167)"></path><path d="M19504.3 1271.6c-5 16.25-26 20.96-37.3 31.4-12 11.16-16.1 29.79-4.5 42.37" fill="none" stroke="#797979" stroke-width="2.4" transform="matrix(.83438 0 0 .83438 -13416.929 -747.808)"></path><path d="M19520.3 1259.31s-.4 1.41-.1 2.67" fill="none" stroke="#fff" stroke-width="2.3" transform="matrix(.83438 .06975 0 .83438 -13411.429 -2098.014)"></path><path d="M19519.9 1259.48s0 1.24.3 2.5" fill="none" stroke="#fff" stroke-width="2.4" transform="matrix(.82411 .13052 -.13052 .8241 -13036.928 -3274.295)"></path><path d="M19145 1118.21c3.3 1.78 1.2 4.03 1.2 10.1 0 6.07 2.2 10-1.2 11.9-3.9 2.15-7.3-4.92-7.3-10.99s3.9-12.87 7.3-11.01z" fill="#fff" transform="matrix(1.2025 .78234 -.78234 1.2025 -19277.242 -16032.061)"></path><path d="M19139.2 1117.24c2.6 1.58 5.1 3.31 7.2 5.55" fill="none" stroke="#fff" stroke-width="2.76" stroke-linejoin="miter" transform="matrix(.69429 -.15995 .16558 .71874 -10624.623 2555.238)"></path><path d="M19538 1284c4 6.06 7.7 12.23 11.9 18.18" fill="none" stroke="#797979" stroke-width="2.4" transform="translate(-13410.829 -737.216) scale(.83438)"></path><path d="M19523.9 1259.19c.4 3.27 1.5 4.98 4.7 6.38l-4.5 2.39" fill="none" stroke="#fff" stroke-width="2.4" transform="translate(-13409.429 -738.51) scale(.83438)"></path><path d="M19504.3 1258.42c6.1-4.33 10.8-9.66 13.3-16.92" fill="none" stroke="#797979" stroke-width="2.4" transform="translate(-13409.029 -736.584) scale(.83438)"></path></g></g></svg>';
  emptyListDiv.insertAdjacentHTML("afterbegin", svg);
  var div2 = document.createElement("div");
  emptyListDiv.appendChild(div2);
  div2.textContent = "What Will You Do Today?";
  var svgAddTaskbtn = document.createElement("button");
  emptyListDiv.appendChild(svgAddTaskbtn);
  svgAddTaskbtn.setAttribute("class", "btn btn-primary btn-sm btn-danger");
  svgAddTaskbtn.textContent = "Add Task";
  svgAddTaskbtn.addEventListener("click", addTaskFn);
}

function addTaskFn() {
  document.querySelector(".rightTasks").innerHTML = "";
  addTask();
}

///////////LOGIN JS///////////

function login() {
  var formElements = document.querySelectorAll(".form-control");
  if (validateLogin(formElements, false)) {
    var email = formElements[0].value;
    var ajaxObj = new ajaxWrapper();
    ajaxObj.setMethod("GET");
    ajaxObj.setURL('https://to-do-list-b734d.firebaseio.com/users.json?orderBy="email"&equalTo="' +email +'"');
    ajaxObj.setLoadingFn(function() {
      document.getElementById("bodyWrapper").innerHTML =
        '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
    });
    ajaxObj.setRemoveLoadingFn(function() {
      document.getElementById("loading").innerHTML = "";
    });

    ajaxObj.executeCall().then(response => {
      response = JSON.parse(response);
      console.log(response);
      var flag = false;
      for (var user in response) {
        if (response[user].email == email) {
          flag = true;
          if (response[user].password == formElements[1].value) {
            let userObj = {};
            userObj.email = response[user].email;
            userObj.name = response[user].name;
            userObj.firebaseid = user;
            localStorage.setItem("user", JSON.stringify(userObj));
            todoListPage();
          } else {
            loginPage();
            document.querySelectorAll(".redText")[1].textContent =
              "Email or Password Is Incorrect";
          }
        }
      }
      if (!flag) {
        loginPage();
        document.querySelectorAll(".redText")[1].textContent =
          "Email or Password Is Incorrect";
      }

    }).catch(error=>{

        console.log(error);

    });

    //try {
    // ajaxObj.executeCall();
    // }
    // catch {
    //     console.log('Error AT LOGIN');
    // }
  }
}

function validateLogin(formElements, keyup) {
  var redText = document.querySelectorAll(".redText");
  var flag = true;
  for (var i = 0; i < 2; i++) {
    redText[i].textContent = "";
  }
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      formElements[0].value.trim()
    )
  ) {
    redText[0].textContent = "Enter a valid Email.";
    flag = false;
    if (keyup == true) {
      return;
    }
  }
  if (keyup == false) {
    for (var i = 0; i < 2; i++) {
      if (formElements[i].value == "") {
        redText[i].textContent = "(*)This field is Mandatory.";
        flag = false;
      }
    }
  }
  return flag;
}

/////////SIGNUP JS////////////

function signup() {
  var formElements = document.querySelectorAll(".form-control");
  if (validateSignUp(formElements, "none")) {
    var formObj = {};
    var email = formElements[1].value;
    formObj.name = formElements[0].value;
    formObj.email = email;
    formObj.password = formElements[3].value;
    var ajaxObj = new ajaxWrapper(JSON.stringify(formObj));
    ajaxObj.setMethod("POST");
    ajaxObj.setURL("https://to-do-list-b734d.firebaseio.com/users.json");
    ajaxObj.setLoadingFn(function() {
      document.getElementById("body").innerHTML =
        '<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
    });
    ajaxObj.setRemoveLoadingFn(function() {
      document.getElementById("loading").innerHTML = "";
    });
    try {
      ajaxObj.executeCall().then(() => loginPage());
    } catch {
      alert("An error occured!");
    }
  }
}

function validateSignUp(formElements, keyup) {
  var redText = document.querySelectorAll(".redText");
  var chkbox = document.querySelector("input[type=checkbox]");
  var flag = true;
  for (var i = 0; i < 4; i++) {
    redText[i].textContent = "";
  }
  if (
    !/^[A-Za-z\s]+$/.test(formElements[0].value.trim()) &&
    (keyup == "name" || keyup == "none")
  ) {
    redText[0].textContent = "Name should only contain alphabets.";
    flag = false;
  }
  if (
    !/\S+@\S+\.\S+/.test(formElements[1].value.trim()) &&
    (keyup == "email" || keyup == "none")
  ) {
    redText[1].textContent = "Enter a valid Email.";
    flag = false;
  }
  if (
    formElements[2].value.trim() != formElements[3].value.trim() &&
    (keyup == "cnfpass" || keyup == "none")
  ) {
    redText[3].textContent = "Passwords don't match.";
    flag = false;
  }
  if (keyup == "none") {
    if (chkbox.checked == false) {
      redText[3].textContent = "Please accept the Terms and Conditions.";
      flag = false;
    }
    for (var i = 0; i < 4; i++) {
      if (formElements[i].value == "") {
        redText[i].textContent = "(*)This field is Mandatory.";
        flag = false;
      }
    }
  }
  return flag;
}
