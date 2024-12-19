document.getElementById('schedule-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const tanggal = document.getElementById('tanggal').value;
    const jamMulai = document.getElementById('jam-mulai').value;
    const jamSelesai = document.getElementById('jam-selesai').value;
    const peserta = document.getElementById('peserta').value;
    const rincian = document.getElementById('rincian').value;

    const jam = `${jamMulai} - ${jamSelesai}`;
    const newSchedule = { tanggal, jam, peserta, rincian };

    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push(newSchedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));

    alert('Jadwal berhasil ditambahkan!');
    this.reset();
});
