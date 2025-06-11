// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { adminDb } from '@/libs/firebaseAdmin';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const TO_EMAIL = 'risiidhan@kptac.com';

export async function POST(req: NextRequest) {
  console.log('hi');

  try {
    const { from, age, email } = await req.json();

    if (!from || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await adminDb.collection('requests').add({
      from,
      age,
      email,
      createdAt: new Date(),
    });

    await sgMail.send({
      to: TO_EMAIL,
      from: TO_EMAIL,
      replyTo: email,
      subject: `Beta request from ${from}`,
      text: 'message',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
