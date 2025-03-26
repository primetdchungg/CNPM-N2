let currentStep = 1;
let currentQueue = 1;

let waitingPatients = [
    { name: "Nguyễn Văn A", age: "30",gender:"Nam", issue: "Ho kéo dài", history: "Viêm phế quản" },
    { name: "Trần Thị B", age: "25",gender:"Nữ", issue: "Đau đầu", history: "Chấn thương vùng đầu" },
    { name: "Lê Văn C", age: "40",gender:"Nam", issue: "Huyết áp cao", history: "Bệnh tim" }
];
// Cập nhật danh sách chờ với sự kiện chọn bệnh nhân
function updateWaitingList() {
    let listContainer = document.getElementById("waiting-list");
    let countContainer = document.getElementById("waiting-count");

    // Xóa danh sách cũ
    listContainer.innerHTML = "";

    // Cập nhật số bệnh nhân đang chờ
    countContainer.innerText = waitingPatients.length;

    // Hiển thị danh sách bệnh nhân còn lại
    waitingPatients.forEach((patient, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${index + 1}. ${patient.name}</strong>`;
        listItem.style.cursor = "pointer"; // Thêm hiệu ứng nhấn vào
        listItem.onclick = () => updatePatientRecord(patient); // Gán sự kiện click
        listContainer.appendChild(listItem);
    });
}

// Cập nhật thông tin vào Hồ sơ bệnh án
function updatePatientRecord(patient) {
    document.getElementById("patient-name").innerText = patient.name;
    document.getElementById("patient-age").innerText = patient.age;   
    document.getElementById("patient-issue").innerText = patient.issue;
    document.getElementById("patient-history").innerText = patient.history;
}

// Gọi hàm để cập nhật danh sách khi trang tải
updateWaitingList();

// Cập nhật số thứ tự hiện tại
function updateQueueDisplay() {
    document.getElementById("currentQueue").innerText = currentQueue;
}

// Tăng số thứ tự bệnh nhân
function increaseQueue() {
    currentQueue++;
    updateQueueDisplay();
}

// Giảm số thứ tự bệnh nhân (không nhỏ hơn 1)
function decreaseQueue() {
    if (currentQueue > 1) {
        currentQueue--;
        updateQueueDisplay();
    }
}

// Chuyển đến bước tiếp theo nếu đã nhập đầy đủ dữ liệu
function nextStep() {
    if (currentStep < 7) {
        if (!validateStep()) {
            alert("Vui lòng điền đầy đủ thông tin trước khi tiếp tục.");
            return;
        }
        document.getElementById(`step-${currentStep}`).classList.add("hidden");
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.remove("hidden");
    }
}

// Quay lại bước trước đó
function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.add("hidden");
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.remove("hidden");
    }
}

// Hàm hoàn tất khám bệnh nhân
function finishCurrentPatient() {
    alert(`Bệnh nhân số ${currentQueue} đã hoàn tất khám.`);

    // Xóa bệnh nhân đầu tiên trong danh sách chờ nếu còn bệnh nhân
    if (waitingPatients.length > 0) {
        waitingPatients.shift(); // Xóa bệnh nhân đầu tiên
        updateWaitingList(); // Cập nhật danh sách hiển thị
    }

    // Reset về bước 1 và xóa dữ liệu đã nhập
    resetForm();

    // Chuyển sang bệnh nhân tiếp theo
    increaseQueue();
    showStep(1);
}

// Hiển thị từng bước và ẩn các bước khác
function showStep(step) {
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`step-${i}`).classList.add("hidden");
    }
    document.getElementById(`step-${step}`).classList.remove("hidden");
}

// Kiểm tra xem tất cả ô input/textarea đã nhập chưa
function validateStep() {
    let stepElement = document.getElementById(`step-${currentStep}`);
    let inputs = stepElement.querySelectorAll("input, textarea");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            return false; // Nếu có ô trống, không cho chuyển bước
        }
    }
    return true; // Tất cả đều đã nhập
}

// Xóa toàn bộ dữ liệu trong input & textarea
function resetForm() {
    let inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.value = ""; // Xóa nội dung nhập
    });
    currentStep = 1; // Reset về bước 1
}
// Gọi hàm để cập nhật danh sách khi trang tải
updateWaitingList();
updateQueueDisplay();
