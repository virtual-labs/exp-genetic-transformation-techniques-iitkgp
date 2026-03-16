
/******************************************************* Step 1 A ************************** */ 
function step1acheck() {

  const checkboxesstp1 = document.querySelectorAll('input[type=checkbox][name=sstep1]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxesstp1).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 2) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("70% Ethanol") && selectedValues.includes("Sodium hypochlorite")) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component(s) is(are) selected.\n Seeds are sterilized with 70% ethanol + sodium hypochlorite to eliminate microbes.');

     

    } else {
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component(s) is/are selected.\n Water/sucrose do NOT sterilize; contamination will kill seedlings');
    }
  }
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text('Two components are require for seed sterilization.');
  }
}

/******************************************************* Step 1 B ************************** */ 
function step1bcheck() {

  const radiobtnstp1 = document.querySelectorAll('input[type=radio][name=gstep1]:checked'); //.form-check-input
  const selectedradiobtn = Array.from(radiobtnstp1).filter(radio => radio.checked);

  if (selectedradiobtn.length === 1) {
    const selectedValues = selectedradiobtn.map(radio => radio.value);

    // Check if the selected values are correct
    if (selectedValues.includes("28 deg for 2 days") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected.');

      document.getElementById("step1img").style.display = "block";

    } else {
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected.');
    }
  }

}


/******************************************************* Step 2 ************************** */ 
function step2check() {

  const checkboxesstp2 = document.querySelectorAll('input[type=checkbox][name=astep2]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxesstp2).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 1) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Acetosyringone") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected.\n Acetosyringone activates vir genes, increasing T-DNA transfer.');
document.getElementById("step2img").style.display = "block";
     

    } else if (selectedValues.includes("Antibiotics") ){
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected.\n Antibiotics kill Agrobacterium.');
    }
    else if (selectedValues.includes("Sodium chloride") ){
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected.\n Salt has no function here.');
    }
  }
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text('One components is required.');
  }
}

/******************************************************* Step 3 A ************************** */ 

function step3acheck() {

  const radiobtnstp3a = document.querySelectorAll('input[type=radio][name=step3arb]:checked'); //.form-check-input
  const selectedradiobtn3 = Array.from(radiobtnstp3a).filter(radio => radio.checked);

  if (selectedradiobtn3.length === 1) {
    const selectedValues = selectedradiobtn3.map(radio => radio.value);

    // Check if the selected values are correct
    if (selectedValues.includes("24 - 72 hours") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Standard co-cultivation period.');

    

    } else if (selectedValues.includes("2 hours") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Too short—insufficient T-DNA transfer.');

     

    }

    else if (selectedValues.includes("1 week")){
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Too long—Agrobacterium may overgrow and kill explants.');
    }
  }
  else {
    
    $('#alertmessage').modal('show');
    $('.modal-body').text('One components is required.');
  }
}
//}


/******************************************************* Step 3 B ************************** */ 
function step3bcheck() {

  const radiobtnstp3b = document.querySelectorAll('input[type=radio][name=step3brb]:checked'); //.form-check-input
  const selectedradiobtn3b = Array.from(radiobtnstp3b).filter(radio => radio.checked);

  if (selectedradiobtn3b.length === 1) {
    const selectedValues = selectedradiobtn3b.map(radio => radio.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Wash explants gently") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Gentle washing removes excess Agrobacterium.');

      document.getElementById("step3img").style.display = "block";

    } else if (selectedValues.includes("Transfer directly to soil") ) {
      
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Direct soil transfer is premature.');

      

    }

    else if (selectedValues.includes("Add sucrose only")){
     
      $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Sucrose doesn’t remove bacteria.');
    }
  }
 

}

/******************************************************** Step 4 ***************************************************/

function step4check(){
    var selectmenustep4= document.getElementById("step4");
    if(selectmenustep4.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Leads to root formation, not shoots.');
    } 

    if(selectmenustep4.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Stimulates shoot regeneration.');
      document.getElementById("step4img").style.display = "block";
    }
     if(selectmenustep4.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n No regeneration occurs.');
    } 

}

/******************************************************** Step 5 ***************************************************/

function step5check(){
    var selectmenustep5= document.getElementById("step5");
    if(selectmenustep5.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected. \n Required for root induction.');
     document.getElementById("step5img").style.display = "block";
    } 

    if(selectmenustep5.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Maintains shoot formation.');
     
    }
     if(selectmenustep5.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Very low rooting efficiency.');
    } 

}



/******************************************************** Step 6 ***************************************************/

function step6check(){
    var selectmenustep6= document.getElementById("step6");
    if(selectmenustep6.value== 1){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Causes shock & wilting.');
    } 

    if(selectmenustep6.value== 2){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Correct component is selected for acclimatization.');
      document.getElementById("step6img").style.display = "block";
    }
     if(selectmenustep6.value== 3){
        $('#alertmessage').modal('show');
      $('.modal-body').text('Incorrect component is selected. \n Causes root rot.');
    } 

}