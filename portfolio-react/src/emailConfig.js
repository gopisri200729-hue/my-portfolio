// Fill these in with your own EmailJS credentials so the contact form can
// actually send you an email (no backend server needed).
//
// How to get them (takes about 3 minutes, it's free):
//   1. Go to https://www.emailjs.com and sign up.
//   2. Email Services -> Add New Service -> connect your Gmail
//      (e.g. gopisri200729@gmail.com) -> copy the "Service ID".
//   3. Email Templates -> Create New Template. Use {{name}}, {{email}},
//      {{subject}}, {{message}} as variables in the template body ->
//      copy the "Template ID".
//   4. Account -> General -> copy your "Public Key".
//   5. Paste all three values below.
//
// Until these are filled in, the form will fall back to opening the
// visitor's own email app (mailto:) so it still works either way.
const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export default emailConfig;
