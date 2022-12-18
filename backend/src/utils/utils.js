import CryptoJS from "crypto-js";

export const hashpass = (pass) => {
    return CryptoJS.MD5(pass).toString();
}
