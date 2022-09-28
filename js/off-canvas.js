//**** */ Off Canvas MODEL *****//

const modalButton = document.querySelector(".jsModalButton");
const body = document.body;
// Animating 'waving-hand' with JavaScript GSAP animation API.
const hand = document.querySelector(".wave-hand");
const wave = (_) => {
  const tl = new TimelineMax({});
  tl.set(hand, { transformOrigin: "bottom center" });
  tl.from(hand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5),
  });
  tl.to(hand, 0.2, { rotation: 15 });
  tl.to(hand, 0.2, { rotation: -15 });
  tl.to(hand, 0.2, { rotation: 15 });
  tl.to(hand, 0.2, { rotation: -15 });
  tl.to(hand, 0.2, { rotation: 0 });
};

modalButton.addEventListener("click", (event) => {
  body.classList.add("modal-is-open");
  wave();
});

// const modalButton = document.querySelector(".jsModalButton");
const closeButton = document.querySelector(".jsModalClose");

modalButton.addEventListener("click", (event) => {
  document.body.classList.add("modal-is-open");
});

closeButton.addEventListener("click", (event) => {
  document.body.classList.remove("modal-is-open");
});

// CLOSES model when user clicks on modal overlay.
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

// modalOverlay.addEventListener("click", (e) => {
//   // console.log(e.target);
//     body.classList.remove("modal-is-open");
// });
//a problem is that, whenever user click even inside the modal or svg in modal, modal will close bcz of event propagation (bubbling). We stop this using following.

// modal.addEventListener("click", (e) => {
//   e.stopPropagation();
// });

// With stop propagation, a problem occurs that it never let any event or click pass through it to another element or even body bcz it totally bans the bubbling of events upward. So we have to find another method. In this method, we will first check if modal is NOT parent of the element on which we added event listener, close the modal. This is safer than stop propagation() bcz it does not stop bubbling of events/clicks. Here we will edit our event listener on modalOverlay:-

modalOverlay.addEventListener("click", (e) => {
  // console.log(e.target);
  if (!e.target.closest(".modal")) {
    body.classList.remove("modal-is-open");
  }
});

// =========================================================