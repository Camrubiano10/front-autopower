const BASE_URL = "http://127.0.0.1:8000/api/v1/";
const CLIENT_URL = "http://127.0.0.1:8000/api/v1/client/";

export async function create(body, url) {
  const response = await fetch(BASE_URL + "/client/", {
    method: "POST",
    body:JSON.stringify(body),
    headers:{"Content-type": "application/json"}
  });

  const data = await response.json()

  return data;
}

export async function read(){
  const response = await fetch(CLIENT_URL);
  const data = await response.json();
  return data;
}