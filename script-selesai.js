document.addEventListener('DOMContentLoaded', function () {
    const completedScheduleTable = document.getElementById('completed-schedule-table');
    const completedSchedules = JSON.parse(localStorage.getItem('completedSchedules')) || [];

    completedSchedules.forEach(schedule => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${schedule.tanggal}</td>
            <td>${schedule.jam}</td>
            <td>${schedule.peserta}</td>
            <td>${schedule.rincian}</td>
        `;
        completedScheduleTable.appendChild(row);
    });
});
