function openDialog() {
    var modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "flex";
}

function validateForm() {
    var checkInDate = document.getElementById("check-in").value;
    var checkOutDate = document.getElementById("check-out").value;

    if (checkInDate === "" || checkOutDate === "") {
        alert("Please enter both check-in and check-out dates.");
        return;
    }

    if (checkInDate > checkOutDate) {
        alert("Check-in date must be before check-out date.");
        return;
    }

    // Proceed with form submission
    document.querySelector("form").submit();
}