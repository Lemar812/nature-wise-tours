const Admin = require('../models/Admin');

async function seed() {
  try {
    console.log("Admin seeder started...");

    const exists = await Admin.findOne({ email: 'admin@naturewise.com' });
    console.log("Admin exists?", exists);

    if (!exists) {
      const created = await Admin.create({
        email: 'admin@naturewise.com',
        password: 'Admin123!'
      });

      console.log("Seeded default admin:", created);
    } else {
      console.log("Admin already exists.");
    }
  } catch (err) {
    console.error("Seeder error:", err);
  }
}

module.exports = seed;
