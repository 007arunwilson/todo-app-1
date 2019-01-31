var li=document.getElementsByTagName("li");
for(var i=0;i<li.length;i++)
{
    li[i].addEventListener("mouseover",function(event){
        let id=event.target.id.split("i")[1];
        let plus= document.getElementById("plus"+id);
        plus.setAttribute("class","hoverPlus");
    });
    li[i].addEventListener("mouseout",function(event){
        let id=event.target.id.split("i")[1];
        let plus= document.getElementById("plus"+id);
        plus.setAttribute("class","plus");
    });
}