// used Youtube and Chatgpt for gsap
gsap.utils.toArray("h1").forEach((heading) => {
  gsap.from(heading, {
    x: -100, // Start position
    opacity: 0, // Start invisible
    duration: 4, // Animation duration
    scrollTrigger: {
      trigger: heading, // Trigger on the heading itself
      start: "top 70%", // When the top of the h1 is at 70% of the viewport
      end: "top 20%", // End when the top of the h1 is at 20% of the viewport
      scrub: true, // Smooth scrubbing
    },
  });
});

// GSAP animations for paragraphs
const paragraphs = document.querySelectorAll("p"); // Select all <p> elements

paragraphs.forEach((paragraph) => {
  gsap.from(paragraph, {
    scrollTrigger: {
      trigger: paragraph, // Trigger when the paragraph is in view
      start: "top 80%", // Adjust the start point of the animation
      end: "bottom 20%", // Adjust the end point if needed
      scrub: true, // Scrub the animation as you scroll
    },
    y: 100, // Start position for vertical movement
    opacity: 0, // Start with the paragraph invisible
    duration: 1.5, // Duration of the animation
    ease: "power2.out", // Ease of the animation
  });
});

// GSAP animations for images
const images = document.querySelectorAll(".image-container img"); // Select all images

images.forEach((image) => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image, // Trigger when the image is in view
      start: "top 80%", // When the top of the image is at 80% of the viewport
      end: "bottom 70%", // End when the bottom of the image is at 20% of the viewport
      scrub: true, // Scrub the animation as you scroll
    },
    scale: 0.8, // Start scale for the image
    opacity: 0, // Start with the image invisible
    duration: 5.5, // Duration of the animation
    ease: "power2.out", // Ease of the animation
  });
});

// Select the specific h1 in the HomeScreen
var textWrapper = document.querySelector(".HomeScreen h1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true }) // Keep the loop to repeat the animation
  .add({
    targets: ".HomeScreen .letter", // Target the letters within the HomeScreen
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  });
