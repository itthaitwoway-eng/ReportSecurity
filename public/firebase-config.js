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
const COMPANY_NAME = "บริษัท ไทยทูเวย์ แฟบริค จำกัด";
