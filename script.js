function showConfession() {
    document.getElementById('start').classList.add('hidden');
    document.getElementById('confession').classList.remove('hidden');
}

function revealPrank() {
    document.getElementById('confession').classList.add('hidden');
    document.getElementById('prank').classList.remove('hidden');
}
