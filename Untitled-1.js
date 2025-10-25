function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  const userinput = document.getElementById("date");
  const result = document.getElementById("result");

  const birthDate = new Date(userinput.value);
  if (isNaN(birthDate)) { result.textContent = "Date invalide"; return; }

  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth() + 1;
  const y1 = birthDate.getFullYear();

  const today = new Date();
  const d2 = today.getDate();
  const m2 = today.getMonth() + 1;
  const y2 = today.getFullYear();

  let y3 = y2 - y1;
  let m3, d3;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y2, m2) + d2 - d1;
  }

  if (m3 < 0) { m3 = 11; y3--; }

  result.innerHTML =
    `you are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days`;
}


document.addEventListener("DOMContentLoaded", () => {
  const userinput = document.getElementById("date");
  if (userinput) userinput.max = new Date().toISOString().split("T")[0];

  const btn = document.getElementById("calcBtn");
  if (btn) btn.addEventListener("click", calculateAge);
});
