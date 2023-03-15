async function signin(user) {
    
    try {
        // Input validation
        if (!user.email || !user.password) {
            throw new Error('Invalid email or password')
        }
        
        // Constants for endpoint URL and HTTP method
        const SIGNIN_URL = '/auth/signin/'
        const METHOD_POST = 'POST'
        
        const requestBody = {
            email: user.email,
            password: user.password
        }
        console.log(`Sending ${METHOD_POST} request to ${SIGNIN_URL}: ${JSON.stringify(requestBody)}`)
        
        let response = await fetch(SIGNIN_URL, {
            method: METHOD_POST,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(requestBody)
        })
        
        if (response.ok) {
            const data = await response.json()
            console.log(`Received ${response.status} response: ${JSON.stringify(data)}`)
            sessionStorage.setItem('jwtToken',JSON.stringify(data));
            return data
        } else {
            const error = await response.json()
            console.error(`Received ${response.status} error: ${error.message}`)
            throw new Error(error.message)
        }
    } catch (err) {
        console.error(`Error occurred: ${err.message}`)
        throw err
    }
}   

async function signout() {
    try {
        
        let response = await fetch('/auth/singout/', {
            method: 'GET',
            credentials: 'include'
        });
        if(response.ok){
            
            const data = await response.json();
            console.log(data, "This is in signout function")
            return data
        }else{
            const error = await response.json();
            console.error(`Received ${response.status} error: ${error.message}`)
            throw new Error(error.message)
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {signin , signout};