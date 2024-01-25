const urlApi = 'http://127.0.0.1:8000/api/v1'      

export const peticionesBack = (endpoint, metodo, request) => {
    const url = `${urlApi}/${endpoint}`;
    return fetch(url, {
        method: metodo,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request),
    });

}

export async function read(text_input){
    const response = await fetch(`${urlApi}/client/${text_input}/`);
    const data = await response.json();
    return data;
}