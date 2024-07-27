const openForm = () => {
    document.getElementById("loginForm").style.display = "flex";
}

const closeForm = () => {
    document.getElementById("loginForm").style.display = "none";
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

const getUserAndPassword = async () => {
    const user = document.getElementById("emailOrPhone").value;
    const password = document.getElementById("userPassword").value;

    return [user, password];
}

const onSignInFormData = async () => {
    const [user, password] = await getUserAndPassword();
    const valid = await validateUsernameOnSignIn(user) && await validatePasswordOnSignIn(user, password);

    if (valid) {
        return "Signed in " + user + " " + password;
    }
    else {
        return "Not signed in";
    };
}

const onCreateAccountFormData = async () => {
    const [user, password] = await getUserAndPassword();
    const valid = await validateUsernameOnCreateAccount(user) && await validatePasswordOnCreateAccount(password);

    if (valid) {
        console.log(user);
        return "Created account " + user + " " + password;
    }

    else {
        return "Account not created";
    };
}