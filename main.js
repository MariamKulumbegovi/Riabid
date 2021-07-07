let mainicon=document.getElementById('mainicon')
let riabidicon=document.getElementsByClassName('riabidicon')


  $(mainicon).hover(function () {
    $( riabidicon ).addClass( "riabidiconshow" );
          
      }, function () {
        $( riabidicon).removeClass( "riabidiconshow" );
      }
  );


let subscribebtn=document.getElementById('subscribebtn')
let emailinput=document.getElementById('email')

subscribebtn.addEventListener('click',function () {
    console.log(emailinput.value)
    emailinput.value=""
    

})

let photohover=document.getElementById('photo')

$(photohover).hover(function () {
    $( this ).addClass( "riabidiconshow" );
          
      }, function () {
        $( this).removeClass( "riabidiconshow" );
      }
  );


  let togglenav=document.getElementById("toggle")
  let ul=document.getElementById("ul-show")
  let header=document.getElementById("header-wrapper")

   togglenav.addEventListener('click',function () {
     ul.classList.toggle('show')
     header.style.justifyContent="center"
    
    
     
 })

 
let closeit=document.getElementById("close")

 closeit.addEventListener('click', function () {
   
  ul.classList.toggle('show')
  
  if(screen.width<=900){
    header.style.justifyContent="space-between"
  }else{
    header.style.justifyContent="space-around"
  }
   
 })




var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}