
export function getMarks() {
    console.log('Send RQ to marks');
    fetch('http://localhost:8080')
        .then(result => {
            return result.json();
        })
        .then(data => this.setState({marks: data}));
}