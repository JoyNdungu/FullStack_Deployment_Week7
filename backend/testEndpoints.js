import fetch from "node-fetch";

const BASE_URL = "http://localhost:5000/api/readings";

// Test GET all readings
const testGetReadings = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log("GET /readings:", data);
};

// Test POST a reading
const testPostReading = async () => {
  const newReading = {
    date: "2025-11-15",
    units: 100,
    cost: 50,
  };

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newReading),
  });
  const data = await res.json();
  console.log("POST /readings:", data);
};

// Test DELETE a reading (replace ID with a real one after POST)
const testDeleteReading = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  const data = await res.json();
  console.log(`DELETE /readings/${id}:`, data);
};

// Run tests
const runTests = async () => {
  await testGetReadings();
  await testPostReading();
  // Uncomment after checking POST to get the inserted ID
  // await testDeleteReading("INSERT_ID_HERE");
};

runTests();
