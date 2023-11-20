import psychic from '../services/assets/Tipos/Psychic.png';
import rock from '../services/assets/Tipos/Rock.png';
import steel from '../services/assets/Tipos/Steel.png';
import water from '../services/assets/Tipos/Water.png';
import grass from '../services/assets/Tipos/Grass.png';
import ground from '../services/assets/Tipos/Ground.png';
import ice from '../services/assets/Tipos/Ice.png';
import normal from '../services/assets/Tipos/Normal.png';
import poison from '../services/assets/Tipos/Poison.png';
import bug from '../services/assets/Tipos/Bug.png';
import dark from '../services/assets/Tipos/Dark.png';
import dragon from '../services/assets/Tipos/Dragon.png';
import electric from '../services/assets/Tipos/Electric.png';
import fairy from '../services/assets/Tipos/Fairy.png';
import fighting from '../services/assets/Tipos/Fighting.png';
import fire from '../services/assets/Tipos/Fire.png';
import flying from '../services/assets/Tipos/Flying.png';
import ghost from '../services/assets/Tipos/Ghost.png';

export const getTypes = (type) => {
    switch(type){
        case 'psychic':
            return psychic;

        case 'rock':
            return rock;

        case 'steel':
            return steel;

        case 'water':
            return water;

        case 'grass':
            return grass;

        case 'ground':
            return ground;

        case 'ice':
            return ice;

        case 'normal':
            return normal;

        case 'poison':
            return poison;

        case 'bug':
            return bug;

        case 'dark':
            return dark;

        case 'dragon':
            return dragon;

        case 'electric':
            return electric;

        case 'fairy':
            return fairy;

        case 'fighting':
            return fighting;

        case 'fire':
            return fire;

        case 'flying':
            return flying;

        case 'ghost':
            return ghost;
    }
};