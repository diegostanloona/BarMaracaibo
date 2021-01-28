document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide")
    const trackers = document.querySelectorAll(".tracker li")
    const sideNavItems = document.querySelectorAll(".sideNav ul li")
    let activeSlide = 0
    let isSideNavShown = false
    let isMusicPlaying = true
    let isMenuShown = false
    let lang = "es"
    let slideHeight = window.innerHeight

    window.onresize = () => {
        slideHeight = window.innerHeight
    }


    window.onscroll = () => {
        if (window.scrollY < slideHeight) {
            changeSlide(0)
        } else if (window.scrollY < slideHeight * 2) {
            changeSlide(1)
        } else if (window.scrollY < slideHeight * 3) {
            changeSlide(2)
        } else {
            changeSlide(3)
        }
    }

    document.querySelector(".next i").onclick = e => {
        if (activeSlide == 3) {
            return
        }
        changeSlide(activeSlide + 1, activeSlide)
        window.scrollTo(0, slideHeight * activeSlide)
    }

    document.querySelector(".barsMenu").onclick = e => {
        toggleSideNav()
    }

    document.querySelector(".sideNav i").onclick = e => {
        toggleSideNav()
    }

    document.querySelector(".pause i").onclick = e => {
        togglePlayPause(e)
    }

    document.querySelector(".language").onclick = e => {
        toggleLanguage(e)
    }

    document.querySelectorAll(".menuToggle").forEach(btn => {
        btn.onclick = () => {
            console.log(btn)
            toggleMenu()
        }
    })

    document.querySelectorAll(".musicToggle").forEach(btn => {
        btn.onclick = () => {
            let url = document.querySelector(".spotifyLink").href
            window.open(url, '_blank');
        }
    })



    document.querySelector(".antesala .entrar").onclick = e => {
        document.querySelector("audio").play()
        document.querySelector(".antesala .left").style.left = "-60%"
        document.querySelector(".antesala .right").style.left = "110%"
        e.target.style.opacity = "0"
        setTimeout(() => {
            e.target.style.display = "none"
        }, 1001)

    }


    sideNavItems.forEach((li, index) => {
        li.onclick = () => {
            changeSlide(index)
            window.scrollTo(0, slideHeight * activeSlide)
            toggleSideNav()
        }
    })

    trackers.forEach((li, index) => {
        li.onclick = () => {
            changeSlide(index)
            window.scrollTo(0, slideHeight * activeSlide)
        }
    })

    const irAlMenu = () => {
        var url = new URL(window.location.href);
        var c = url.searchParams.get("menu");
        if (c === "true") {
            document.querySelector(".antesala .left").style.left = "-60%"
            document.querySelector(".antesala .right").style.left = "110%"
            document.querySelector(".antesala .entrar").style.opacity = "0"
            setTimeout(() => {
                document.querySelector(".antesala .entrar").style.display = "none"
            }, 1001)

            toggleMenu()
        }
    }

    const changeSlide = index => {


        for (let i in slides) {
            if (i == index) {
                slides[i].className = "slide active"
                trackers[i].className = "active"
                sideNavItems[i].className = "active"
                activeSlide = index
            } else {
                slides[i].className = "slide"
                trackers[i].className = ""
                sideNavItems[i].className = ""
            }
        }

    }

    const toggleLanguage = e => {
        let imgES = document.querySelector("iframe").contentDocument.querySelector("#carta_castellano")
        let imgEN = document.querySelector("iframe").contentDocument.querySelector("#carta_ingles")

        if (lang === "es") {
            imgES.style.display = "none"
            imgEN.style.display = "block"
            lang = "en"
            e.target.innerText = "ESP"
        } else if (lang === "en") {
            imgES.style.display = "block"
            imgEN.style.display = "none"
            lang = "es"
            e.target.innerText = "ENG"

        }
    }

    const toggleSideNav = () => {
        let sideNav = document.querySelector(".sideNav")
        if (isSideNavShown) {
            sideNav.style.opacity = '0'
            setTimeout(() => {
                sideNav.style.display = "none"
            }, 500)
        } else {
            sideNav.style.display = "flex"
            setTimeout(() => {
                sideNav.style.opacity = '1'
            }, 1)
        }
        isSideNavShown = !isSideNavShown
    }


    const togglePlayPause = e => {
        if (isMusicPlaying) {
            e.target.className = "fas fa-play fa-3x"
            document.querySelector("audio").pause()
        } else {
            e.target.className = "fas fa-pause fa-3x"
            document.querySelector("audio").play()

        }
        isMusicPlaying = !isMusicPlaying
    }

    const toggleMenu = () => {
        let menu = document.querySelector(".menu")
        if (isMenuShown) {
            menu.style.left = '100%'
        } else {
            menu.style.left = '0%'
        }
        isMenuShown = !isMenuShown
    }

    irAlMenu()


})