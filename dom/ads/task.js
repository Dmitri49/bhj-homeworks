const rotator = document.querySelector('.rotator');

function startRotator(element) {
    const caseElements = Array.from(element.querySelectorAll('.rotator__case'));

    let counter = 0;

    setInterval(() => {
        caseElements[counter].classList.remove('rotator__case_active')

        let numNext = counter + 1;
        console.log(numNext)
        if (numNext > caseElements.length - 1) {
            numNext = 0;
            counter = 0;
        } else {
            counter += 1;
        }
        caseElements[numNext].classList.add('rotator__case_active')
    }, 1000)
}

window.addEventListener('load', () => {
    startRotator(rotator)
})