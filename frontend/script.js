async function check() {
  const url = document.getElementById("url").value;

  const res = await fetch("http://localhost:5000/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  document.getElementById("out").innerText = JSON.stringify(data, null, 2);
}
