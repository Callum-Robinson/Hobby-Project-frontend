(function() {
    const requestSelector = document.querySelector('#method');
    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');
    const readIdField = document.querySelector('#id-field');
    const id = document.querySelector('#id');

    function toggleIdVisibility(isVisible) {
        if (isVisible) {
            if (readIdField.classList.contains('hide')) readIdField.classList.remove('hide');
        } else {
            if (!readIdField.classList.contains('hide')) readIdField.classList.add('hide');
        }
    }

    function readAllCharacters() {
        fetch (`http://localhost:8080/character`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json()
            else throw new Error('Something went wrong');
        }).then(characters => {
            renderCharacterTable
        })
    }
    requestSelector.addEventListener('change', function(event) {
        if (this.value == 'ALLCHARACTERS') {
            toggleIdVisibility(false);
        } else if (this.value == 'IDCHARACTER') {
            toggleIdVisibility(true);
        } else if (this.value == 'CHARACTERWEAPONS') {
            toggleIdVisibility(true);
        } else if (this.value == 'ALLWEAPONS') {
            toggleIdVisibility(false);
        } else if (this.value == 'IDWEAPON') {
            toggleIdVisibility(true);
        }
    });
})();