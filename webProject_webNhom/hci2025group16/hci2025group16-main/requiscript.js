document.addEventListener("DOMContentLoaded", function () {
    populateRequirementTable();
  });
  
  function populateRequirementTable() {
    const tableBody = document.querySelector("#requirement-table tbody");
  
    // Sample data without the "Number" field as it will be auto-generated
    const data = [
      { functional: 'Login / thu thập thông tin về các hoạt động / contact nhà trường', designer: 'Thương', performer: 'Thương', intendTime: '2 tuần', status: 'In Progress' },
      { functional: 'Registration / menu Header / contact team', designer: 'Phát', performer: 'Phát', intendTime: '3 tuần', status: 'In Progress' },
      { functional: 'Ý tưởng / Footer / chức năng góp ý xây dựng', designer: 'Trường', performer: 'Trường', intendTime: '5 ngày', status: 'In Progress' },
      { functional: 'Thiết kế / tab bảng tin CLB tổ đội nhóm', designer: 'Lộc', performer: 'Lộc', intendTime: '2 tuần', status: 'In Progress' },
      { functional: 'Home / tab Bảng tin trường', designer: 'Huy', performer: 'Huy', intendTime: '3 tuần', status: 'In Progress' },
      // Add more sample rows as needed
    ];
  
    data.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.functional}</td>
        <td>${row.designer}</td>
        <td>${row.performer}</td>
        <td>${row.intendTime}</td>
        <td>${row.status}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  