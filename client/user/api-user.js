async function create(user) {
    console.log(user, " in create function. ")
    try {
        let response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

const list = async (signal) =>{
    try{
        let response = await fetch('/api/users',{
            method: 'GET',
            signal: signal,
        })
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

const read = async (params,credentials,signal) =>{
    try{
        //console.log(Object.values(params), credentials, signal, "THis is in read api-user method")
        const getUserId = params.params.userId;
       // console.log(getUserId, " This is getUserId variable")
        const READ_URL = `/api/users/${getUserId}`;
        const AUTHORI_TCODE = 'Bearer ' + credentials.t
        //console.log(params, " this is the auth code stored in session storage")
        let response = await fetch(READ_URL,{
            method:'GET',
            signal: signal,
            credentials:'include',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : AUTHORI_TCODE
            }
        })
        //console.log(Object.keys(response))
        return response.json();
    }catch(err){
        console.log(err)
        throw err
    }
}

const update = async (params, credentials, user)=>{
    try{
        let response = await fetch('/api/users/' + params.userId,{
            method:'PUT',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+credentials.t
            },
            body: JSON.stringify(user)
        })
        return response;
    }catch(err){
        console.log(err);
    }
}

const remove = async (params, credentials) =>{
    try{
        let response = await fetch('/api/users'+params.userId,{
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+credentials.t
            }
        })
        return response.json()
    }catch(err){
        console.log(err);
    }
}

export {
    create,
    list,
    read,
    remove,
    update
}