var textsize = 5;
var myWait = setInterval(GrowText, 100);

function GrowText() {
  if (textsize < 51) {
    textsize = textsize + 1;
    document.getElementById("myP1").innerHTML ="SHIVAM KARN";
    document.getElementById("myP1").style.fontSize = (textsize + 'pt');
    document.getElementById("myP1").style.color = "red";
  }
  else {
    clearInterval(myWait);
    myWait = setInterval(ShrinkText, 100);
  }
}

function ShrinkText() {
  if (textsize > 5) {
    textsize = textsize - 1;
    document.getElementById("myP1").innerHTML = "SHIVAM KARN";
    document.getElementById("myP1").style.fontSize = (textsize + 'pt');
    document.getElementById("myP1").style.color = "blue";
  }
  else {
    clearInterval(myWait);
  }
}