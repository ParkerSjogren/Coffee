const btn  = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const alertMessage = [
    {
        msg: 'Smoke weed'
    },
    {
        msg: 'Drink beer'
    },
    {
        msg: 'Cry'
    },
    {
        msg: 'Go back to bed'
    },
    {
        msg: 'Drink coffee'
    },
];

const alertPopupMsg = function(msgArray){
    return msgArray[Math.floor(Math.random() * msgArray.length)].msg;
}

getMessage = alertPopupMsg(alertMessage);

// handle click button

btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if(selectedValue==='no'){
        alert(getMessage);
        radioBtn.remove();
    }
    else{ 
        radioBtn.remove();
        radioBtn2.style.display='block';
        radioBtn2.style.visibility='visible';
    }
}

btn2.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if(selectedValue==='yes'){
        alert("Dress appropriately")
    }
    
    alert("Walk to mailbox retrieve mail")
    radioBtn2.remove();
    radioBtn3.style.display='block';
    radioBtn3.style.visibility='visible';
}

btn3.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if(selectedValue==='yes'){
        alert("Drink coffee & read mail")
    }
    else{
        alert(getMessage)
    }
    radioBtn3.remove();
}

        
    
   

