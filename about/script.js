document.getElementById('downloadButton').addEventListener('click', function() {
    // Создаем ссылку для загрузки файла
    var link = document.createElement('a');
    link.download = 'карта партнера'; // Установите имя файла для скачивания
    link.href = 'https://disk.yandex.ru/i/lnTV9kZVVmhVug'; // Установите путь к файлу для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});