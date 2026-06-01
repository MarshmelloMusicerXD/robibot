/* ================================================= */
/* ROBI WEBSITE CONFIGURATION                        */
/* EDIT ONLY THIS SECTION                            */
/* ================================================= */

/* Bot Logo URL */
const logoUrl =
  "https://cdn.discordapp.com/attachments/1045064396726083675/1068646904294031400/OuO.png";

/* Invite Button Link */
const inviteLink =
  "https://discord.com/oauth2/authorize";

/* Support Server Link */
const supportLink =
  "https://discord.gg/example";

/* Feature Slideshow Data */
const features = [
  {
    title: "Advanced Moderation",
    description:
      "Keep your server safe and organized with powerful moderation tools.",
    image:
      "https://cdn.discordapp.com/attachments/1044971082970583061/1510754601727688887/1000409262-removebg-preview.png?ex=6a1ea01d&is=6a1d4e9d&hm=260ad12a6a6264d27051e39d1687bebd5238de65ed0859221ef26952a1ecf8e8&"
  },

  {
    title: "Smart Ticket System",
    description:
      "Provide professional support fully automated ticket system.",
    image:
      "https://cdn.discordapp.com/attachments/1044971082970583061/1510754602033746030/pngtree-modern-transparent-and-gold-3d-render-ticket-icon-png-image_16627874.webp?ex=6a1ea01d&is=6a1d4e9d&hm=e054ab22591e3c6f54d6ba8f756b4f141bd0d857c8e54e4f9020e10bea5bbc06&"
  },

  {
    title: "Leveling & Ranking",
    description:
      "Reward active members with XP, ranks, and role rewards.",
    image:
      "https://cdn.discordapp.com/attachments/1044971082970583061/1510755119111733328/1000409268-removebg-preview.png?ex=6a1ea098&is=6a1d4f18&hm=0a1dc2c174c65e9eab91cf0b60d3e217970f6e7c04f9fb034c8fa2680ad97ccc&"
  },

  {
    title: "Giveaways",
    description:
      "Host exciting giveaways in seconds.",
    image:
      "https://placehold.co/500x300/png?text=Utilities"
  },

  {
    title: "Verification",
    description:
      "Protect your server from spam accounts and unwanted users.",
    image:
      "https://placehold.co/500x300/png?text=Dashboard"
  }
];

/* ================================================= */
/* PAGE INITIALIZATION                               */
/* ================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeLogo();

  initializeButtons();

  generateBubbles();

  initializeSlider();

  initializeScrollAnimations();

  generateSparkles();

});

/* ================================================= */
/* LOGO LOADER                                       */
/* ================================================= */

function initializeLogo() {

  const logo =
    document.getElementById("hero-logo");

  if (logo) {
    logo.src = logoUrl;
  }

}

/* ================================================= */
/* BUTTON LINKS                                      */
/* ================================================= */

function initializeButtons() {

  const buttons =
    document.querySelectorAll(".btn-primary");

  buttons.forEach(button => {

    button.href = inviteLink;

  });

  const secondaryButtons =
    document.querySelectorAll(".btn-secondary");

  secondaryButtons.forEach(button => {

    button.href = supportLink;

  });

}

/* ================================================= */
/* FLOATING BUBBLES                                  */
/* ================================================= */

function generateBubbles() {

  const container =
    document.getElementById("bubbles-container");

  if (!container) return;

  for (let i = 0; i < 15; i++) {

    const bubble =
      document.createElement("div");

    bubble.classList.add("bubble");

    const size =
      Math.random() * 300 + 150;

    bubble.style.width =
      `${size}px`;

    bubble.style.height =
      `${size}px`;

    bubble.style.left =
      `${Math.random() * 100}%`;

    bubble.style.top =
      `${Math.random() * 100}%`;

    bubble.style.animationDuration =
      `${20 + Math.random() * 20}s`;

    bubble.style.animationDelay =
      `${Math.random() * 10}s`;

    container.appendChild(bubble);

  }

}

/* ================================================= */
/* FEATURE SLIDER                                    */
/* ================================================= */

let currentSlide = 0;
let slideAutoPlay;

