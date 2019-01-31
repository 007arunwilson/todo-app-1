var chkbox=document.querySelector("input[type=checkbox]")
if(chkbox!=null) {chkbox.checked=false;}
var redText=document.querySelectorAll(".redText");
document.getElementById('login').addEventListener('click',login);
var formElements=document.querySelectorAll('.form-control');
document.body.addEventListener('keyup',function(event){
    if(event.which==13){
        login();
    }
});

function login() {
    if(validate()) {
        var email = formElements[0].value;
        var ajaxObj=new ajaxWrapper();
        ajaxObj.setMethod("GET");
        ajaxObj.setURL('https://to-do-list-b734d.firebaseio.com/users.json?orderBy="email"&equalTo="'+email+'"');
        ajaxObj.setLoadingFn(function() {
            document.getElementById('body').innerHTML='<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=50></div>';
        });
        ajaxObj.setRemoveLoadingFn(function() {
            document.getElementById('loading').innerHTML="";
        });
        ajaxObj.setCallback(function(response){
            response=JSON.parse(response);
            console.log(response);
            var flag=false;
            for(var user in response) {
            if(response[user].email==email) {
                flag=true;
                    if(response[user].password==formElements[1].value){
                        let userObj = {};
                        userObj.email=response[user].email;
                        userObj.name=response[user].name;
                        userObj.firebaseid=user;
                        localStorage.setItem('user',JSON.stringify(userObj));
                        window.location="index.html";
                    }
                    else {
                        alert('password incorrect');
                    }
            }
        }
        if(!flag) {
            alert('user doesnt exist');
        }
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
    for(var i=0;i<2;i++) {
            redText[i].textContent="";
    }
    if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(formElements[0].value.trim())) {
        redText[0].textContent="Enter a valid Email.";
        flag=false;
    }
    for(var i=0;i<2;i++) {
        if(formElements[i].value=="") {
            redText[i].textContent="(*)This field is Mandatory.";
            flag=false;
        }
    }
    return flag;
}
