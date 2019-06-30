let env = process.env.NODE_ENV
let URL

if(env === "development") {
    URL = "http://localhost:4127"
}

export async function getLogin(email,password) {
    let data = await fetch(`${URL}/users/login`, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            email,
            password
        }, 
    })
    .then(response => response.json());

    return data
}

export async function getPrefs() {
    let data = await fetch(`${URL}/users/pref`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    return data
}

export async function addPref(id) {
    let data = await fetch(`${URL}/users/pref/${id}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    return data
}

export async function deletePref(id) {
    let data = await fetch(`${URL}/users/pref/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    return data
}

export async function getNearMe(lat,lng) {
    let data = await fetch(`${URL}/shops/neame?lat=${lat}&lng=${lng}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    })

    return data
}