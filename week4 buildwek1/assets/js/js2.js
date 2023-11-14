const illuminaStelle = function () {
    const stelle = document.querySelectorAll('svg');

    stelle.forEach((element, index) => {
        let value = index + 1;
        element.setAttribute('data-value', `${value}`);

        element.addEventListener('click', function () {
            stelle.forEach((element, index) => {
                if (index < value) {
                    element.classList.add('illuminaStelle');
                } else {
                    element.classList.remove('illuminaStelle');
                }
            });
        });
    });
}

illuminaStelle()