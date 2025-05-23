let medicines = [
    {name: "Paracetamol", quantity: 100, ingredient: "Acetaminophen", use: "Giảm đau, hạ sốt", dosage: "Uống 1 viên mỗi 6 giờ", sideEffects: "Buồn nôn, phát ban"},
    {name: "Ibuprofen", quantity: 50, ingredient: "Ibuprofen", use: "Giảm đau, kháng viêm", dosage: "Uống 1 viên mỗi 8 giờ", sideEffects: "Đau dạ dày, buồn nôn"},
    {name: "Amoxicillin", quantity: 75, ingredient: "Amoxicillin", use: "Kháng sinh, trị nhiễm khuẩn", dosage: "Uống 1 viên mỗi 12 giờ", sideEffects: "Dị ứng, tiêu chảy"}
];

function displayMedicines() {
    let table = document.getElementById("medicine-list");
    table.innerHTML = "";
    medicines.forEach(med => {
        let row = `<tr>
            <td onclick="showDetails('${med.name}', '${med.ingredient}', '${med.use}', '${med.dosage}', '${med.sideEffects}')">${med.name}</td>
            <td>${med.quantity}</td>
            <td><button class="delete-btn" onclick="removeMedicine('${med.name}')">Xóa</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function addMedicine(event) {
    event.preventDefault();
    let newMed = {
        name: document.getElementById("name").value,
        quantity: document.getElementById("quantity").value,
        ingredient: document.getElementById("ingredient").value,
        use: document.getElementById("use").value,
        dosage: document.getElementById("dosage").value,
        sideEffects: document.getElementById("sideEffects").value
    };
    medicines.push(newMed);
    displayMedicines();
    document.getElementById("medicine-form").reset();
}

function removeMedicine(name) {
    medicines = medicines.filter(med => med.name !== name);
    displayMedicines();
}

function searchMedicine() {
    let filter = document.getElementById("search").value.toLowerCase();
    let filtered = medicines.filter(med => med.name.toLowerCase().includes(filter));
    document.getElementById("medicine-list").innerHTML = "";
    filtered.forEach(med => {
        let row = `<tr>
            <td onclick="showDetails('${med.name}', '${med.ingredient}', '${med.use}', '${med.dosage}', '${med.sideEffects}')">${med.name}</td>
            <td>${med.quantity}</td>
            <td><button class="delete-btn" onclick="removeMedicine('${med.name}')">Xóa</button></td>
        </tr>`;
        document.getElementById("medicine-list").innerHTML += row;
    });
}

displayMedicines();