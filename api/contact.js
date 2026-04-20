export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const { name, email, company, segment, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px 20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e0e0e0;">
    <h2 style="color:#0C1A3A;margin-top:0;">New Contact Form Submission</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#666;width:120px;">Name</td><td style="padding:8px 0;color:#111;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
      ${company ? `<tr><td style="padding:8px 0;color:#666;">Company</td><td style="padding:8px 0;color:#111;">${company}</td></tr>` : ''}
      ${segment ? `<tr><td style="padding:8px 0;color:#666;">Segment</td><td style="padding:8px 0;color:#111;">${segment}</td></tr>` : ''}
    </table>
    <div style="margin-top:24px;padding:16px;background:#f8faff;border-radius:8px;border-left:4px solid #2563eb;">
      <p style="margin:0;color:#333;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
    </div>
    <p style="margin-top:24px;color:#999;font-size:12px;">Sent via alternetcom.net contact form</p>
  </div>
</body>
</html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Alternet Contact <contact@alternetcom.net>',
        to: ['info@alternetcom.net'],
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ` — ${company}` : ''}`,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[resend]', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact]', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
