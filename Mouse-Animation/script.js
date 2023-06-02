let mouse=document.querySelector(".cursor");
var out;
document.addEventListener("mousemove",(e)=>
{
    let x=e.pageX;
    let y=e.pageY;
    console.log(x+" "+y);
    mouse.style.left=x+"px";
    mouse.style.top=y+"px";
    mouse.style.display="block";
    
    
})
document.addEventListener("mouseout",(e)=>
{
    mouse.style.display="none";
})
