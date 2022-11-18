function calcFunc() {
  document.getElementById("btn");
  let t = parseInt(document.getElementById("height").value),
    e = parseInt(document.getElementById("weight").value),
    l = document.getElementById("res-val"),
    o = document.getElementById("res-cat"),
    n = (e / Math.pow(t / 100, 2)).toFixed(1);
  (l.textContent = n),
    (l.style.opacity = 1),
    n < 18.5
      ? ((o.textContent = "underweight"),
        (o.style.color = "#F49D1A"),
        (o.style.opacity = 1))
      : n >= 18.5 && n < 24.9
      ? ((o.textContent = "Healthy Weight"),
        (o.style.color = "#54B435"),
        (o.style.opacity = 1))
      : n >= 25 && n < 29.9
      ? ((o.textContent = "overweight"),
        (o.style.color = "#E0144C"),
        (o.style.opacity = 1))
      : n > 30
      ? ((o.textContent = "obese"),
        (o.style.color = "#CF0A0A"),
        (o.style.opacity = 1))
      : ((l.textContent = "PLEASE CHECK YOUR ENTRIES"), (o.style.opacity = 0));
}
