var root = 'http://localhost:55289/';

function loadCharacters() {
    $('.characters').empty();
    $('#error').text('');
    $.ajax({
        url: root + 'api/character/',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                renderCharacter(data[i])
            }
        }
    })
}


function loadSingleCharacter() {
    $('.characters').empty();
    $('#error').text('');
    $.ajax({
        url: root + 'api/character/' + $('#characterId').val(),
        success: function (data) {
            renderCharacter(data)
        },
        error: function (data) {
            $('#error').text('character not found');
        }
    })
}


function renderCharacter(character) {
    $('.characters').append('<li>' + character.Name + '</li>');
}


$('#loadAllCharacters').click(function () {
    loadCharacters();
});

$('#loadSingleCharacter').click(function () {
    loadSingleCharacter();
});
