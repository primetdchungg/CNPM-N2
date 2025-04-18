 /* ============= Chức năng dùng chung ============= */
    // Hàm chuyển đổi trạng thái của giường theo thứ tự: "Trống" -> "Đang sử dụng" -> "Cần vệ sinh" -> "Trống"
    function cycleStatusGeneric(bed) {
        const statuses = ["Trống", "Đang sử dụng", "Cần vệ sinh"];
        let currentStatus = bed.dataset.status;
        let currentIndex = statuses.indexOf(currentStatus);
        let nextIndex = (currentIndex + 1) % statuses.length;
        bed.dataset.status = statuses[nextIndex];
        bed.textContent = "Giường " + bed.dataset.number + " - " + bed.dataset.status;
      }
  
      /* ============= Khoa cấp cứu ============= */
      function showEmergencyRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('emergency-section').classList.remove('hidden');
      }
      function goBack() {
        // Sử dụng chung cho các khoa nếu muốn quay lại danh sách khoa
        document.getElementById('departments').classList.remove('hidden');
        // Ẩn tất cả các section khoa
        document.getElementById('emergency-section').classList.add('hidden');
        document.getElementById('intensive-section').classList.add('hidden');
        document.getElementById('trauma-section').classList.add('hidden');
        document.getElementById('neurology-section').classList.add('hidden');
        document.getElementById('neurosurgery-section').classList.add('hidden');
        document.getElementById('respiratory-section').classList.add('hidden');
        // Ẩn các phần giường
        document.getElementById('bed-section').classList.add('hidden');
        document.getElementById('intensive-bed-section').classList.add('hidden');
        document.getElementById('trauma-bed-section').classList.add('hidden');
        document.getElementById('neurology-bed-section').classList.add('hidden');
        document.getElementById('neurosurgery-bed-section').classList.add('hidden');
        document.getElementById('respiratory-bed-section').classList.add('hidden');
      }
      function showBeds(room) {
        document.getElementById('emergency-rooms').classList.add('hidden');
        document.getElementById('bed-section').classList.remove('hidden');
        document.getElementById('bed-header').textContent = room;
        let bedList = document.getElementById('bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBed();
        }
      }
      function goBackToRooms() {
        document.getElementById('bed-section').classList.add('hidden');
        document.getElementById('emergency-rooms').classList.remove('hidden');
      }
      function addBed() {
        let bedList = document.getElementById('bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBed() {
        let bedList = document.getElementById('bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }
  
      /* ============= Khoa hồi sức ============= */
      function showIntensiveCareRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('intensive-section').classList.remove('hidden');
      }
      function goBackFromIntensive() {
        goBack();
      }
      function showIntensiveBeds(room) {
        document.getElementById('intensive-rooms').classList.add('hidden');
        document.getElementById('intensive-bed-section').classList.remove('hidden');
        document.getElementById('intensive-bed-header').textContent = room;
        let bedList = document.getElementById('intensive-bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBedIntensive();
        }
      }
      function goBackToIntensiveRooms() {
        document.getElementById('intensive-bed-section').classList.add('hidden');
        document.getElementById('intensive-rooms').classList.remove('hidden');
      }
      function addBedIntensive() {
        let bedList = document.getElementById('intensive-bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBedIntensive() {
        let bedList = document.getElementById('intensive-bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }
  
      /* ============= Khoa chấn thương chỉnh hình ============= */
      function showTraumaRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('trauma-section').classList.remove('hidden');
      }
      function goBackFromTrauma() {
        goBack();
      }
      function showTraumaBeds(room) {
        document.getElementById('trauma-rooms').classList.add('hidden');
        document.getElementById('trauma-bed-section').classList.remove('hidden');
        document.getElementById('trauma-bed-header').textContent = room;
        let bedList = document.getElementById('trauma-bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBedTrauma();
        }
      }
      function goBackToTraumaRooms() {
        document.getElementById('trauma-bed-section').classList.add('hidden');
        document.getElementById('trauma-rooms').classList.remove('hidden');
      }
      function addBedTrauma() {
        let bedList = document.getElementById('trauma-bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBedTrauma() {
        let bedList = document.getElementById('trauma-bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }
  
      /* ============= Khoa nội thần kinh ============= */
      function showNeurologyRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('neurology-section').classList.remove('hidden');
      }
      function goBackFromNeurology() {
        goBack();
      }
      function showNeurologyBeds(room) {
        document.getElementById('neurology-rooms').classList.add('hidden');
        document.getElementById('neurology-bed-section').classList.remove('hidden');
        document.getElementById('neurology-bed-header').textContent = room;
        let bedList = document.getElementById('neurology-bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBedNeurology();
        }
      }
      function goBackToNeurologyRooms() {
        document.getElementById('neurology-bed-section').classList.add('hidden');
        document.getElementById('neurology-rooms').classList.remove('hidden');
      }
      function addBedNeurology() {
        let bedList = document.getElementById('neurology-bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBedNeurology() {
        let bedList = document.getElementById('neurology-bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }
  
      /* ============= Khoa ngoại thần kinh ============= */
      function showNeurosurgeryRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('neurosurgery-section').classList.remove('hidden');
      }
      function goBackFromNeurosurgery() {
        goBack();
      }
      function showNeurosurgeryBeds(room) {
        document.getElementById('neurosurgery-rooms').classList.add('hidden');
        document.getElementById('neurosurgery-bed-section').classList.remove('hidden');
        document.getElementById('neurosurgery-bed-header').textContent = room;
        let bedList = document.getElementById('neurosurgery-bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBedNeurosurgery();
        }
      }
      function goBackToNeurosurgeryRooms() {
        document.getElementById('neurosurgery-bed-section').classList.add('hidden');
        document.getElementById('neurosurgery-rooms').classList.remove('hidden');
      }
      function addBedNeurosurgery() {
        let bedList = document.getElementById('neurosurgery-bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBedNeurosurgery() {
        let bedList = document.getElementById('neurosurgery-bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }
  
      /* ============= Khoa hô hấp ============= */
      function showRespiratoryRooms() {
        document.getElementById('departments').classList.add('hidden');
        document.getElementById('respiratory-section').classList.remove('hidden');
      }
      function goBackFromRespiratory() {
        goBack();
      }
      function showRespiratoryBeds(room) {
        document.getElementById('respiratory-rooms').classList.add('hidden');
        document.getElementById('respiratory-bed-section').classList.remove('hidden');
        document.getElementById('respiratory-bed-header').textContent = room;
        let bedList = document.getElementById('respiratory-bed-list');
        bedList.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
          addBedRespiratory();
        }
      }
      function goBackToRespiratoryRooms() {
        document.getElementById('respiratory-bed-section').classList.add('hidden');
        document.getElementById('respiratory-rooms').classList.remove('hidden');
      }
      function addBedRespiratory() {
        let bedList = document.getElementById('respiratory-bed-list');
        let newBed = document.createElement('div');
        let bedNumber = bedList.children.length + 1;
        newBed.dataset.number = bedNumber;
        newBed.dataset.status = "Trống";
        newBed.textContent = "Giường " + bedNumber + " - " + newBed.dataset.status;
        newBed.className = 'box';
        newBed.addEventListener("click", function() {
          cycleStatusGeneric(newBed);
        });
        bedList.appendChild(newBed);
      }
      function removeLastBedRespiratory() {
        let bedList = document.getElementById('respiratory-bed-list');
        if (bedList.children.length > 0) {
          bedList.removeChild(bedList.lastChild);
        } else {
          alert("Không có giường nào để xóa!");
        }
      }