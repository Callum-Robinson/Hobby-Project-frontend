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
            renderCharacterTable(characters, dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    function readCharacterById() {
        fetch (`http://localhost:8080/character/${id.value}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json()
            else throw new Error('Something went wrong');
        }).then(character => {
            renderCharacterTable([character], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    function readCharactersWeapons() {
        fetch (`http://localhost:8080/character/${id.value}/weapons`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json()
            else throw new Error('Something went wrong');
        }).then(weapons => {
            renderWeaponTable(weapons, dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    function readALLWeapons() {
        fetch (`http://localhost:8080/weapon`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json()
            else throw new Error('Something went wrong');
        }).then(weapons => {
            renderWeaponTable(weapons, dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    function readWeaponById() {
        fetch (`http://localhost:8080/weapon/${id.value}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json()
            else throw new Error('Something went wrong');
        }).then(weapon => {
            renderWeaponTable([weapon], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    readAllCharacters();

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

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (requestSelector.value == 'ALLCHARACTERS') readAllCharacters();
        else if (requestSelector.value == 'IDCHARACTER') readCharacterById();
        else if (requestSelector.value == 'CHARACTERWEAPONS') readCharactersWeapons();
        else if (requestSelector.value == 'ALLWEAPONS') readALLWeapons();
        else if (requestSelector.value == 'IDWEAPON') readWeaponById();
    });
})();