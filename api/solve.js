export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

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

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
      });
    }

    return res.status(400).json(data);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}