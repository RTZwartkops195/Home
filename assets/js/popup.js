function showPopup(e) {
        e.preventDefault();
        document.getElementById('popupModal').style.display = 'flex';
    }
    function closePopup() {
        document.getElementById('popupModal').style.display = 'none';
    }