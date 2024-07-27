const openForm = () => {
    document.getElementById("myForm").style.display = "flex";
}

const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
}

const validateUsernameOnSignIn = async (username) => {
    return true;
}

const validatePasswordOnSignIn = async (username, password) => {
    return true;
}

const validateUsernameOnCreateAccount = async (username) => {
    return true;
}

const validatePasswordOnCreateAccount = async (password) => {
    return true;
}