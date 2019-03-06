function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function checkEmail(email) {

    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    if (pattern.test(email)) {
        return true;
    } else {
        return false;
    }

}


function processFormData() {

    var name_element = document.getElementById('txt_name');
    var email_element = document.getElementById('txt_email');
    var pick_element = document.getElementById('picker');

    var name = trim(name_element.value);
    var email = trim(email_element.value);
    var pick_choice = pick_element.value;

    var error_message = 'Please enter the correct details: \n\n';
    var data = 'Thank you for picking Mr.' +' '+ name + ' '+ 'Please take a screenshot of this page! \n\n';

    var error_flag = false;

    if (name == '') {
        error_message += 'Name: Please enter your name\n';
        error_flag = true;
    } else {
        data += 'Name: ' + name + '\n';
    }

    if (!checkEmail(email)) {
        error_message += 'Email: Please enter a valid email address';
        error_flag = true;
    } else {
        data += 'Email: ' + email + '\n';
    }

    data += 'You Picked: ' + pick_choice;

    if (error_flag) {
        alert(error_message);
    } else {
        alert(data);
    }

}