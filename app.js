// Open the modal
function openModal(service) {
    var modal = document.getElementById(service + '-modal');
    modal.style.display = 'flex'; // Show the modal
}

// Close the modal
function closeModal(service) {
    var modal = document.getElementById(service + '-modal');
    modal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