function initializeSlider() {

  const image =
    document.getElementById("feature-image");

  const title =
    document.getElementById("feature-title");

  const description =
    document.getElementById("feature-description");

  const dotsContainer =
    document.getElementById("slider-dots");

  if (
    !image ||
    !title ||
    !description ||
    !dotsContainer
  ) {
    return;
  }

  /* Create Navigation Dots */

  features.forEach((feature, index) => {

    const dot =
      document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

      currentSlide = index;

      updateSlide();

      resetAutoPlay();

    });

    dotsContainer.appendChild(dot);

  });

  /* Create Navigation Buttons */

  const sliderContainer = document.querySelector(".feature-slider-container");

  const navContainer = document.createElement("div");
  navContainer.className = "slider-nav";

  const prevBtn = document.createElement("button");
  prevBtn.className = "slider-btn";
  prevBtn.innerHTML = "❮";
  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = features.length - 1;
    }
    updateSlide();
    resetAutoPlay();
  });

  const nextBtn = document.createElement("button");
  nextBtn.className = "slider-btn";
  nextBtn.innerHTML = "❯";
  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= features.length) {
      currentSlide = 0;
    }
    updateSlide();
    resetAutoPlay();
  });

  navContainer.appendChild(prevBtn);
  navContainer.appendChild(dotsContainer);
  navContainer.appendChild(nextBtn);

  sliderContainer.appendChild(navContainer);

  updateSlide();

  /* Auto Slide Every 5 Seconds */

  startAutoPlay();

}

function startAutoPlay() {

  slideAutoPlay = setInterval(() => {

    currentSlide++;

    if (currentSlide >= features.length) {
      currentSlide = 0;
    }

    updateSlide();

  }, 5000);

}

function resetAutoPlay() {

  clearInterval(slideAutoPlay);

  startAutoPlay();

}

/* ================================================= */
/* UPDATE FEATURE SLIDE                              */
/* ================================================= */

function updateSlide() {

  const image =
    document.getElementById("feature-image");

  const title =
    document.getElementById("feature-title");

  const description =
    document.getElementById("feature-description");

  const dots =
    document.querySelectorAll(".dot");

  const feature =
    features[currentSlide];

  if (!feature) return;

  /* Slide Out Animation */

  image.style.opacity = "0";
  title.style.opacity = "0";
  description.style.opacity = "0";

  image.style.transform = "translateX(-20px)";
  title.style.transform = "translateX(-20px)";
  description.style.transform = "translateX(-20px)";

  setTimeout(() => {

    image.src = feature.image;

    title.textContent = feature.title;

    description.textContent = feature.description;

    /* Slide In Animation */

    image.style.opacity = "1";
    title.style.opacity = "1";
    description.style.opacity = "1";

    image.style.transform = "translateX(0)";
    title.style.transform = "translateX(0)";
    description.style.transform = "translateX(0)";

  }, 200);

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  if (dots[currentSlide]) {
    dots[currentSlide]
      .classList.add("active");
  }

}

/* ================================================= */
/* SCROLL ANIMATIONS                                 */
/* ================================================= */

function initializeScrollAnimations() {

  const sections =
    document.querySelectorAll(".fade-section");

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

          }

        });

      },

      {
        threshold: 0.15
      }

    );

  sections.forEach(section => {

    observer.observe(section);

  });

}

/* ================================================= */
/* SPARKLES                                          */
/* ================================================= */

function generateSparkles() {

  const target =
    document.getElementById("robi-text");

  if (!target) return;

  const parent =
    target.parentElement;

  if (!parent) return;

  setInterval(() => {

    const sparkle =
      document.createElement("span");

    sparkle.innerHTML = "✦";

    sparkle.style.position =
      "absolute";

    sparkle.style.pointerEvents =
      "none";

    sparkle.style.fontSize =
      `${12 + Math.random() * 12}px`;

    /* Random position around the text */
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 40;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    sparkle.style.left =
      `${target.offsetLeft + target.offsetWidth / 2 + offsetX}px`;

    sparkle.style.top =
      `${target.offsetTop + target.offsetHeight / 2 + offsetY}px`;

    sparkle.style.color =
      "#0025fd";

    sparkle.style.opacity =
      "0";

    sparkle.style.transition =
      "opacity 0.8s ease-in-out";

    parent.appendChild(sparkle);

    requestAnimationFrame(() => {

      sparkle.style.opacity =
        Math.random() * 0.8 + 0.2;

    });

    setTimeout(() => {

      sparkle.style.opacity =
        "0";

    }, 1200 + Math.random() * 800);

    setTimeout(() => {

      sparkle.remove();

    }, 2000);

  }, 400);

}

/* ================================================= */
/* OPTIONAL CONSOLE MESSAGE                          */
/* ================================================= */

console.log(
  "%cRobi Website Loaded",
  "color:#0025fd;font-size:18px;font-weight:bold;"
);
