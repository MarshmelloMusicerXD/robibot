/* ================================================= */
/* ROBI WEBSITE CONFIGURATION                        */
/* EDIT ONLY THIS SECTION                            */
/* ================================================= */

/* Bot Logo URL */
const logoUrl =
  "https://placehold.co/600x600/png";

/* Invite Button Link */
const inviteLink =
  "https://discord.com/oauth2/authorize";

/* Support Server Link */
const supportLink =
  "https://discord.gg/example";

/* Feature Slideshow Data */
const features = [
  {
    title: "Moderation",
    description:
      "Powerful moderation tools including automod, warnings, logging, anti-spam, anti-raid, and advanced role management.",
    image:
      "https://placehold.co/500x300/png?text=Moderation"
  },

  {
    title: "Music",
    description:
      "High-quality music playback with queue management, playlists, filters, looping, and more.",
    image:
      "https://placehold.co/500x300/png?text=Music"
  },

  {
    title: "Automation",
    description:
      "Automate repetitive tasks using welcome systems, auto roles, reminders, scheduled messages, and more.",
    image:
      "https://placehold.co/500x300/png?text=Automation"
  },

  {
    title: "Utilities",
    description:
      "Useful commands and tools designed to improve your community experience.",
    image:
      "https://placehold.co/500x300/png?text=Utilities"
  },

  {
    title: "Dashboard",
    description:
      "Control every aspect of Robi through a clean and powerful web dashboard.",
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

    });

    dotsContainer.appendChild(dot);

  });

  updateSlide();

  /* Auto Slide Every 3 Seconds */

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= features.length) {
      currentSlide = 0;
    }

    updateSlide();

  }, 3000);

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

  /* Fade Out */

  image.style.opacity = "0";
  title.style.opacity = "0";
  description.style.opacity = "0";

  setTimeout(() => {

    image.src =
      feature.image;

    title.textContent =
      feature.title;

    description.textContent =
      feature.description;

    image.style.opacity = "1";
    title.style.opacity = "1";
    description.style.opacity = "1";

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

    sparkle.style.left =
      `${target.offsetLeft + (Math.random() * target.offsetWidth)}px`;

    sparkle.style.top =
      `${target.offsetTop - 20 + (Math.random() * 50)}px`;

    sparkle.style.background =
      "linear-gradient(90deg,#0025fd,#011491)";

    sparkle.style.webkitBackgroundClip =
      "text";

    sparkle.style.webkitTextFillColor =
      "transparent";

    sparkle.style.opacity =
      "0";

    sparkle.style.transition =
      "all 1.5s ease";

    parent.appendChild(sparkle);

    requestAnimationFrame(() => {

      sparkle.style.opacity =
        "1";

      sparkle.style.transform =
        "translateY(-20px) scale(1.2)";

    });

    setTimeout(() => {

      sparkle.style.opacity =
        "0";

      sparkle.style.transform =
        "translateY(-40px) scale(0.7)";

    }, 900);

    setTimeout(() => {

      sparkle.remove();

    }, 1800);

  }, 500);

}

/* ================================================= */
/* FOOTER LINKS                                      */
/* ================================================= */

const footerLinks =
  document.querySelectorAll(
    ".footer-links a"
  );

footerLinks.forEach(link => {

  const text =
    link.textContent.trim();

  if (text === "Discord") {

    link.href =
      supportLink;

  }

});

/* ================================================= */
/* OPTIONAL CONSOLE MESSAGE                          */
/* ================================================= */

console.log(
  "%cRobi Website Loaded",
  "color:#0025fd;font-size:18px;font-weight:bold;"
);