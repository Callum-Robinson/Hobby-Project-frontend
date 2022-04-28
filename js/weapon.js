function Weapon(name, base_weapon, weapon_type, rarity, cost, damage, damage_type, properties, additional_abilities) {
    this.name = name;
    this.base_weapon = base_weapon;
    this.weapon_type = weapon_type;
    this.rarity = rarity;
    this.cost = cost;
    this.damage = damage;
    this.damage_type = damage_type;
    this.properties = properties;
    this.additional_abilities = additional_abilities;
}

const weaponHeaders = ['id', 'name', 'base_weapon', 'weapon_type', 'rarity', 'cost', 'damage', 'damage_type', 'properties', 'additional_abilities'];

function renderWeaponTable(weapons, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(weaponHeaders, weapons);
    containerElement.replaceChildren(table);
}