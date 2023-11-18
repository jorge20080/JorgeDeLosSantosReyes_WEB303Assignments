$(document).ready(function () {
    let data;
    $.getJSON('characters.json', (characters)=>{
        data = characters;
        const tbody = $('#characters-table tbody');
        tbody.empty();

        data.forEach(character => {
            const row = $('<tr>');
            const imageCell = $('<td>');
            const image = $('<img>').attr('src', character.image).attr('alt', `${character.firstName} ${character.lastName}`);
            imageCell.append(image);
            row.append(imageCell);
            row.append($('<td>').text(character.firstName));
            row.append($('<td>').text(character.lastName));
            row.append($('<td>').text(character.heroName));
            row.append($('<td>').text(character.bio));
            tbody.append(row);
        });
    })
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        $('#characters-table tbody tr').each(function () {
            const firstName = $(this).find('td:first-child').text().toLowerCase();
            const containsSearchTerm = firstName.includes(searchTerm);

            if (searchTerm === '' || containsSearchTerm) {
                $(this).addClass('highlighted');
            } else {
                $(this).removeClass('highlighted');
            }
        });
    });
    $('#filter-a-m').on('click', function () {
        filterTable('A', 'M');
    });

    $('#filter-n-z').on('click', function () {
        filterTable('N', 'Z');
    });
    function filterTable(startLetter, endLetter) {
        $('#characters-table tbody tr').each(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            const isInRange = lastName >= startLetter && lastName <= endLetter;

            if (isInRange) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        updateFilterButtonCounts();
    }
    function updateFilterButtonCounts() {
        const countAtoM = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'A' && lastName <= 'M';
        }).length;

        const countNtoZ = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'N' && lastName <= 'Z';
        }).length;

        $('#filter-a-m').text(`A - M (${countAtoM})`);
        $('#filter-n-z').text(`N - Z (${countNtoZ})`);
    }
});
