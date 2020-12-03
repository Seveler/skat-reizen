function start1() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("blue").style.visibility = "visible";
    document.getElementById("red").style.visibility = "visible";
    document.getElementById("green").style.visibility = "visible";
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("victory").style.visibility = "hidden";
}

function hover1(){
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("blue").style.visibility = "hidden";
    document.getElementById("red").style.visibility = "hidden";
    document.getElementById("green").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "hidden";
}

function end(){
    document.getElementById("blue").style.visibility = "hidden";
    document.getElementById("red").style.visibility = "hidden";
    document.getElementById("green").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "hidden";
    document.getElementById("victory").style.visibility = "visible";
}


function start2() {
    document.getElementById("victory").style.visibility = "hidden";
    document.getElementById("ball").style.visibility = "visible";
    
    document.getElementById("up").style.visibility = "visible";
    document.getElementById("down").style.visibility = "visible";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("right").style.visibility = "visible";
    document.getElementById("hole").style.visibility = "visible";
}

var p_top = 300;
var p_left = 300;
var stepsize = 25;

function up(){
    p_top = p_top - stepsize;
    document.getElementById("ball").style.top = p_top + "px";
    in_hole();
}

function down(){
    p_top = p_top + stepsize;
    document.getElementById("ball").style.top = p_top + "px";
    in_hole();
}

function left(){
    p_left = p_left - stepsize;
    document.getElementById("ball").style.left = p_left + "px";
    in_hole();
}

function right(){
    p_left = p_left + stepsize;
    document.getElementById("ball").style.left = p_left + "px";
    in_hole();
}

function in_hole(){
    if(document.getElementById("ball").style.top == "75px" && 
       document.getElementById("ball").style.left == "200px")
    {
        document.getElementById("victory").style.visibility = "visible";
        document.getElementById("hole").style.visibility = "hidden";
        document.getElementById("ball").style.visibility = "hidden";
    }
}

function change_color(){
    document.getElementById("hole").style.background = "#2E2E2E";
    
    
    const sleep = milliseconds => { 
    return new Promise(resolve => setTimeout(resolve, milliseconds)); 
    }; 
    
    sleep(500).then(() => { 
    // code to execute after sleep
    document.getElementById("hole").style.background = "#6E6E6E";
    }); 
    sleep(1000).then(() => { 
    // code to execute after sleep
    document.getElementById("hole").style.background = "#BDBDBD";
    });
    sleep(1500).then(() => { 
    // code to execute after sleep
    document.getElementById("hole").style.background = "#E6E6E6";
    });
    sleep(2000).then(() => { 
    // code to execute after sleep
    document.getElementById("hole").style.background = "black";
    });
}

