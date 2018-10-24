export function retrieveData(property, reqMapParam) {
    console.log('SendRq', property, '  ', reqMapParam)
    fetch(`http://localhost:8080/${reqMapParam}`)
        .then(result => {
            return result.json();
        })
        .then(data => this.setState({[property]: data}));
}

export function validateField(property, errorMessage) {
    console.log('TRANSMIT',  ' ',property, ': ', errorMessage)
    let  isValid = property.length > 0 ? true : false;
    let error = isValid ? '' : errorMessage;
    this.setState({
        error : error
    })
}