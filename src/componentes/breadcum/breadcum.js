import logo2 from '../../../public/logo.png'
import imgfundo from '../../../public/swit.jpg'
import botao11 from '../../../public/readylitter.png'
import botao22 from '../../../public/botao22.png'
import btndiscor from '../../../public/btndiscor.png'
import cutelo from '../../../public/chapeu-de-chef.png'
import somsite from './somsite.mp3'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

  

export function bredcum(){

}




bredcum.prototype.som = function(){
  const somsiite = document.createElement('somsite')
  somsiite.innerHTML = '<audio controls autoplay id="meusom" hidden> <source src='+somsite+' type="audio/mpeg" ></audio>' 

  return somsiite
}


bredcum.prototype.telafundo = function(){
const tela = document.createElement('telafundo')

tela.innerHTML = '<div id="telafundo"></div>' 
const div = tela.children[0]
div.innerHTML = '<div id="particles-js"></div>' 

div.style.backgroundImage = "url("+ imgfundo +")"
return tela
}



bredcum.prototype.logofundo = function(){
    const imglogo = document.createElement('imglogo')
    imglogo.classList.add('imglogo')
    imglogo.innerHTML = 
    '<div id="logofundo" class="animate__animated animate__tada"><img class ="imglogo"src='+logo2+'><div>'
    


    return imglogo
}




bredcum.prototype.botoes = function (){
    const blocoBotao = document.createElement('blocobotao')
    blocoBotao.classList.add('blocobotao')
    blocoBotao.setAttribute('id','blocobotao')
    blocoBotao.innerHTML =  
    '<div class="grupobotoes">'+
    

    '<div class="botao1"><img src=' + botao11 + '></div>' +
    
    
    '</div>'
    return blocoBotao
}

bredcum.prototype.simbolos = function(){
  const simbolos = document.createElement('simbolos')
  simbolos.classList.add('simbolos')
  simbolos.innerHTML = '<div class="alin">' +
  '<a class="iconeshover" href="https://twitter.com/CookingPalace_?t=8BjHwUfMzXwtds10ou_XBw&s=09"><div> <span style="font-size: 2em; "><i class="fab fa-twitter"></i></span></div></a>' +

 '<a class="iconeshover" href="https://discord.com/invite/NpstRpZf"><div><span style="font-size: 2em;"><i class="fab fa-discord"></i></span></div></a>' +
 '<a class="iconeshover" href="https://example.com"><div><span style="font-size: 2em; "><i class="fab fa-instagram"></i></span></div></a>' +
 '<a class="iconeshover" href="https://www.facebook.com/Cooking-Palace-103956655440434/"><div><span style="font-size: 2em; "><i class="fab fa-facebook"></i></span></div></a>' +
 '<a class="iconeshover" href="https://example.com"><div><span style="font-size: 2em;"><i class="fab fa-telegram"></i></span></div> </a>'+
 '</div>' 

 return simbolos
}

bredcum.prototype.icones = function(){
   const icones = document.createElement('icones')
    icones.innerHTML =  
    '<div class="btndiscord"> <div><img src='+btndiscor+'></div> ' 
   
    icones.setAttribute('class', 'icone')
    
   
   
 
 

    return icones
}





bredcum.prototype.animarimg = function(){
 const teste = document.getElementById('logofundo')
 var tira;
 var poe;
 

function myFunction() {
  tira = setInterval(tiraanimation, 5000);
}


function myFunction2() {
  poe = setInterval(poeanimation, 10000);
}

function tiraanimation() {
  teste.classList.remove('animate__tada','animate__animated')
}

function poeanimation() {
  teste.classList.add('animate__tada','animate__animated')
}
myFunction()
myFunction2()
}

bredcum.prototype.animacaologo = function(){
  particlesJS("particles-js", {
    particles: {
      number: { value: 90, density: { enable: true, value_area: 1000 } },
      color: { value: "#fff" },
      shape: {
        type: "image",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: {
          src: cutelo,
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: true }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: false, speed: 30, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 4,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 500, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
}


