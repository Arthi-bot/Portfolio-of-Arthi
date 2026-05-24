export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }
  try {
    const { name, email, message } = req.body;

    // Check if env variable exists
    if (!process.env.WEB3FORM_ACCESS_KEY) {
      console.error("Missing WEB3FORM_ACCESS_KEY environment variable");
      return res.status(500).json({
        success: false,
        message: "Server configuration error: Missing API key",
      });
    }

    console.log("Sending request to Web3Forms...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORM_ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    console.log("Web3Forms response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Web3Forms error:", errorText);
      return res.status(400).json({
        success: false,
        message: "Failed to send message",
      });
    }

    const data = await response.json();
    console.log("Web3Forms response data:", data);

    if (data.success) {
      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
      });
    }

    return res.status(400).json(data);

  } catch (error) {
    console.error("Server error:", error.message);
    console.error("Stack:", error.stack);
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
}