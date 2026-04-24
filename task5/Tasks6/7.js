
const emails = ["test@gmail.com", "invalid", "user@yahoo.com"];

const validEmails = emails.filter(email => email.includes("@"));

console.log(validEmails);