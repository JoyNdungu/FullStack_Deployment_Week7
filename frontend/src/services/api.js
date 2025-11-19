const BASE_URL = "http://localhost:5000/api/readings";

// Fetch all readings
export const getReadings = async () => {
  try {
    const response = await fetch(BASE_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching readings:", error);
    return [];
  }
};

// Add a new reading
export const addReading = async (reading) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reading),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding reading:", error);
  }
};

// Delete a reading by id
export const deleteReading = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting reading:", error);
  }
};
