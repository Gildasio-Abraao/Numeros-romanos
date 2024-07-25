class Converter {
    constructor(algarisms) {
        this.algarisms = algarisms;
    }

    convertIntegerToAlgarism(integer) {
        const descendAlgarisms = [...this.algarisms].sort((a, b) => b.value - a.value);
        let result = '';

        descendAlgarisms.forEach((algarism) => {
            while(integer >= algarism.value) {
                result += algarism.code;
                integer -= algarism.value;
            }
        });

        return result;
    }

    convertAlgarismToInteger(algarism) {
        let result = 0;

        const algarismsObject = this.algarisms.reduce((map, algarism) => {
            map[algarism.code] = algarism.value;
            return map;
        }, {});

        for(let index = 0; index < algarism.length; index++) {
            const current = algarismsObject[algarism[index]];
            const next = algarismsObject[algarism[index + 1]];

            if (next && current < next) {
                result -= current;
            } else {
                result += current;
            }
        }

        return result;
    }
}

export default Converter;
