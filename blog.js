// test to add clicking function to my ul
$(document).ready(function(){
  $('#toggle-area').click(function(){
    $('#show-area').toggleClass("open");
  });
});

$(document).ready(function(){
  $('#toggle-area').click(function(){
    if (! $('#show-area').hasClass('open')){
      $('#show-area').addClass('open');
    }
    else {
      $('#show-area').removeClass('open');
    }
  });
});
// end 1


// test to add clicking fonction to my ul ------navbar
const selectElement = (element) => document.querySelector(element);
selectElement('navbar-toggler').addEventListener('click', () => {
    selectElement('navbar-nav').classList.toggle('active');
});
//end 

brightness_4
// JavaScript code 
function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('blog'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

