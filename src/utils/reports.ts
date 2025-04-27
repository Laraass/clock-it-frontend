// Create time report
export async function createTimeReport(
  project: string,
  date: string,
  hoursWorked: string,
  description: string
) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("User not authenticated.");
  }

  // Check if all parameters are filled out
  if (!project || !date || !hoursWorked || !description) {
    throw new Error("Please fill out all fields.");
  }

  // Convert hoursWorked to a number
  const hours = parseFloat(hoursWorked);
  if (isNaN(hours) || hours <= 0) {
    throw new Error("Invalid number of hours worked.");
  }

  // Convert date to Date object
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format.");
  }

  // Log data before sending
  const requestBody = {
    project,
    date: parsedDate,
    hoursWorked: hours,
    description,
  };
  console.log("Request Body:", requestBody); // Log data being sent

  // Send POST request to server
  const response = await fetch(
    "https://clock-it-pd7b.onrender.com/api/reports",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "Failed to create time report.");
  }
}

// Fetch all time reports
export async function getAllTimeReports() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("User not authenticated.");
  }

  try {
    const response = await fetch("https://clock-it-pd7b.onrender.com/api/reports", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data; // Return all reports
    } else {
      throw new Error(data.message || "Failed to fetch time reports.");
    }
  } catch (error: any) {
    console.error("Error fetching time reports:", error.message);
    throw error; // Rethrow error to be handled by the calling code
  }
}

// Delete time report
export async function deleteTimeReport(reportId: string) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("User not authenticated.");
  }

  try {
    const response = await fetch(`https://clock-it-pd7b.onrender.com/api/reports/${reportId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Failed to delete time report.");
    }
  } catch (error: any) {
    console.error("Error deleting time report:", error.message);
    throw error;
  }
}
