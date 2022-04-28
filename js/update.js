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
});