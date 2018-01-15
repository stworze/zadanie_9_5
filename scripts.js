var text = document.getElementsByClassName('button');
document.getElementsByClassName('button').innerHTML = text.length;

for (i = 0; i < text.length; i++) {
alert(text[i].innerText);
}
