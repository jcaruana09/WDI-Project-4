class Auth {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static logout() {
    return localStorage.removeItem('token');
  }

  static getPayload() {
    // gets the web token
    const token = this.getToken();
    // if token is invalid return null
    if(!token) return null;
    // creates an array filled with the header, payload and signature of the token
    const parts = token.split('.');
    // if token length is less than 3, token is invalid
    if(parts.length < 3) return null;
    // retrieves the data which comes back as a JSON String
    // and converts it into a JavaScript Object using JSON.parse.
    return JSON.parse(atob(parts[1]));
  }

  static isAuthenticated() {

    const payload = this.getPayload();
    if(!payload) return false;
    // time now in seconds
    const now = Math.round(Date.now()/1000);
    // as long as payload expiration time is greater than current time user is authenticated
    return now < payload.exp;
  }
}

export default Auth;
