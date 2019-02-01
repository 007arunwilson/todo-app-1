/* Ajax Wrapper With Promise implementation */



var ajaxWrapper = function(bodyData){
    this.URL = null;
    this.method = "";
    this.callBackFunction = null;
    this.loadingFunction = null;
    this.removeLoadingFn = null;
    this.body=bodyData;
}
ajaxWrapper.prototype.setMethod = function(method) {
    this.method=method;
}
ajaxWrapper.prototype.setURL= function(URL) {
    this.URL=URL;
}

ajaxWrapper.prototype.setCallback= function(callbackFunction) {
    this.callBackFunction = callbackFunction;
}

ajaxWrapper.prototype.setLoadingFn= function(loadingFn) {
    this.loadingFunction = loadingFn;
}

ajaxWrapper.prototype.setRemoveLoadingFn= function(removeLoadingFn) {
    this.removeLoadingFn = removeLoadingFn;
}

ajaxWrapper.prototype.executeCall= function() {

    var ajaxWrapperInst = this;

    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        //this.callBackFunction();
        //document.getElementById('loading').innerHTML="";
        ajaxWrapperInst.removeLoadingFn();
        ajaxWrapperInst.callBackFunction(this.response);
        //console.log(ajaxWrapperInst);
        //console.log(this.response);
        }
        else {
            ajaxWrapperInst.loadingFunction();
            //document.body.innerHTML='<div id="loading"><img src="../assets/images/loading.gif" alt="loading..." width=80></div>';
        }
        }
        xhttp.open(this.method, this.URL, true);
        xhttp.send(this.body);
}