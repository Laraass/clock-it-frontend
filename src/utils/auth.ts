export function isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
  
    // Check if token exists
    return !!token && token !== "null" && token.trim() !== "";
  }
  