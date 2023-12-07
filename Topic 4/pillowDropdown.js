// pillowDropdown.js

document.addEventListener("DOMContentLoaded", function () {
    const pillowDropdown = document.getElementById("pillowDropdown");
    const pillowName = document.getElementById("pillowName");
    const pillowPrice = document.getElementById("pillowPrice");

    pillowDropdown.addEventListener("change", function () {
        const selectedPillowIndex = pillowDropdown.selectedIndex;
        if (selectedPillowIndex > 0) {
            const selectedOption = pillowDropdown.options[selectedPillowIndex];
            const price = selectedOption.value;
            const name = selectedOption.textContent.split(" - ")[0];
            pillowName.textContent = name;
            pillowPrice.textContent = price;
        } else {
            pillowName.textContent = "N/A";
            pillowPrice.textContent = "0";
        }
    });
});