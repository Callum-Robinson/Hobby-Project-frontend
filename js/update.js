(function() {
    const requestSelector = document.querySelector('#method');
    const dataTable = document.querySelector('#data-table');
    const characterForm = document.querySelector('#character-info');
    const weaponForm = document.querySelector('#weapon-info');
    const id = document.querySelector('id');

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
        const character = new Character(dataObject.name, dataObject.race, dataObject.subrace, dataObject.character_class, dataObject.level, dataObject.archetype, dataObject.background);
        return character;
    }

    function createWeaponFromFormObj(dataObject) {
        const character = new Character(dataObject.name, dataObject.race, dataObject.subrace, dataObject.character_class, dataObject.level, dataObject.archetype, dataObject.background);
        const weapon = new Weapon(dataObject.name, dataObject.base_weapon, dataObject.weapon_type, dataObject.rarity, dataObject.cost, dataObject.damage, dataObject.damage_type, dataObject.properties, dataObject.additional_abilities);
        return weapon;
    }

    function updateCharacter() {
        const characterData = new FormData(characterForm);
        const characterFormDataObject = Object.fromEntries(characterData.entries())

        fetch(`http://localhost:8080/character/${id.value}`, {
            method: 'PUT',
            body: JSON.stringify(createCharacterFromFormObj(characterFormDataObject)),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error("Something went wrong");
        }).then(character => {
            renderCharacterTable([character], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    function updateWeapon() {
        const weaponData = new FormData(weaponForm);
        const weaponFormDataObject = Object.fromEntries(weaponData.entries())

        fetch(`http://localhost:8080/weapon/${id.value}`, {
            method: 'PUT',
            body: JSON.stringify(createWeaponFromFormObj(weaponFormDataObject)),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error("Something went wrong");
        }).then(weapon => {
            renderWeaponTable([weapon], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }
});