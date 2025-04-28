document.querySelector(".menu-item").addEventListener("mouseover", function() {
    document.getElementById("submenu").style.display = "block";
});

document.querySelector(".menu-item").addEventListener("mouseout", function() {
    document.getElementById("submenu").style.display = "none";
});

function showContent(section) {
    alert("Hiển thị nội dung: " + section);
}

        
        let patients = [];
        let medicalHistory = [];
        let danhSachHoSo = [];

function luuHoSo() {
    let tenBenhNhan = document.getElementById("tenBenhNhan").value;
    let tuoi = document.getElementById("tuoi").value;
    let maBenhNhan = document.getElementById("maBenhNhan").value;
    let chanDoan = document.getElementById("chanDoan").value;
    
    // Lấy danh sách các xét nghiệm được chọn
    let xetNghiemElements = document.querySelectorAll('input[name="xetNghiem"]:checked');
    let xetNghiem = Array.from(xetNghiemElements).map(e => e.value).join(", ");
    
    let ketQuaXetNghiem = document.getElementById("ketQuaXetNghiem").value;
    let ketLuan = document.getElementById("ketLuan").value;

    // Thêm hồ sơ vào danh sách
    danhSachHoSo.push({
        tenBenhNhan,
        tuoi,
        maBenhNhan,
        chanDoan,
        xetNghiem,
        ketQuaXetNghiem,
        ketLuan
    });
alert('Thêm bệnh án thành công ');
    hienThiDanhSach();
    document.getElementById("tenBenhNhan").value = "";
    document.getElementById("tuoi").value = "";
    document.getElementById("maBenhNhan").value = "";
    document.getElementById("chanDoan").value = "";
    document.querySelectorAll('input[name="xetNghiem"]').forEach(cb => cb.checked = false);
    document.getElementById("ketQuaXetNghiem").value = "";
    document.getElementById("ketLuan").value = "";
}

