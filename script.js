window.onscroll = function(){ displayTotopButton(),displayAbout(), displayCallToAction()/*  displayDealOfTheDay( )*/}
function displayMenu(){
    let myMenu = document.getElementById('navigation');
    if(myMenu.style.display === "block"){
        myMenu.style.display = "none";
        
    }
    else{
        myMenu.style.display = "block";
        
    }
}

function displayHelp(){
    setTimeout(function(){
      let help = document.getElementById('help');
      help.style.display = 'block';
    }, 15000);
}

//display about on scroll
function displayAbout(){ 
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector('#whoWeAre').style.display = 'block';
    }
    else{
        document.querySelector('#whoWeAre').style.display = 'none';
    }
}

//display call to action on scroll
function displayCallToAction(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.querySelector('#callToAction').style.display = "block";
    }
    else{
        document.querySelector('#callToAction').style.display = "none";
    }
}

//display to top button after few seconds
function displayTotopButton(){
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.querySelector('.toTop').style.display = 'block';
    }
    else{
        document.querySelector('.toTop').style.display = 'none';
    }
}

//display deal of the day on scroll
function displayDealOfTheDay(){
    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        document.querySelector('.the_deal').style.display = "block";
    }
    else{
        document.querySelector('.the_deal').style.display = "none";
    }
}

//display portfolio categories
/* function displayCategories(){
    let allBtn = document.getElementById('all');
    const engineeringBtn = document.getElementById('engineering');
    let petrolBtn = document.getElementById('petrol');
    let powerBtn = document.getElementById('power');
    let engineering = document.querySelector('.engine');
    let power = document.querySelector('.power');
    let petrol = document.querySelector('.petrolchemical');
    engineeringBtn.addEventListener('click', function(){
        engineering.style.display = 'block';
        power.style.display = 'none';
        petrol.style.display = 'none';
    });
}

displayCategories(); */

$(document).ready(function(){
    $("#engineering").click(function(){
        $(".engine").show();
        $(".power").hide();
        $(".petrochemical").hide();
    });
});
$(document).ready(function(){
    $("#petrol").click(function(){
        $(".engine").hide();
        $(".power").hide();
        $(".petrochemical").show();
    });
});
$(document).ready(function(){
    $("#power").click(function(){
        $(".engine").hide();
        $(".power").show();
        $(".petrochemical").hide();
    });
});
$(document).ready(function(){
    $("#all").click(function(){
        $(".recentjobs figure").show();
    });
});