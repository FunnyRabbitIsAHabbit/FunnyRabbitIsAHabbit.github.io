const userRemembered = ". User is remembered.";

const openForm = () => {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("mainScreen").style.display = "none";
}

const closeForm = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("mainScreen").style.display = "flex";
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
    const isRememberUser = document.getElementById("rememberUser").checked;

    return [user, password, isRememberUser];
}

const onSignInFormData = async () => {
    const [user, password, isRememberUser] = await getUserAndPassword();
    const valid = await validateUsernameOnSignIn(user) && await validatePasswordOnSignIn(user, password);

    if (valid) {
        let toReturn = "Signed in as @user=`" + user + "` with @pass-d=`" + password +"`";
        if (isRememberUser) {toReturn += userRemembered}
        return toReturn;
    }
    else {
        return "Not signed in";
    };
}

const onCreateAccountFormData = async () => {
    const [user, password, isRememberUser] = await getUserAndPassword();
    const valid = await validateUsernameOnCreateAccount(user) && 
    await validatePasswordOnCreateAccount(password);


    if (valid) {
        let toReturn = "Created account @user=`" + user + "` with @pass-d=`" + password + "`";
        if (isRememberUser) {toReturn += userRemembered}
        return toReturn;
    }

    else {
        return "Account not created";
    };
}