
        // Hàm để chọn bài tập
        function selectExercise(button) {
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');

            // Ẩn bảng điều khiển và hiện môi trường lập trình
            document.getElementById('dashboard-section').style.display = 'none';
            document.getElementById('code-editor').style.display = 'block';

            // Cập nhật tiêu đề và mô tả bài tập
            document.getElementById('exercise-title').textContent = title;
            document.getElementById('exercise-description').textContent = description;
        }

        // Hàm quay lại bảng điều khiển
        function goBack() {
            document.getElementById('code-editor').style.display = 'none';
            document.getElementById('dashboard-section').style.display = 'block';
        }

        // Hàm lọc bài tập
        function filterExercises() {
            const languageFilter = document.getElementById('languageFilter').value;
            const searchInput = document.getElementById('searchBar').value.toLowerCase();
            const exercises = document.querySelectorAll('.exercise-item');

            exercises.forEach(exercise => {
                const title = exercise.querySelector('h4').textContent.toLowerCase();
                const languageMatch = (languageFilter === 'all' || exercise.dataset.language === languageFilter);
                const searchMatch = title.includes(searchInput);
                exercise.style.display = languageMatch && searchMatch ? 'block' : 'none';
            });
        }