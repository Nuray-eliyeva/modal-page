function openModal() {
    document.getElementById('Modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('Modal').style.display = "none";
}

document.getElementById('closeSpan').addEventListener('click', () => {
    closeModal();
});
