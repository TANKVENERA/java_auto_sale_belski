
export function initData(someFunc, param) {
    fetch(`http://localhost:8080/${param}`)
        .then(result => {
            return result.json();
        })
        .then(data => someFunc(data));
}

export function validateField(property, errorMessage) {
    let isValid = property.length > 0 ? true : false;
    if ((this.constructor.name === 'PriceAndCurrency' && property.length > 6) ||
        (this.constructor.name === 'Mileage' && property.length > 7) ||
        (this.constructor.name === 'Engine' && property.length > 5) ||
        (this.constructor.name === 'Engine' && Number((property/1000).toFixed(1)) < 0.1)) {
        isValid = false;
    }
    let error = isValid ? '' : errorMessage;
    this.setState({
        error: error
    })
}

export function addWhiteSpace(param) {
    if (param.length > 3) {
        const reminder = parseInt(param.length % 3, 10);
        let number = '';
        if (reminder > 0) {
            number = param.substring(0, reminder);
            param = param.substring(reminder);
        }
        while (param.length > 0) {
            number = (number + ' ' + param.substring(0, 3)).trim();
            param = param.substring(3);
        }
        return number
    }
    else
        return param;
}