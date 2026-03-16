
/******************************************************* Step 1 A ************************** */ 
function step1acheck() {

  const checkboxesstp1 = document.querySelectorAll('input[type=checkbox][name=sstep1]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxesstp1).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 2) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Gold") && selectedValues.includes("Tungsten")) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component(s) is(are) selected.\n Gold is dense and inert and Tungsten is commonly used.');

      document.getElementById("step1img").style.display = "block";

    } else if (selectedValues.includes("Silver")) {
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component(s) is/are selected.\n Not used - reactive');
    }
    else if (selectedValues.includes("Copper")) {
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component(s) is/are selected.\n Oxidized easily');
    }
  }
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text('Two components are require.');
  }
}




/******************************************************* Step 2 ************************** */ 
function step2check() {

  var inpt1 = document.getElementById("i1").value;
  var inpt2 = document.getElementById("i2").value;
  var inpt3 = document.getElementById("i3").value;
  var inpt4 = document.getElementById("i4").value;


  if ((inpt1 == '1') && (inpt2 == '2')&& (inpt3 == '3') &&(inpt4 == '4') ) {
    
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct order.');
document.getElementById("step2img").style.display = "block";
  }

   
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text(' Incorrect order will lead to poor DNA coating and low transformation efficiency.');
  }
}

/******************************************************* Step 3 A ************************** */ 

function step3acheck() {

  const radiobtnstp3a = document.querySelectorAll('input[type=radio][name=step3arb]:checked'); //.form-check-input
  const selectedradiobtn3 = Array.from(radiobtnstp3a).filter(radio => radio.checked);

  if (selectedradiobtn3.length === 1) {
    const selectedValues = selectedradiobtn3.map(radio => radio.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Handle") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. ');

    

    } else if (selectedValues.includes("Pressure gauge") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected.');

     

    }

    else if (selectedValues.includes("Macrocarrier holder")){
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected.');
    document.getElementById("step3img").style.display = "block";
    }
  }
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text('One components is required.');
  }
}
//}




/******************************************************** Step 4 ***************************************************/

function step4check(){
    var selectmenustep4= document.getElementById("step4");
    if(selectmenustep4.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Too low — particles would not penetrate cells.');
    } 

    if(selectmenustep4.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Optimal range.');
      document.getElementById("step4img").style.display = "block";
    }
     if(selectmenustep4.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n High risk of tissue damage.');
    } 

}

/******************************************************** Step 5 ***************************************************/

function step5check(){
    var selectmenustep5= document.getElementById("step5");
    if(selectmenustep5.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. ');
     
    } 

    if(selectmenustep5.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. ');
     
    }
     if(selectmenustep5.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. ');
   document.getElementById("step5img").style.display = "block";
    } 

}



/******************************************************** Step 6 ***************************************************/

function step6check(){
    var selectmenustep6= document.getElementById("step6");
    if(selectmenustep6.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Too close: tissue damage. ');
    } 

    if(selectmenustep6.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Too far: insufficient penetration');
      
    }
     if(selectmenustep6.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Ideal distance');
      document.getElementById("step6img").style.display = "block";
    } 

}

/******************************************************** Step 7 ***************************************************/

function step7check(){
    var selectmenustep7= document.getElementById("step7");
    if(selectmenustep7.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Removes transformed cells. ');
    } 

    if(selectmenustep7.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Allows expression of introduced gene.');
      document.getElementById("step7img").style.display = "block";
    }
     if(selectmenustep7.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Not required.');
      
    } 

}