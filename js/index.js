

const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    })
  }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link'), navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    section.forEach(current =>{
        const sectionHeight = current.offSetHeight
        const sectionTop = current.offSetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')

            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')

        }
    })
}


window.onscroll = () =>{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header ');
}



function log() {
  setTimeout(
    console.log.bind(
      console,
      "%c This Was Created By => Sergio J Cerritos %c",
      "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
      ""
    )
  );
}
log();