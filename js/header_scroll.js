window.onscroll = function() { menuScrollOn() };

function menuScrollOn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
    document.querySelector('#cabecalho').style.cssText = "margin-top: 0";
    document.querySelector('.logo>a>img').style.cssText = "max-height: 85%; margin: 20px auto 0; top: 0";
  } else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
    document.querySelector('#cabecalho').style.cssText = "margin-top: 50px";
    document.querySelector('.logo>a>img').style.cssText = "max-height: 100%; margin: auto; top: 0";
  }
}