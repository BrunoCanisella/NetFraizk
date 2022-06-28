class MobileNavbar {

    constructor(mobileMenu, navList, navLinks) {

        this.mobileMenu = document.querySelector(".mobile-menu");
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {

        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease fowards $ {index / 7 + 0.3}s');
        });
    }

    handleClick() {

        //console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {

        this.mobileMenu.addEventListener("click", this.handleClick);

        this.init();
    }

    init() {

        if (this.mobileMenu) {

            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavbar = new MobileNavbar(

    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();