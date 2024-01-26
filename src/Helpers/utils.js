const urlApi = 'http://127.0.0.1:8000/api/v1/client'   

export async function makeHttpRequest ({url, id, body, method= "GET"}){
    const finalUrl = id ? `${url}/${id}` : url;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (body) headers.body = JSON.stringify(body);

    const response = await fetch(`${urlApi}/${finalUrl}`, {
        method,
        headers,
    });

    const data = await response.json();
    return data;
}

