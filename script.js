const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
        header.style.background = "#ffffff";
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
const animatedElements = document.querySelectorAll(
".feature, .product-card, .service-card, .gallery-item, .contact-item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});

const buttons = document.querySelectorAll(
".btn, .btn2, .contact-form button"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

window.addEventListener("scroll", () => {

    const scrollTop = window.pageYOffset;

    document.querySelector(".hero").style.backgroundPositionY =
    scrollTop * 0.4 + "px";

});

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";

    });

    img.style.opacity = "0";
    img.style.transition = "opacity .8s ease";

});
const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (name === "") {
            alert("कृपया अपना नाम दर्ज करें।");
            return;
        }

        if (!/^[A-Za-z\u0900-\u097F ]+$/.test(name)) {
            alert("कृपया सही नाम दर्ज करें।");
            return;
        }

        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            alert("कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
            return;
        }

        if (
            email !== "" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            alert("कृपया सही ईमेल दर्ज करें।");
            return;
        }

        if (message.length < 10) {
            alert("कृपया कम से कम 10 अक्षरों का संदेश लिखें।");
            return;
        }

        alert("धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।");

        this.reset();

    });

}
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const preview = document.createElement("div");

        preview.style.position = "fixed";
        preview.style.top = "0";
        preview.style.left = "0";
        preview.style.width = "100%";
        preview.style.height = "100%";
        preview.style.background = "rgba(0,0,0,0.9)";
        preview.style.display = "flex";
        preview.style.alignItems = "center";
        preview.style.justifyContent = "center";
        preview.style.zIndex = "99999";
        preview.style.cursor = "pointer";

        const img = document.createElement("img");

        img.src = image.src;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

        preview.appendChild(img);

        document.body.appendChild(preview);

        preview.addEventListener("click", () => {

            preview.remove();

        });

    });

});

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "95px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#1b8f3d";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

console.log("Aanjana Agro Hub Website Loaded Successfully");
