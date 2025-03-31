function toggleForm() {
    var form = document.getElementById("employeeForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function addEmployee() {
    var name = document.getElementById("name").value;
    var cccd = document.getElementById("cccd").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    var image = document.getElementById("image").value || "https://via.placeholder.com/120x160";

    if (name === "" || cccd === "" || position === "" || department === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var employeeList = document.getElementById("employeeList");

    var employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");

    employeeDiv.innerHTML = `
        <img src="${image}" alt="Ảnh nhân viên">
        <div class="employee-name">${name}</div>
        <div class="employee-position">${position}</div>
        <div class="employee-position">CCCD: ${cccd}</div>
        <div class="employee-position">Khoa: ${department}</div>
    `;

    employeeList.appendChild(employeeDiv);

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("cccd").value = "";
    document.getElementById("position").value = "";
    document.getElementById("department").value = "";
    document.getElementById("image").value = "";

    // Ẩn form sau khi thêm
    document.getElementById("employeeForm").style.display = "none";
}

function toggleForm() {
    var form = document.getElementById("employeeForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function addEmployee() {
    var name = document.getElementById("name").value;
    var cccd = document.getElementById("cccd").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    var image = document.getElementById("image").value || "https://via.placeholder.com/120x160";

    if (name === "" || cccd === "" || position === "" || department === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var employeeList = document.getElementById("employeeList");

    var employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
    employeeDiv.setAttribute("data-name", name.toLowerCase()); // Lưu tên dưới dạng chữ thường
    employeeDiv.setAttribute("data-cccd", cccd); // Lưu số CCCD để tìm kiếm

    employeeDiv.innerHTML = `
        <img src="${image}" alt="Ảnh nhân viên">
        <div class="employee-name">${name}</div>
        <div class="employee-position">${position}</div>
        <div class="employee-position">CCCD: ${cccd}</div>
        <div class="employee-position">Khoa: ${department}</div>
    `;

    employeeDiv.innerHTML = `
        <img src="${image}" alt="Ảnh nhân viên">
        <div class="employee-name">${name}</div>
        <div class="employee-position">${position}</div>
        <div class="employee-position employee-cccd">CCCD: ${cccd}</div>
        <div class="employee-position employee-department">Khoa: ${department}</div>
        <button onclick="editEmployee(this)">Chỉnh sửa</button>
`;
    employeeDiv.innerHTML = `
        <img src="${image}" alt="Ảnh nhân viên">
        <div class="employee-name">${name}</div>
        <div class="employee-position">${position}</div>
        <div class="employee-department">${department}</div>
        <div class="employee-cccd">CCCD: ${cccd}</div>
        <button class="edit-button" onclick="editEmployee(this)">Chỉnh sửa</button>
        <button class="delete-button" onclick="deleteEmployee(this)">Xóa</button>
    `;
    employeeList.appendChild(employeeDiv);

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("cccd").value = "";
    document.getElementById("position").value = "";
    document.getElementById("department").value = "";
    document.getElementById("image").value = "";

    // Ẩn form sau khi thêm
    document.getElementById("employeeForm").style.display = "none";
}

function editEmployee(button) {
    const employeeDiv = button.parentElement;
    document.getElementById('name').value = employeeDiv.querySelector('.employee-name').innerText;
    document.getElementById('position').value = employeeDiv.querySelector('.employee-position').innerText;
    document.getElementById('department').value = employeeDiv.querySelector('.employee-department').innerText;
    document.getElementById('cccd').value = employeeDiv.querySelector('.employee-cccd').innerText.replace('CCCD: ', '');
    document.getElementById('image').value = employeeDiv.querySelector('img').src;
    employeeDiv.remove();
    toggleForm();
}

function deleteEmployee(button) {
    if (confirm('Bạn có chắc chắn muốn xóa nhân sự này?')) {
        button.parentElement.remove();
    }
}

function searchEmployee() {
    var searchValue = document.querySelector(".search-box").value.toLowerCase();
    var employees = document.querySelectorAll(".employee");

    employees.forEach(employee => {
        var name = employee.getAttribute("data-name");
        var cccd = employee.getAttribute("data-cccd");

        if (name.includes(searchValue) || cccd.includes(searchValue)) {
            employee.style.display = "block";
        } else {
            employee.style.display = "none";
        }
    });
}

// Gắn sự kiện tìm kiếm khi nhập vào ô tìm kiếm
document.querySelector(".search-box").addEventListener("input", searchEmployee);
