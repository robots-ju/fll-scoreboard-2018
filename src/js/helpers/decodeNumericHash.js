const MISSIONS = [
    ['m01_vehicle', 'boolean'],
    ['m01_supply', 'boolean'],
    ['m01_crew', 'boolean'],
    ['m02_same', 'boolean'],
    ['m02_other_team', 'boolean'],
    ['m03_northeast', 'boolean'],
    ['m03_ejected', 'boolean'],
    ['m04_crossed', 'boolean'],
    ['m05_extracted', 'boolean'],
    ['m05_gas_target', 'boolean'],
    ['m05_gas_base', 'boolean'],
    ['m05_water', 'boolean'],
    ['m06_cone', 'boolean'],
    ['m06_tube', 'boolean'],
    ['m06_dock', 'boolean'],
    ['m07_completely', 'boolean'],
    ['m07_partly', 'boolean'],
    ['m08_orange', 'boolean'],
    ['m08_white', 'boolean'],
    ['m08_grey', 'boolean'],
    ['m09_lifted', 'boolean'],
    ['m10_green', 'boolean'],
    ['m11_high', 'boolean'],
    ['m12_satellites', 'number'],
    ['m13_orange', 'boolean'],
    ['m13_white', 'boolean'],
    ['m13_grey', 'boolean'],
    ['m14_center', 'number'],
    ['m14_side', 'number'],
    ['m15_target', 'boolean'],
    ['m15_planet', 'boolean'],
    ['m15_base', 'boolean'],
    ['penalties', 'number'],
];

export function decodeHash(hash) {
    const state = {};

    hash.split('').forEach((value, index) => {
        const mission = MISSIONS[index];

        state[mission[0]] = mission[1] === 'number' ? parseInt(value) : value === '1';
    });

    return state;
}

export function encodeHash(missions) {
    return MISSIONS.map(mission => {
        const value = missions[mission[0]];

        return mission[1] === 'number' ? value : (value ? 1 : 0);
    }).join('');
}
