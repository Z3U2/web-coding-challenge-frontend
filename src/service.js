let env = process.env.NODE_ENV
let URL

if(env === "development") {
    URL = "http://localhost:4127"
}

function handleResponse(response) {
    if (response.status === 200) {
        if (response.data) return response.data
        else return;
    } else {
        if (response.message) {
            throw Error(response.message)
        }
        else {
            throw Error('Unexpected Error')
        }
    }
}

export async function getLogin(email,password) {
    let response = await fetch(`${URL}/users/login`, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }), 
    })
    .then(response => response.json());

    handleResponse(response)

    return
}

export async function getPrefs() {
    let response = await fetch(`${URL}/users/pref`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    let data = handleResponse(response)

    return data
}

export async function addPref(id) {
    let response = await fetch(`${URL}/users/pref/${id}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    handleResponse(response)

    return
}

export async function deletePref(id) {
    let response = await fetch(`${URL}/users/pref/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
    })
    .then(response => response.json());

    handleResponse(response)

    return
}

export async function getNearMe(lat,lng) {
    let response = await fetch(`${URL}/shops/neame?lat=${lat}&lng=${lng}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    })

    let data = handleResponse(response)

    return data
}