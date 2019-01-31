var chkbox=document.querySelector("input[type=checkbox]")
chkbox.checked=false;
var redText=document.querySelectorAll(".redText");
document.getElementById('submit').addEventListener('click',signup);
var formElements=document.querySelectorAll('.form-control');
document.body.addEventListener('keyup',function(event){
    if(event.which==13){
        signup();
    }
});

function signup() {
    if(validate()) {
        var formObj={};
        var email = formElements[1].value;
        formObj.name=formElements[0].value;
        formObj.email=email;
        formObj.password=formElements[3].value;
        var ajaxObj=new ajaxWrapper(JSON.stringify(formObj));
        ajaxObj.setMethod("POST");
        ajaxObj.setURL("https://to-do-list-b734d.firebaseio.com/users.json");
        ajaxObj.setLoadingFn(function() {
            document.getElementById('body').innerHTML='<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
        });
        ajaxObj.setRemoveLoadingFn(function() {
            document.getElementById('loading').innerHTML="";
        });
        ajaxObj.setCallback(function(){
            window.location="login.html";
        })
        try {
        ajaxObj.executeCall();
        }
        catch {
            alert('An error occured!');
        }
    }
}

function validate() {
    var flag=true;
    for(var i=0;i<4;i++) {
            redText[i].textContent="";
    }
    if(!/^[A-Za-z\s]+$/.test(formElements[0].value.trim())) {
        redText[0].textContent="Name should only contain alphabets.";
        flag=false;
    }
    if(!/\S+@\S+\.\S+/.test(formElements[1].value.trim())) {
        redText[1].textContent="Enter a valid Email.";
        flag=false;
    }
    if(formElements[2].value.trim()!=formElements[3].value.trim()) {
        redText[3].textContent="Passwords don't match.";
        flag=false;    
    }
    if(chkbox.checked==false) {
        redText[3].textContent="Please accept the Terms and Conditions."; 
        flag=false;
    }
    for(var i=0;i<4;i++) {
        if(formElements[i].value=="") {
            redText[i].textContent="(*)This field is Mandatory.";
            flag=false;
        }
    }
    return flag;
}
