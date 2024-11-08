document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const loginContainer = document.querySelector(".container");
    const dashboardContainer = document.getElementById("dashboard-section");

    submitButton.addEventListener("click", function () {
        // Ẩn màn hình đăng nhập
        loginContainer.style.display = "none";
        // Hiện màn hình bảng điều khiển
        dashboardContainer.style.display = "block";
    });

    // Hàm lọc bài tập
    function filterExercises() {
        const searchQuery = document.getElementById('searchBar').value.toLowerCase();
        const exercises = document.querySelectorAll('.exercise-item');

        exercises.forEach(exercise => {
            const title = exercise.querySelector('h4').textContent.toLowerCase();
            const description = exercise.querySelector('p').textContent.toLowerCase();

            // Kiểm tra nếu tiêu đề hoặc mô tả chứa từ khóa tìm kiếm
            if (title.includes(searchQuery) || description.includes(searchQuery)) {
                exercise.style.display = 'block'; // Hiển thị bài tập
            } else {
                exercise.style.display = 'none'; // Ẩn bài tập
            }
        });
    }

    // Gán sự kiện cho ô tìm kiếm
    document.getElementById('searchBar').addEventListener('input', filterExercises);

    // Chọn bài tập
    document.querySelectorAll('.select-exercise').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            // Chuyển hướng đến trang exercise.html và truyền dữ liệu bài tập qua URL
            window.location.href = `exercise.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
        });
    });
});
// app.js
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const loginContainer = document.querySelector(".container");
    const dashboardContainer = document.getElementById("dashboard-section");
    
    submitButton.addEventListener("click", function () {
        loginContainer.style.display = "none";
        dashboardContainer.style.display = "block";
    });

    // Xử lý sự kiện chọn bài tập
    document.querySelectorAll('.select-exercise').forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            // Chuyển hướng đến trang exercise.html
            window.location.href = `exercise.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
        });
    });
});


