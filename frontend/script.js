// async function check() {
//   const url = document.getElementById("url").value;

//   const res = await fetch("http://localhost:3000/api/check", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ url }),
//   });

//   const data = await res.json();
//   document.getElementById("out").innerText = JSON.stringify(data, null, 2);
// }

// async function download() {
//   const url = document.getElementById("url").value;

//   if (!url) {
//     alert("Please enter a URL");
//     return;
//   }

//   const res = await fetch("http://localhost:3000/api/download", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       url: url,
//       type: "image", // abhi version 1 me fixed
//     }),
//   });

//   if (!res.ok) {
//     const err = await res.json();
//     alert(err.message || "Download failed");
//     return;
//   }

//   // 👇 Browser download logic
//   const blob = await res.blob();
//   const downloadUrl = window.URL.createObjectURL(blob);

//   const a = document.createElement("a");
//   a.href = downloadUrl;
//   a.download = "downloaded-file.jpg"; // naam frontend se
//   document.body.appendChild(a);
//   a.click();

//   a.remove();
//   window.URL.revokeObjectURL(downloadUrl);
// }
