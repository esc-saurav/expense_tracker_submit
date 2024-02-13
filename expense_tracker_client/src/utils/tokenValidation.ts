import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export const tokenValidation = (response: NextResponse, token?: string) => {
  try {
    let decoded: any;
    decoded = jwtDecode(token ? token : "");
    const loggedIn = decoded && decoded.exp && decoded.user_id && true;
    if (loggedIn) {
      if (Date.now() > decoded.exp * 1000) {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        window.location.href = "/";
        return false;
      }
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