function hienThiDanhSach() {
    let tbody = document.getElementById("danhSachHoSo");
    tbody.innerHTML = "";
    danhSachHoSo.forEach((hs, index) => {
        let row = `<tr>
            <td>${hs.tenBenhNhan}</td>
            <td>${hs.tuoi}</td>
            <td>${hs.maBenhNhan}</td>
            <td>${hs.chanDoan}</td>
            <td>${hs.xetNghiem}</td>
            <td>${hs.ketQuaXetNghiem}</td>
            <td>${hs.ketLuan}</td>
            <td><button onclick="inBenhAn(${index})">In</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}


function inBenhAn(index) {
    let hs = danhSachHoSo[index];

    let content = `
        <h2>Hồ sơ bệnh án</h2>
        <p><strong>Tên bệnh nhân:</strong> ${hs.tenBenhNhan}</p>
        <p><strong>Tuổi:</strong> ${hs.tuoi}</p>
        <p><strong>Mã bệnh nhân:</strong> ${hs.maBenhNhan}</p>
        <p><strong>Chẩn đoán:</strong> ${hs.chanDoan}</p>
        <p><strong>Xét nghiệm:</strong> ${hs.xetNghiem}</p>
        <p><strong>Kết quả xét nghiệm:</strong> ${hs.ketQuaXetNghiem}</p>
        <p><strong>Kết luận bác sĩ:</strong> ${hs.ketLuan}</p>
    `;

    let newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(content);
    newWindow.document.close();
    newWindow.print();
}
        function showContent(sectionID) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionID).style.display = 'block';
        }

        function generatePatientID() {
            return 'BN' + Math.floor(100000 + Math.random() * 900000);
        }

        function confirmPatientRegistration() {
            let name = document.getElementById('patient-name').value.trim();
            let phone = document.getElementById('patient-phone').value.trim();
            let gender = document.getElementById('patient-gender').value;
            let age = document.getElementById('patient-age').value.trim();
            let cccd = document.getElementById('patient-cccd').value.trim();
            let history = document.getElementById('patient-history').value.trim();
            
            if (!name || !phone || !gender || !age || !cccd) {
                alert('Vui lòng nhập đầy đủ thông tin!');
                return;
            }
            
            let patientID = generatePatientID();
            patients.push({ id: patientID, name, phone, gender, age, cccd, history });
            alert(`Bệnh nhân ${name} đã được đăng ký với mã ${patientID}`);
            updatePatientList();
            showContent('patient-list');
            document.getElementById('patient-name').value = '';
    document.getElementById('patient-phone').value = '';
    document.getElementById('patient-gender').value = 'Nam';
    document.getElementById('patient-age').value = '';
    document.getElementById('patient-cccd').value = '';
    document.getElementById('patient-history').value = '';
        }
        function deletePatient(patientID) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa bệnh nhân này không?");
    if (confirmDelete) {
        patients = patients.filter(p => p.id !== patientID); // Xóa bệnh nhân khỏi danh sách
        updatePatientList(); // Cập nhật lại danh sách hiển thị
    }
}

        function updatePatientList() {
    let tableBody = document.getElementById("patient-list-content");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    patients.forEach((p, i) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.phone}</td>
            <td>${p.gender}</td>
            <td>${p.age}</td>
            <td>${p.cccd}</td>
            <td>${p.history}</td>
            <td><button onclick="deletePatient('${p.id}')">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}


        function addPatientHistory() {
            let patientID = document.getElementById('history-patient-id').value.trim();
            let date = document.getElementById('history-date').value;
            let diagnosis = document.getElementById('history-diagnosis').value.trim();
            let treatment = document.getElementById('history-treatment').value.trim();
            
            if (!patientID || !date || !diagnosis || !treatment) {
                alert('Vui lòng nhập đầy đủ thông tin!');
                return;
            }
            
            medicalHistory.push({ id: patientID, date, diagnosis, treatment });
            alert('Thêm thông tin thành công');
            updateHistoryList();
            document.getElementById('history-patient-id').value = '';
            document.getElementById('history-date').value = '';
            document.getElementById('history-diagnosis').value = '';
            document.getElementById('history-treatment').value = '';
        }

        function updateHistoryList() {
    let tableBody = document.getElementById("history-list");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    medicalHistory.forEach((entry, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.id}</td>
            <td>${entry.date}</td>
            <td>${entry.diagnosis}</td>
            <td>${entry.treatment}</td>
            <td><button onclick="deleteHistory(${index})">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

        function cancelPatientRegistration() {
    let confirmCancel = confirm("Bạn có chắc chắn muốn hủy đăng ký không? Thông tin nhập sẽ bị xóa.");
    if (confirmCancel) {
        // Xóa dữ liệu trong form
        document.getElementById('patient-name').value = '';
        document.getElementById('patient-phone').value = '';
        document.getElementById('patient-gender').value = 'Nam';
        document.getElementById('patient-age').value = '';
        document.getElementById('patient-cccd').value = '';
        document.getElementById('patient-history').value = '';

        // Quay lại màn hình chính hoặc danh sách bệnh nhân
        showContent('default'); 
    }
}
function deleteHistory(index) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa lịch sử khám bệnh này?");
    if (confirmDelete) {
        medicalHistory.splice(index, 1);
        updateHistoryList();
    }
}
function searchPatient() {
    let name = document.getElementById("search-name").value.trim().toLowerCase();
    let id = document.getElementById("search-id").value.trim().toLowerCase();
    let cccd = document.getElementById("search-cccd").value.trim().toLowerCase();

    let filteredPatients = patients.filter(p => 
        (name === "" || p.name.toLowerCase().includes(name)) &&
        (id === "" || p.id.toLowerCase().includes(id)) &&
        (cccd === "" || p.cccd.toLowerCase().includes(cccd))
    );

    let tableBody = document.getElementById("search-result-content");
    tableBody.innerHTML = "";

    filteredPatients.forEach((p, i) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.phone}</td>
            <td>${p.gender}</td>
            <td>${p.age}</td>
            <td>${p.cccd}</td>
            <td>${p.history}</td>
        `;
        tableBody.appendChild(row);
    });

    if (filteredPatients.length === 0) {
        alert("Không tìm thấy bệnh nhân nào.");
    }
}