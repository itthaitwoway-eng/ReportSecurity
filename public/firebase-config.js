// =================================================================
// 📌 FIREBASE CONFIGURATION (reportsecurity-4401b)
// =================================================================
const firebaseConfig = {
  // นำค่า apiKey และ appId มาจาก Firebase Console > Project Settings > General > Your apps
  apiKey: "AIzaSy_YOUR_API_KEY_HERE",
  authDomain: "reportsecurity-4401b.firebaseapp.com",
  databaseURL: "https://reportsecurity-4401b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reportsecurity-4401b",
  storageBucket: "reportsecurity-4401b.firebasestorage.app", // หรือ reportsecurity-4401b.appspot.com
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// เริ่มต้นเชื่อมต่อ Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const storage = firebase.storage();
// จำกัดเวลา retry ของ Storage (ค่าเริ่มต้น 10 นาที ทำให้หน้าจอดูเหมือนค้าง)
storage.setMaxUploadRetryTime(15000);
storage.setMaxOperationRetryTime(15000);
// true = อัปโหลดรูป/PDF ขึ้น Firebase Storage (ต้องเปิดใช้ Storage ให้ใช้งานได้ก่อน)
// false = เก็บทุกอย่างใน Realtime Database อย่างเดียว (เร็วและไม่ค้าง)
const USE_STORAGE = false;
// URL ของ Apps Script Web app เดิม (ลงท้ายด้วย /exec) ใช้เก็บรูป+PDF ลง Google Drive
// ถ้าเว้นว่าง = ไม่ใช้ Apps Script (เก็บแค่ใน Firebase)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwHyEcFIBJFboRQ8VUaid2mRk8XGSvUrQ5IqCC_kxG98PF4Gyz5A42qgst_uNgCwE8/exec";
const COMPANY_NAME = "บริษัท ไทยทูเวย์ แฟบริค จำกัด";
