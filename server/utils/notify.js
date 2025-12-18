const nodemailer = require('nodemailer');
const twilio = require('twilio');

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS 
  }
});

async function sendBookingEmail(data){
  try{
    await transporter.sendMail({
      to: process.env.NOTIFY_EMAIL,
      subject: 'New Booking Inquiry - Nature Wise Tours',
      text: `New booking from ${data.fullName} (${data.email}). Phone: ${data.phone}. Tour: ${data.tour || 'N/A'}`,
    });
  }catch(err){
    console.error('Email error:', err.message);
  }
}


// WHATSAPP SETUP — SAFE MODE
let whatsappEnabled = false;
let twilioClient = null;

if (process.env.TWILIO_SID && process.env.TWILIO_SID.startsWith("AC")) {
  try {
    twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
    whatsappEnabled = true;
    console.log("WhatsApp notifications enabled");
  } catch (err) {
    console.error("Twilio init failed:", err.message);
  }
} else {
  console.log("WhatsApp notifications disabled (missing valid Twilio SID)");
}

async function sendWhatsApp(msg){
  if (!whatsappEnabled) return;  
  try{
    await twilioClient.messages.create({
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${process.env.ADMIN_WHATSAPP}`,
      body: msg,
    });
  }catch(err){
    console.error('WhatsApp error:', err.message);
  }
}

module.exports = { sendBookingEmail, sendWhatsApp };
