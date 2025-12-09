const Database = require('better-sqlite3');
const db = new Database('./contacts.db');

console.log('\n📧 Contact Form Submissions:\n');
console.log('='.repeat(80));

const contacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();

if (contacts.length === 0) {
  console.log('No contacts found.');
} else {
  contacts.forEach((contact, index) => {
    console.log(`\n${index + 1}. ID: ${contact.id}`);
    console.log(`   Name: ${contact.name}`);
    console.log(`   Email: ${contact.email}`);
    console.log(`   Message: ${contact.message}`);
    console.log(`   Date: ${contact.created_at}`);
    console.log('-'.repeat(80));
  });
  console.log(`\nTotal: ${contacts.length} contact(s)\n`);
}

db.close();
