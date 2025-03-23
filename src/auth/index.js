// is Logged in

export const isLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data==null) return false;
    else return true;
};

//// do login
export const dologin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

// do logout
export const doLogout=(next)=>{
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    next()
};

//get current user
export const getCurrentUser=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return undefined;
    }
}
export const getToken1=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token;
    }else{
        return undefined;
    }
}