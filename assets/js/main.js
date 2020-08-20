const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// active and remove menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll reveal animation
const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2000,
    reset : true
})

// scroll home
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 2000})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{delay: 400})

// scroll about
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

// scroll skills
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{delay: 400})


// scroll works
sr.reveal('.work_img',{interval: 200})


// scroll contact
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text',{interval: 200})
sr.reveal('.contact_input',{interval: 200})
