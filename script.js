document.getElementById("year").textContent = new Date().getFullYear();

// Keep the public experience section accurate about direct employers,
// client accounts, work setup, locations, and the current role.
const experienceCards = document.querySelectorAll("#experience .portfolio-card");

experienceCards.forEach((card) => {
  const heading = card.querySelector("h3");
  const date = card.querySelector(".portfolio-number");
  const role = card.querySelector("p strong");

  if (!heading) return;

  const company = heading.textContent.trim();

  if (company === "Horizons Ventures LLC") {
    if (date) date.textContent = "FEB 2025 - PRESENT";
    heading.textContent = "Horizons Ventures LLC";
    if (role) role.textContent = "Phone Support Assistant • Remote / Work From Home • Part-Time";
  }

  if (company === "ViewQwest Singapore") {
    if (date) date.textContent = "JUN 2024 - JAN 2025";
    heading.textContent = "ViewQwest Singapore Account";
    if (role) role.textContent = "Sales Team Leader & Quality Assurance • BPO Company";
  }

  if (company === "IPSY") {
    if (date) date.textContent = "JUN 2023 - MAY 2024";
    if (role) role.textContent = "Customer Service Representative • eCommerce";
  }

  if (company === "TalentPop") {
    if (date) date.textContent = "DEC 2022 - MAY 2023";
    heading.textContent = "TalentPop";
    if (role) role.textContent = "Customer Service Representative • Freelance • Work From Home";
  }

  if (company === "T-Mobile") {
    if (date) date.textContent = "MAY 2022 - APR 2023";
    heading.textContent = "T-Mobile Account | Alorica";
    if (role) role.textContent = "Technical Support Representative • BPO • Davao City, Philippines";
  }

  if (company === "AT&T / Cricket Wireless") {
    if (date) date.textContent = "DEC 2021 - APR 2022";
    heading.textContent = "AT&T / Cricket Wireless Account | Concentrix";
    if (role) role.textContent = "Technical Support Representative • BPO • Davao City, Philippines";
  }

  if (company === "PayPal") {
    if (date) date.textContent = "NOV 2020 - DEC 2021";
    heading.textContent = "PayPal Account | VXI";
    if (role) role.textContent = "Customer Service Representative • Financial Services • BPO • Davao City, Philippines";
  }
});
