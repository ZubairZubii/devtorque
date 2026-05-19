import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, company, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"DevTorque Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#07091a;color:#e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#0066FF,#38bdf8);padding:28px 32px;">
            <h1 style="margin:0;font-size:22px;color:#fff;">New Contact Form Submission</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">devtorque.co</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;color:#94a3b8;font-size:13px;width:110px;">Name</td><td style="padding:10px 0;font-size:14px;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Email</td><td style="padding:10px 0;font-size:14px;"><a href="mailto:${email}" style="color:#38bdf8;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Company</td><td style="padding:10px 0;font-size:14px;">${company}</td></tr>` : ''}
            </table>
            <div style="margin-top:20px;padding:20px;background:rgba(255,255,255,0.05);border-radius:8px;border-left:3px solid #38bdf8;">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:rgba(0,0,0,0.2);font-size:11px;color:#475569;text-align:center;">
            Sent via devtorque.co contact form
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
