let urlApi = 'http://127.0.0.1:8000/api/v1'       //http://127.0.0.1:8000/api/v1/client/

export const peticionesBack = (endpoint, metodo, request) => {
    const url = `${urlApi}/${endpoint}`;
    return fetch(url, {
        method: metodo,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request),
    })
}