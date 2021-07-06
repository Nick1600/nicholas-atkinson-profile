//portfolio option pickers:
const rcp = document.querySelector('.rcp');
const apw = document.querySelector('.apw');
const psr = document.querySelector('.psr');

const filler = document.querySelector('.filler');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

//toggle functions
const toggleOneFlex = () => {
    if (one.style.display === 'none') {
        one.style.display = 'flex';
        two.style.display = 'none';
        three.style.display = 'none';
        filler.style.display = 'none';
    } else {
        one.style.display = 'none';
        filler.style.display = 'flex';
    }
};
const toggleTwoFlex = () => {
    if (two.style.display === 'none') {
        one.style.display = 'none';
        two.style.display = 'flex';
        three.style.display = 'none';
        filler.style.display = 'none';
    } else {
        two.style.display = 'none';
        filler.style.display = 'flex';
    }
};
const toggleThreeFlex = () => {
    if (three.style.display === 'none') {
        one.style.display = 'none';
        two.style.display = 'none';
        three.style.display = 'flex';
        filler.style.display = 'none';
    } else {
        three.style.display = 'none';
        filler.style.display = 'flex';
    }
};

//event listeners
rcp.addEventListener('click', toggleOneFlex);
apw.addEventListener('click', toggleTwoFlex);
psr.addEventListener('click', toggleThreeFlex);