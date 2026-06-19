document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("https://ecommerce-store-6170.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      window.location.href = "index.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Something went wrong");
  }
});