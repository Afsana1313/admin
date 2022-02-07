import { logindata } from "../static/logindata"
export const auth = (a, b) => {
    for (var i = 0; i < logindata.length; i++){
        if (logindata[i].id === a && logindata[i].pw === b) {
            return true;
        }
    }
    return false;
}