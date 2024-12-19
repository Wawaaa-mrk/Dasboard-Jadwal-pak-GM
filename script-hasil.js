document.addEventListener('DOMContentLoaded', function () {
    const scheduleTable = document.getElementById('schedule-table');
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const completedSchedules = JSON.parse(localStorage.getItem('completedSchedules')) || [];
    let lastDate = '';

    schedules.forEach((schedule, index) => {
        const row = document.createElement('tr');

        // Tampilkan tanggal hanya jika berbeda dengan tanggal sebelumnya
        const tanggalCell = schedule.tanggal === lastDate ? `<td></td>` : `<td>${schedule.tanggal}</td>`;
        lastDate = schedule.tanggal;

        row.innerHTML = `
            ${tanggalCell}
            <td>${schedule.jam}</td>
            <td>${schedule.peserta}</td>
            <td>${schedule.rincian}</td>
            <td><button class="mark-complete" data-index="${index}">✔</button></td>
        `;
        scheduleTable.appendChild(row);
    });

    scheduleTable.addEventListener('click', function (e) {
        if (e.target.classList.contains('mark-complete')) {
            const index = e.target.getAttribute('data-index');
            completedSchedules.push(schedules[index]);
            schedules.splice(index, 1);

            localStorage.setItem('schedules', JSON.stringify(schedules));
            localStorage.setItem('completedSchedules', JSON.stringify(completedSchedules));

            alert('Kegiatan ditandai sebagai selesai!');
            location.reload();
        }
    });
});
