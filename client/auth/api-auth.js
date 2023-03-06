async function signin(user) {
    try {
        let response = await fetch('/auth/signin/', {
            method: "POST",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

async function signout() {
    try {
        let response = await fetch('/auth/singout/', {
            method: 'GET'
        });
        return await response.json();
    } catch (error) {
        console.log(err);
    }
}

export {signin , signout};