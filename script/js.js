function animation()
{
    const cloud1 = document.getElementById("cloud1");   
    var x=document.getElementById("cloud1").style.left;
    var y=document.getElementById("cloud1").style.top;
    var angle=0;
    var id = setInterval(animate, 1000);
    function animate(){
        if(x==0)
            clearInterval(id);
        else{
            x--;
            cloud1.style.left = pos + "px";
        }
    }
}