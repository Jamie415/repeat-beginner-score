exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    await fetch("https://script.google.com/macros/s/AKfycbz1GuqlQchLzuReTdDpfHFEAOnqHkoJ3gmtU7-B7N5GTfvLKS5y3UtfdQAPbuAcp5p1/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body
    });
    return { statusCode: 200, body: "OK" };
  } catch(err) {
    return { statusCode: 500, body: err.message };
  }
};
