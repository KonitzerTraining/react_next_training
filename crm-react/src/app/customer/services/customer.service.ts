const url = 'http://localhost:1337/api/customers/';

export async function getAll() {
    const response = await fetch(url);
    return await response.json();
}