(function() {
    const requestSelector = document.querySelector('#method');
    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');
    const characterForm = document.querySelector('#character-info');
    const weaponForm = document.querySelector('#weapon-info');

    function toggleForm(formWanted) {
        if (formWanted == "Character") {
            if (characterForm.classList.contains('hide')) characterForm.classList.remove('hide');
            if (!weaponForm.classList.contains('hide')) weaponForm.classList.add('hide');
        } else if (formWanted == "Weapon") {
            if (!characterForm.classList.contains('hide')) characterForm.classList.add('hide');
            if (weaponForm.classList.contains('hide')) weaponForm.classList.remove('hide');
        }
    }

    requestSelector.addEventListener('change', function(event) {
        if (this.value == 'Character') {
            toggleForm("Character");
        }
        else if (this.value == 'Weapon') {
            toggleForm("Weapon")
        }
    });

    function createCharacterFromFormObj(dataObject) {
        const character = new character(dataObject.name, dataObject.race, dataObject.subrace, dataObject.character_class, dataObject.level, dataObject.archetype, dataObject.background);
        return character;
    }

    function createCharacter() {
        const formData = new 
    }
})();