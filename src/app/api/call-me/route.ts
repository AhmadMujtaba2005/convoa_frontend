import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { fullName, phone, email, company } = body;

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone, and email are required.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <h2>New "Call Me Now" Request</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
    `;

    const data = await resend.emails.send({
      from: 'Convoa Call Request <onboarding@resend.dev>',
      to: 'support@convoa.ai',
      subject: `Call Me Now Request from ${fullName}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending call-me email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send request.' },
      { status: 500 }
    );
  }
}
