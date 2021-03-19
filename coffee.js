const btn  = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

let selectedValue;
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
        alert("Drink coffee");
        radioBtn.remove();
    }
    else{ 
        radioBtn.remove();
        radioBtn2.style.display='block';
        radioBtn2.style.visibility='visible';

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
                    alert("Drink coffee")
                }
                radioBtn3.remove();
            }

        }
    }
   
}
