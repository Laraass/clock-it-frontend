// Check if user is authenticated
export function isAuthenticated(): boolean {
  const token = localStorage.getItem("token");
  return !!token && token !== "null" && token.trim() !== "";
}

// Register user
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const response = await fetch(
    "https://clock-it-pd7b.onrender.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "Something went wrong.");
  }
}

// Sign in 
export async function loginUser(email: string, password: string) {
  const response = await fetch("https://clock-it-pd7b.onrender.com/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  // If sign in is successful, save token
  if (response.ok) {
    localStorage.setItem("token", data.token);
    return data;
  } else {
    // If sign in is unsuccessful, send error message
    throw new Error(data.message || "Login failed.");
  }
}

// Sign out the user
export function logoutUser(): void {
  localStorage.removeItem("token");
}
