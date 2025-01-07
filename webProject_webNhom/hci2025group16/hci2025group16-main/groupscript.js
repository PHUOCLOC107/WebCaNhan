function openWeek(evt, weekName) {
    // Hide all elements with class="tabcontent"
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected week content and set the button as active
    document.getElementById(weekName).style.display = "block";
    evt.currentTarget.className += " active";

    // Populate the unique table for the selected week
    populateTable(weekName);
}

function populateTable(weekId) {
    const table = document.getElementById(`table-${weekId}`);
    table.innerHTML = `
      <tr>
        <th>STT</th>
        <th>Mã SV</th>
        <th>Họ tên</th>
        <th>Công việc được giao</th>
        <th>Kết quả</th>
        <th>Tiến độ</th>
      </tr>
    `;

    // Sample data, you can modify this to include specific data for each week
    const data = {
        week1: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Tab Home_01 / About / Thanh Menu', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Design table ở Group Diary và Requiment', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Thanh Menu / Home_02 / contact / footer', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Login / Register / Forgot Pass trên web project', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Login / Register / Forgot Pass trên web project', ketQua: 'Hoàn thành', tienDo: '100%' }


        ],
        week2: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week3: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week4: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week5: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week6: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '90%' }
        ],

        week7: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Lên ý tưởng', tienDo: '20%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '30%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '40%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week8: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week9: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Task 1', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Task 2', ketQua: 'Đang chuẩn bị', tienDo: '50%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Task 3', ketQua: 'Đang chuẩn bị', tienDo: '60%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Task 4', ketQua: 'Đang chuẩn bị', tienDo: '70%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Task 5', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],


        // Add more sample data for weeks 3 to 10
    };

    const weekData = data[weekId] || [];
    weekData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.maSV}</td>
        <td>${row.hoTen}</td>
        <td>${row.congViec}</td>
        <td>${row.ketQua}</td>
        <td>${row.tienDo}</td>
      `;
        table.appendChild(tr);
    });
}

// Initialize by displaying the first tab
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablink").click();
});
