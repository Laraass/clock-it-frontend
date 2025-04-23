export function isAuthenticated(): boolean {
  const token = localStorage.getItem("token");

  // Check if token exists
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
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "Something went wrong.");
  }
}
