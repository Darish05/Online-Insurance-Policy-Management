// Test MongoDB Connection and Create Database
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/insurance_db';

console.log('🔍 Testing MongoDB Connection...');
console.log('📡 Connection String:', MONGODB_URI.replace(/:[^:]*@/, ':****@')); // Hide password

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ Successfully connected to MongoDB');
  console.log(`📊 Database: ${mongoose.connection.name}`);
  
  // Create a test policy schema
  const testPolicySchema = new mongoose.Schema({
    policyNumber: String,
    customerName: String,
    policyType: String,
    premium: Number,
    startDate: Date,
    endDate: Date,
    status: String
  }, { timestamps: true });
  
  const TestPolicy = mongoose.model('Policy', testPolicySchema);
  
  // Create a test document
  const testPolicy = new TestPolicy({
    policyNumber: 'TEST-2024-001',
    customerName: 'Test User',
    policyType: 'Life Insurance',
    premium: 50000,
    startDate: new Date('2025-11-05'),
    endDate: new Date('2026-11-05'),
    status: 'Active'
  });
  
  await testPolicy.save();
  console.log('✅ Test policy created successfully!');
  console.log('📄 Policy Data:', testPolicy);
  
  // Count documents
  const count = await TestPolicy.countDocuments();
  console.log(`📊 Total policies in database: ${count}`);
  
  process.exit(0);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1);
});
