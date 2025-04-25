// Define the TimeReportData type for type checking
export type TimeReportData = {
  _id: string;
  project: string;
  date: string;
  hoursWorked: string;
  description: string;
};

// Create time report
export async function createTimeReport(
  project: string,
  date: string,
  hoursWorked: string,
  description: string
) {
  const token = localStorage.getItem("token");

  // Check if the user is authenticated
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

  // Log data before sending (for debugging purposes)
  const requestBody = {
    project,
    date: parsedDate,
    hoursWorked: hours,
    description,
  };
  console.log("Request Body:", requestBody); // Log data being sent

  try {
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
      return data; // Return the created report
    } else {
      throw new Error(data.message || "Failed to create time report.");
    }
  } catch (error) {
    console.error("Error creating time report:", error);
    throw error; // Rethrow error to be handled by the calling code
  }
}

// Fetch all time reports
export async function getAllTimeReports() {
  const token = localStorage.getItem("token");

  // Check if the user is authenticated
  if (!token) {
    throw new Error("User not authenticated.");
  }

  try {
    const response = await fetch(
      "https://clock-it-pd7b.onrender.com/api/reports",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

// Fetch specific time report
export async function getReportById(projectId: string): Promise<TimeReportData | null> {
  try {
    const response = await fetch(`/api/reports/${projectId}`);
    if (!response.ok) {
      throw new Error('Time report not found');
    }
    const data: TimeReportData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching time report:", error);
    return null;
  }
}

// utils/timeReports.ts
export async function TimeReportDetail(projectId: string) {
  console.log("Rendering time report with ID:", projectId);

  // Här kan du hämta specifika tidrapportsdata från API eller databas
  // För nu använder vi ett exempel
  return `
    <div>
      <h1>Time Report: ${projectId}</h1>
      <p>Details for project ${projectId} will be displayed here.</p>
    </div>
  `;
}
