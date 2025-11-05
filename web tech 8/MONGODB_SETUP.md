# MongoDB Installation and Setup Instructions

## Step 1: Download MongoDB Community Edition

1. Visit: https://www.mongodb.com/try/download/community
2. Select:
   - Version: Latest (8.0 or higher)
   - Platform: Windows
   - Package: MSI
3. Click "Download" button

## Step 2: Install MongoDB

1. Run the downloaded MSI installer
2. Choose "Complete" installation
3. Install MongoDB as a Service:
   - Check "Install MongoDB as a Service"
   - Service Name: MongoDB
   - Data Directory: C:\Program Files\MongoDB\Server\8.0\data\
   - Log Directory: C:\Program Files\MongoDB\Server\8.0\log\
4. Install MongoDB Compass (GUI) - recommended for beginners
5. Complete the installation

## Step 3: Verify MongoDB Installation

Open PowerShell and run:

```powershell
# Check if MongoDB service is running
Get-Service MongoDB

# Should show: Status = Running
```

## Step 4: Test MongoDB Connection

Option 1 - Using MongoDB Compass (GUI):

1. Open MongoDB Compass
2. Connection String: mongodb://localhost:27017
3. Click "Connect"
4. You should see the connection established

Option 2 - Using Command Line:

```powershell
# Navigate to MongoDB bin directory
cd "C:\Program Files\MongoDB\Server\8.0\bin"

# Start MongoDB Shell
.\mongosh.exe

# In MongoDB shell, run:
show dbs
```

## Step 5: The Database Will Be Created Automatically

- When you run the Node.js server, it will automatically create the "insurance_db" database
- No manual database creation needed!
- MongoDB creates databases and collections on first write operation

## Troubleshooting

If MongoDB service is not running:

```powershell
# Start MongoDB service
net start MongoDB

# Stop MongoDB service (if needed)
net stop MongoDB
```

If you get "command not found" error:

- Add MongoDB to PATH: C:\Program Files\MongoDB\Server\8.0\bin
- Restart your terminal/PowerShell

## Alternative: MongoDB Atlas (Cloud - No Installation Required)

If you prefer not to install MongoDB locally:

1. Visit: https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free M0 cluster
4. Get connection string
5. Update .env file with Atlas connection string

---

After MongoDB is running, proceed to run the server!
