
export function getModelsByMarkId(markId) {
    fetch(`http://localhost:8080/models?mid=${markId}`, {
        method: 'GET'
    })
        .then(result => {
            return result.json();
        })
        .then(data => this.setState({models: data}));
}