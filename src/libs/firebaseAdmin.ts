// lib/firebaseAdmin.ts
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY_JSON!);

// Fix private_key newlines
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminDb = getFirestore();
export { adminDb };
