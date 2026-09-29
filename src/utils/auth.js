// Key name used to store the token in localStorage
const TOKEN_KEY = "token";

// Creates a SIMULATED JWT in the format: header.payload.signature
// NOTE: This is NOT secure. It is only for learning purposes.
export function generateToken(userId, role) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(JSON.stringify({ userId: userId, role: role }));
  const signature = btoa("simulated-signature");

  return header + "." + payload + "." + signature;
}

// Checks the credentials. If correct, creates a token,
// stores it in localStorage and returns it. Otherwise returns null.
export function login(username, password) {
  if (username === "aryan" && password === "1234") {
    const token = generateToken(101, "admin");
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  }
  return null;
}

// Reads the token from localStorage (null if there is none)
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Reads the payload part of the token and converts it back to an object
export function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (error) {
    return null; // token is invalid
  }
}

// Removes the token from localStorage
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}
