const url = 'http://localhost:1337/api/customers';

export async function getAll() {
    const response = await fetch(url);
    return await response.json();
}

export async function deleteById(id : number) {
    const response = await fetch(url + '/' + id, {
        method: 'DELETE'
    });
    return await response.json();
}

export async function filter(value: string) {
    // http://localhost:1337/api/customers?filters[name][$contains]=Ti
    console.log(value);

    const response = await fetch(url + '?filters[name][$contains]=' + value);
    return await response.json();
}