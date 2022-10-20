export function isTokenValid() {
    const tokenStr = localStorage.getItem('token');
    const userToken = JSON.parse(tokenStr);

    if (userToken) {
        const expire = new Date(userToken.tokenExpiration);
        const currentDate = new Date();

        if (currentDate < expire) {
            return true;
        }

        //logout();
        return false;
    }

    return false;
}

export function getTokenString() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    if (userToken) {
        return `Bearer ${userToken.token}`;
    }

    return null;
}

export function getUsersName() {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);

    return userToken?.name;
}

export function isNewUser() {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);

    return userToken?.new;
}

export function getUsersRoles() {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);

    return userToken?.roles;
}

export function getUserId() {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);

    return userToken?.id;
}

export function getUsersEmail() {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);

    return userToken?.Email;
}

export function checkRoles(role) {
    const userRoles = getUsersRoles();

    let userRole = null;

    if (!userRoles) {
        return false;
    } else if (userRoles.includes('Administrator')) {
        userRole = 4;
    } else if (userRoles.includes('Program-Manager')) {
        userRole = 3;
    } else if (userRoles.includes('Supervisor')) {
        userRole = 2;
    } else if (userRoles.includes('User')) {
        userRole = 1;
    }

    //if user's role value is greater than or equal to role to check
    if (userRole >= role) {
        return true;
    }

    return false;
}