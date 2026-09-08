document.getElementById("year").textContent = new Date().getFullYear();

// Ensure the uploaded portfolio portrait renders correctly in the hero.
(() => {
  const visual = document.querySelector(".hero-visual");
  if (!visual) return;

  let frame = visual.querySelector(".portrait-frame");
  const placeholder = visual.querySelector(".portrait-placeholder");

  if (!frame && placeholder) {
    frame = document.createElement("div");
    frame.className = "portrait-frame";
    placeholder.replaceWith(frame);
  }

  if (!frame) return;

  let photo = frame.querySelector(".profile-photo");
  if (!photo) {
    photo = document.createElement("img");
    photo.className = "profile-photo";
    photo.src = "profile.jpg.png?v=2";
    photo.alt = "Marion Justine Cordero";
    frame.appendChild(photo);
  }

  Object.assign(frame.style, {
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #6d5dfc",
    boxShadow: "0 0 55px rgba(99,102,241,.35), inset 0 0 50px rgba(99,102,241,.15)",
    background: "#141427",
    position: "relative"
  });

  Object.assign(photo.style, {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block"
  });

  const resizePortrait = () => {
    if (window.innerWidth <= 480) {
      frame.style.width = "250px";
      frame.style.height = "250px";
    } else if (window.innerWidth <= 800) {
      frame.style.width = "310px";
      frame.style.height = "310px";
    } else {
      frame.style.width = "380px";
      frame.style.height = "380px";
    }
  };

  resizePortrait();
  window.addEventListener("resize", resizePortrait);
})();
