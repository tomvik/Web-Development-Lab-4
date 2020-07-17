$(document).ready(function(){

    $("button[type=submit]").click(SubmitText);

});


function SubmitText(event) {
    event.preventDefault();
    
    let input_text = $("input[type=text]").val();

    if(input_text == "") {
        alert("You didn't input anything");
    } else {
        let checar_button = $('<button class="checar">checar</button> ').click(CheckElement);
        let delete_button = $('<button class="del">delete</button>').click(DeleteElement);

        let list_elements = $("ul").append(`<li class="lis"> <p class="itemShop"> ${input_text} </p> </li>`);
        list_elements.children().last().append(checar_button, " ", delete_button);

        ChangeCounter(true);
    }
}

function CheckElement(event) {
    event.preventDefault();

    text_element = $(this).parent().children().first();

    if(text_element.css("text-decoration").startsWith("line-through")) {
        text_element.css("text-decoration", ""); 
    } else {
        text_element.css("text-decoration", "line-through")
    }
}

function DeleteElement(event) {
    event.preventDefault();

    $(this).parent().remove();

    ChangeCounter(false);
}

function ChangeCounter(add) {

    let counter_text = $("#counter");
    let split_text = counter_text.text().split(" ");
    let number_str = parseInt(split_text[3]);
    
    if(add) {
        number_str = number_str + 1;
    } else {
        number_str = number_str - 1;
    }

    split_text[3] = number_str.toString();
    
    counter_text.text(split_text.join(" "));

}