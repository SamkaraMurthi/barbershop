let emailbody = ""; // Declare emailbody globally

document.addEventListener("DOMContentLoaded", function () {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get the values of portfolio1 and portfolio2 from the query parameters
    const portfolio1Value = parseInt(urlParams.get('portfolio1')) || 0;
    const portfolio2Value = parseInt(urlParams.get('portfolio2')) || 0;

    // Update the porto array with the retrieved values
    let porto = [portfolio1Value, portfolio2Value];

    // Update the text content on the page
    document.querySelector(".haircut-total").textContent = porto[0] + " x 50PLN";
    document.querySelector(".beard-total").textContent = porto[1] + " x 20PLN";
    document.querySelector(".total").textContent = ((portfolio1Value * 50) + (portfolio2Value * 20)) + " PLN";

    emailbody = "Your Order is :\n" + "Haircut : " + portfolio1Value + " x 50 PLN" + "\nBeard Shaving : " + portfolio2Value + " x 20 PLN\n";
});

function backBtn() {
    window.location.href = 'servicelist.html';
}

function reservation() {
    let name = document.getElementById('fullname').value;
    let selectedDate = document.getElementById('datepick').value;
    let dateString = String(selectedDate);
    let msg = name + "\n" + emailbody + "\nWith Date : " + dateString;
    let num = "2348178277291";
    let url = "https://wa.me/2348178277291"

    let end_url = `${url}?text=${msg}`;

    if (name === "") {
        alert("you have to fill your fullname");
    } else if (dateString === "") {
        alert("Please Pick a date of reservation");
    } else {
        window.location.href = end_url;
    }
}
