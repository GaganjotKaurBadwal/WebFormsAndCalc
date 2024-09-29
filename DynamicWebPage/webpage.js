const header = document.getElementById("header");
const image = document.getElementById("image");
const textContainer = document.getElementById("textContainer");
const description = document.getElementsByClassName("description")[0];

document.getElementById("changeTextButton").addEventListener("click", function() {
    description.innerHTML = "Welcome to our Page.";
    header.innerHTML = "Lavender-Themed Page!";
});

description.style.color = "#4B0082";
header.style.color = "#483D8B";

document.getElementById("changeImageButton").addEventListener("click", function() {
    image.src = "img2.jpg";
});

document.getElementById("addTextNodeButton").addEventListener("click", function() {
    const newTextNode = document.createTextNode("Lavender is a fragrant flowering plant from the Lavandula genus, renowned for its vibrant purple color and soothing aroma. Popular species include English lavender and French lavender, commonly used in aromatherapy for relaxation, culinary applications, and cosmetics. It thrives in sunny, well-drained areas and has been cherished for centuries for its beauty and calming properties. In the language of flowers, lavender symbolizes devotion and tranquility, making it a beloved addition to gardens and homes.");
    textContainer.appendChild(newTextNode);
});

document.getElementById("removeNodeButton").addEventListener("click", function() {
    if (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
    } else {
        alert("No more nodes to remove!");
    }
});

$('#changeButtonText').click(function() {
    $(this).text("Submission Completed");
});

$('body').css('background-image', 'url(form.jpg)');

$('#userForm').submit(function(event) {
    event.preventDefault();
    const name = $('#userName').val();
    const email = $('#userEmail').val();
    alert(`Name: ${name}, Email: ${email}`);
    $(this).trigger('reset');
});

$('#submitButton').click(function() {
    $('#userForm input[type="text"]').attr('placeholder', 'Updated Name Placeholder');
});
