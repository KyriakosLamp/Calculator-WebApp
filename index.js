const display = document.getElementById('display');
const body=document.getElementById('body');

temp_result=0;
temp_operator=0;
body.addEventListener("keydown", KeyboardUser);

function KeyboardUser(key){
    switch(key.code){
        case('Numpad1'):
            sendNumber('1')
            return;
        case('Numpad2'):
            sendNumber('2')
            return;
        case('Numpad3'):
            sendNumber('3')
            return; 
        case('Numpad4'):
            sendNumber('4')
            return;
        case('Numpad5'):
            sendNumber('5')
            return;
        case('Numpad6'):
            sendNumber('6')
            return;
        case('Numpad7'):
            sendNumber('7')
            return;
        case('Numpad8'):
            sendNumber('8')
            return;
        case('Numpad9'):
            sendNumber('9')
            return;
        case('Numpad0'):
            sendNumber('0')
            return;
        case('NumpadAdd'):
            sendAction('+')
            return;
        case('NumpadSubtract'):
            sendAction('-')
            return;
        case('NumpadMultiply'):
            sendAction('*')
            return;
        case('NumpadDivide'):
            sendAction('/')
            return;
        case('NumpadEnter'):
            showResult()
            return;
        default:
            return;
    }

        

}
function clearDisplay()
{
    temp_operator=0;
    temp_result=0;
    display.value=0;
}

function sendNumber(num){
    if(display.value!=0)
        display.value=(display.value)+num;
    else
        display.value=num;
}

function sendAction(operator)
{
    if(temp_result!=0){
        calculate(operator);
        return;
    }
    temp_result=display.value;
    temp_operator=operator;
    display.value=0;
    return;
}
function calculate(operator)
{
    switch(temp_operator){
        case('='):
            break;
        case('+'):
            temp_result=parseFloat(temp_result) + parseFloat(display.value);
            break;
        case('-'):
            temp_result=parseFloat(temp_result) - parseFloat(display.value);
            break;
        case('*'):
            temp_result=parseFloat(temp_result) * parseFloat(display.value);
            break;
        case('/'):
            try {
                temp_result=parseFloat(temp_result) / parseFloat(display.value);
                break;
                } catch (error) {  display.value='Error'; }
        default:
           display.value='Error';
            return;
        }
        temp_operator=operator;
        display.value=0; return;
}

function showResult(){
    calculate('=');
    display.value=temp_result;
    temp_operator=0;
    temp_result=0;
    return;
}

