
export const useAuth = () => {

    const getUserData = () => {
        return JSON.parse(localStorage.getItem("userData")) || null;
    }
    const setUserData = (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
    }
    const clearUserData = () => {
        localStorage.removeItem("userData");
    }

    return { getUserData, setUserData, clearUserData };
}