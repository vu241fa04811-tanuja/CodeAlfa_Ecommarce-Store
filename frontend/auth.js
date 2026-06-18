const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("loggedInUser");

        alert("Logged Out Successfully!");

        window.location.href = "login.html";
    });
}