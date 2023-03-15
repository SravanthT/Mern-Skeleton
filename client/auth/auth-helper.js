import { signout } from "./api-auth";

const auth = {
    isAuthenticated(){
        if(typeof window == 'undefined') return false

        if(sessionStorage.getItem('jwtToken')){
            const dataToBeReturned = JSON.parse(sessionStorage.getItem('jwtToken'))
            // console.log(dataToBeReturned , " This is being returned from is Authenticated Mtn=hod")
            return dataToBeReturned;}
        else 
            return false;
    },
    authenticate(jwt,cb){
        if(typeof window !== 'undefined')
            sessionStorage.setItem('jwtToken', JSON.stringify(jwt))
        cb()
    },
    clearJWT(cb){
        if(typeof window !== 'undefined')
            sessionStorage.removeItem('jwtToken')
        cb()

        signout().then((data)=>{
            document.cookie = "t=; expries=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    }
}

export default auth;