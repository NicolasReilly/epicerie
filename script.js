gsap.registerPlugin(ScrollTrigger);

gsap.to(".food", {
  repeat: -1,
  yoyo: true,
  fontSize: 125,
  stagger: 0.25,
  duration: 0.5
});

const form = gsap.timeline({
  scrollTrigger: {
    trigger: ".formBG",
    start: "top 25%",
    toggleActions: "restart none none reverse"
  }
});
form.to(".form", {
  opacity: 1,
  duration: 1
});

const pen = gsap.timeline({
  scrollTrigger: {
    start: "top bottom",
    trigger: ".formBG",
    scrub: true
  }
});
pen.to(".formBG", {
  backgroundColor: "#fdf1ec"
});
pen.to(
  ".pen",
  {
    x: "900%",
    rotate: "-35deg"
  },
  "<"
);

const btnAdd = document.querySelector(".btnAjouter");
const btnSup = document.querySelector(".btnSup");
const formText = document.querySelector(".formText");

btnAdd.addEventListener("click", () => {
  new Food();
});

class Food {
  constructor() {
    this.entreeHTML();
  }
  entreeHTML() {
    const entree = document.createElement("div");
    entree.classList.add("newEntree");

    entree.innerHTML = `
      <div class="entree"></div>
      <button class="btnSup">🚫</button>`;

    document.body.appendChild(entree);
  }
}

btnSup.addEventListener("click", () => {});
