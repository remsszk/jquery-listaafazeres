$(document).ready(function() {

    $('#taskForm').on('submit', function(e) {
        e.preventDefault();

        const taskName = $('#taskName').val().trim();

        if (taskName) {
            const isDuplicate = $('#taskList li').filter(function() {
                return $(this).text().includes(taskName);
            }).length > 0;

            if (isDuplicate) {
                alert('Essa tarefa já foi adicionada!');
                return;
            }

            const newTask = $(`
                <li>
                    ${taskName} <span class="status"><i class="fas fa-times"></i></span>
                </li>
            `);

            $('#taskList').append(newTask);
            $('#taskName').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
        const statusIcon = $(this).find('.status i');

        if ($(this).hasClass('completed')) {
            statusIcon.removeClass('fa-times').addClass('fa-check'); // ✔️
        } else {
            statusIcon.removeClass('fa-check').addClass('fa-times'); // ❌
        }
    });
});
