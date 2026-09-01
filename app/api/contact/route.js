import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const filePath = path.join(dataDir, 'inquiries.json');
    let arr = [];
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      try { arr = JSON.parse(raw || '[]'); } catch (e) { arr = []; }
    }
    const entry = { id: Date.now(), name: name || null, email, message, createdAt: new Date().toISOString() };
    arr.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));

    // Note: For email delivery, configure an SMTP or third-party provider and implement sending here using environment variables. Do NOT store credentials in code.

    return new Response(JSON.stringify({ ok: true, entry }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
