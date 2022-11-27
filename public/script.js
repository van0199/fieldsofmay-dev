console.log('script.js loaded');


// ---------------- hamberger ----------------

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






// ---------------- drop down ----------------
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navdropdown').toggle();
      // Close one dropdown when selecting another
      $('.navdropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navdropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




function showDiv() {
  document.getElementById('welcomeDiv').style.display = "block";
}

function showDiv2() {
  document.getElementById('welcomeDiv2').style.display = "block";
}

function showDiv3() {
  document.getElementById('welcomeDiv3').style.display = "block";
}

function showDiv4() {
  document.getElementById('welcomeDiv4').style.display = "block";
}

function showDiv5() {
  document.getElementById('welcomeDiv5').style.display = "block";
}

function showDiv6() {
  document.getElementById('welcomeDiv6').style.display = "block";
}

function showDiv7() {
  document.getElementById('welcomeDiv7').style.display = "block";
}

function showDiv8() {
  document.getElementById('welcomeDiv8').style.display = "block";
}

function showDiv9() {
  document.getElementById('welcomeDiv9').style.display = "block";
}

function showDiv10() {
  document.getElementById('welcomeDiv10').style.display = "block";
}

function showDiv11() {
  document.getElementById('welcomeDiv11').style.display = "block";
}



  // ----------------------------------- herring fish ----------------------------------------------------
  $(document).ready(function(){
    $('#myselection').on('change', function(){
    	var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});


  // ----------------------------------- popup ----------------------------------------------------
  $(document).ready(
    function() {
        $("#music").click(function() {
            $("#musicinfo").fadeToggle();
        });
    });



  // ----------------------------------- follow ----------------------------------------------------

  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX - ", pageY: " + event.pageY );
  $( "#tooltip" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
  $( "#tooltip2" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
  $( "#image" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
});






  // --------------------------------------------------------- time and date at top




  $(document).ready(function() {
    // Create two variables with names of months and days of the week in the array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    
  
    
    setInterval( function() {
        // Create an object newDate () and extract the second of the current time
        var seconds = new Date().getSeconds();
        // Add a leading zero to the value of seconds
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        
    setInterval( function() {
        // Create an object newDate () and extract the minutes of the current time
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        
    setInterval( function() {
        // Create an object newDate () and extract the clock from the current time
        var hours = new Date().getHours();
        // Add a leading zero to the value of hours
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);
        
    }); 
  
  
  
  
  // Date
  function updateDate() {
    let today = new Date();
  
    // return number
    let dayName = today.getDay(),
      dayNum = today.getDate(),
      month = today.getMonth();
      // year = today.getFullYear();
  
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayWeek = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month"];
    const IDCollection2 = ["day2", "daynum2"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], ];
    for (let i = 0; i < IDCollection.length; i++) {
      document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
  
    const val2 = [dayWeek[dayName], dayNum, months[month], ];
    for (let i = 0; i < IDCollection2.length; i++) {
      document.getElementById(IDCollection2[i]).firstChild.nodeValue = val[i];
    }
  }
  
  updateDate();
  




 
  // ----------------------------------------------------------------
// var acc = document.getElementsByClassName("accordionn");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("activee");
//     var panell = this.nextElementSibling;
//     if (panell.style.display === "block") {
//       panell.style.display = "none";
//     } else {
//       panell.style.display = "block";
//     }
//   });
// }

   /**
     * EFECTO PARA FLECHAS EN ACORDEON
     */
    
    $(document).on('show','.accordion', function (e) {
      //$('.accordion-heading i').toggleClass(' ');
      $(e.target).prev('.accordion-heading').addClass('accordion-opened');
 });
 
 $(document).on('hide','.accordion', function (e) {
     $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
     //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
 });
