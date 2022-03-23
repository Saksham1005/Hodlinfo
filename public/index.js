const chk = document.getElementById('chk');
const table=document.querySelector("table");

chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
    table.style.background="white";
});
