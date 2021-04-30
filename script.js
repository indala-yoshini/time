function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDate();
    var v= date.getMonth()+1;
    var y=date.getFullYear();
    var k=date.toLocaleDateString();
    var p=date.getDay();

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    switch (p) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    v = (v < 10) ? "0" + v : v;
    
    var time = h + ":" + m + ":" + s + " " + session ;
    var timee =  day + " "+ d + " - " + v + " - " +  y + " " ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplayy").innerText = timee;


    

    setTimeout(showTime, 1000);
    
}


showTime();

//p();
//setTimeout(k, 15000);
//function k(){
setTimeout(p, 5000);

function p(){
document.getElementById("1").style.backgroundImage="url('https://i.pinimg.com/originals/b7/64/09/b76409ea45c2648724eb36bb293d33e4.gif')";
setTimeout(c, 3000);
}

//setTimeout(c, 10000);

function c(){
document.getElementById("1").style.backgroundImage="url('https://i2.wp.com/media0.giphy.com/media/l41lHDSvmwnQGDUD6/giphy.gif')";
setTimeout(k, 3000);
}


function k(){
    document.getElementById("1").style.backgroundImage="url('https://i.gifer.com/Rc45.gif')";
    setTimeout(d, 3000);
    }

    
function d(){
    document.getElementById("1").style.backgroundImage="url('https://i.pinimg.com/originals/5f/ee/45/5fee4571f32a803f260914810ae46c1a.gif')";
    setTimeout(p, 3000);
    }
