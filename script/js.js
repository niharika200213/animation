function animation()
{
    setTimeout(animateCloud1,100);
    setTimeout(animateCloud2,100);
    setTimeout(animateCloud3,100);
    setTimeout(animateGhost1,100);
    setTimeout(animateGhost2,100);
    setTimeout(animateGhost3,100);
    setTimeout(stars,100);
    setTimeout(bg,100);
}

function animateCloud1()
{
    const cloud1 = document.getElementById("cloud1");   
    var rect=cloud1.getBoundingClientRect();
    var y=rect.top;
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 4);
    function animate(){
        if(x==-rect.width)
            x=window.innerWidth;
        else{
            x--;
            y=Math.round(20 * Math.sin(angle));
            angle += .01;
            document.getElementById("cloud1").style.left=x+"px";
            document.getElementById("cloud1").style.top=y+"px";
        }
    }
}

function animateCloud2()
{
    const cloud2 = document.getElementById("cloud2");   
    var rect=cloud2.getBoundingClientRect();
    var y=rect.top;
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 1);
    function animate(){
        if(x==window.innerWidth)
            x=-rect.width;
        else{
            x++;
            y=rect.top+Math.round(20 * Math.sin(angle));
            angle += .01;
            document.getElementById("cloud2").style.left=x+"px";
            document.getElementById("cloud2").style.top=y+"px";
        }
    }    
}

function animateCloud3()
{
    const cloud3 = document.getElementById("cloud3");   
    var rect=cloud3.getBoundingClientRect();
    var y=rect.top;
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 1);
    function animate(){
        if(x==-rect.width)
            x=window.innerWidth;
        else{
            x--;
            y=rect.top+Math.round(20 * Math.sin(angle));
            angle += .01;
            document.getElementById("cloud3").style.left=x+"px";
            document.getElementById("cloud3").style.top=y+"px";
        }
    }    
}

function animateGhost1()
{
    const ghost1 = document.getElementById("ghost1");   
    var rect=ghost1.getBoundingClientRect();
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 1);
    function animate(){
        x=rect.left+Math.round(20 * Math.sin(angle));
        angle += .02;
        document.getElementById("ghost1").style.left=x+"px";
    }    
}

function animateGhost2()
{
    const ghost2 = document.getElementById("ghost2");   
    var rect=ghost2.getBoundingClientRect();
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 1);
    function animate(){
        x=rect.left+Math.round(20 * Math.sin(angle));
        angle += .02;
        document.getElementById("ghost2").style.left=x+"px";
    }    
}

function animateGhost3()
{
    const ghost3 = document.getElementById("ghost3");   
    var rect=ghost3.getBoundingClientRect();
    var x=rect.left;
    var angle=0;
    var id = setInterval(animate, 1);
    function animate(){
        x=rect.left+Math.round(20 * Math.sin(angle));
        angle += .02;
        document.getElementById("ghost3").style.left=x+"px";
    }    
}

function stars()
{
    let i=0;let j=0;
    for(var m=0;m<100;m++)
    {
        var svg=document.getElementById("star");
        let circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", i);
        circle.setAttribute("cy", j);
        circle.setAttribute("r",  1);
        circle.setAttribute("fill", "white");
        circle.setAttribute("stroke", "skyblue");                
        svg.appendChild(circle);
        i=Math.floor(Math.random()*window.innerWidth*10);j=Math.floor(Math.random()*window.innerHeight*10);
    }
}

function bg()
{
    let count=0;
    var id=setInterval(animate,40);
    function animate()
    {
        const svg=document.getElementById("star");
        var rect=svg.getBoundingClientRect();
        var x=rect.top;
        x++;
        document.getElementById("star").style.top=x;
        if(count<=70){stars();}
        if(x%100==0)
        {document.getElementById("star").style.top=0;}
        count++;
    }
}