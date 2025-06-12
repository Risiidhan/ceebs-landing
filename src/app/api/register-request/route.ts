
import { NextRequest, NextResponse } from 'next/server';
// import sgMail from '@sendgrid/mail';
import { adminDb } from '@/libs/firebaseAdmin';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// const TO_EMAIL = 'risiidhan@kptac.com';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";

    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();

    const country = geoData?.country_name || "Unknown";

    const existing = await adminDb
      .collection("requests")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json(
        { error: "This email has already been submitted." },
        { status: 409 }
      );
    }

    await adminDb.collection('requests').add({
      email,
      createdAt: new Date(),
        ip,
      country,
    });

    // const msg = {
    //   to: TO_EMAIL,
    //   from: TO_EMAIL,
    //   replyTo: email,
    //   subject: `New CEED Beta Access Request from ${from}`,
    //   text: `You’ve received a new CEED beta access request.
    //         Details:
    //         - Name: ${from}
    //         - Email: ${email}
    //         - Age: ${age}
    //         Please follow up accordingly.
    //           `.trim(),
    //           html: `
    //             <div style="font-family: Arial, sans-serif; line-height: 1.5;">
    //               <h2>New CEED Beta Access Request</h2>
    //               <p><strong>Name:</strong> ${from}</p>
    //               <p><strong>Email:</strong> ${email}</p>
    //               <p><strong>Age:</strong> ${age}</p>
    //               <p>Please review and follow up with the requester.</p>
    //             </div>
    //           `,};

    // await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
