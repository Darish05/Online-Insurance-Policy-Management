# 🚀 Complete Render Deployment Guide

## Online Insurance Policy Management System

---

## 📋 **PREREQUISITES - Do These First**

### 1. Create Accounts (FREE)

- [ ] **GitHub Account**: https://github.com/signup
- [ ] **Render Account**: https://render.com/register
- [ ] **MongoDB Atlas Account**: https://www.mongodb.com/cloud/atlas/register

---

## 🗄️ **PART 1: Set Up MongoDB Atlas (Cloud Database)**

### Step 1: Create MongoDB Atlas Cluster

1. **Go to MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
2. **Sign in** to your account
3. Click **"Build a Database"** button
4. Select **"M0 FREE"** tier
5. Choose **Cloud Provider**: AWS
6. Choose **Region**: Select closest to you (e.g., Mumbai for India)
7. **Cluster Name**: Leave as default or name it `insurance-cluster`
8. Click **"Create"** button
9. **Wait 3-5 minutes** for cluster to be created

### Step 2: Create Database User

1. You'll see "Security Quickstart" screen
2. **Create a Database User**:
   - Username: `insuranceuser` (remember this)
   - Password: Click **"Autogenerate Secure Password"**
   - **IMPORTANT**: Copy and save this password somewhere safe!
   - Or create your own password (remember it!)
3. Click **"Create User"**

### Step 3: Set Up Network Access

1. **Add IP Address**:
   - Choose **"Allow access from anywhere"** (or click "Add IP Address")
   - Click **"Add Entry"**
   - IP: `0.0.0.0/0` (this allows access from Render)
2. Click **"Finish and Close"**

### Step 4: Get MongoDB Connection String

1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. **Driver**: Node.js
5. **Version**: 4.1 or later
6. **Copy the connection string** - it looks like:
   ```
   mongodb+srv://insuranceuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. **Replace `<password>`** with your actual password
8. **Add database name** before the `?`:
   ```
   mongodb+srv://insuranceuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/insurance_db?retryWrites=true&w=majority
   ```
9. **Save this URL** - you'll need it later!

### Step 5: Create Database and Collection

1. Click **"Browse Collections"**
2. Click **"Add My Own Data"**
3. **Database name**: `insurance_db`
4. **Collection name**: `policies`
5. Click **"Create"**

✅ **MongoDB Atlas Setup Complete!**

---

## 📦 **PART 2: Prepare Code for Deployment**

### Step 1: Update Server Code for Production

I'll update the files now...

### Step 2: Update Client Code for Production

I'll update the files now...

---

## 🐙 **PART 3: Push Code to GitHub**

### Step 1: Initialize Git Repository

**YOU MUST DO THIS:**

1. Open **new terminal** in VS Code (Ctrl + Shift + `)
2. Run these commands one by one:

```powershell
cd "c:\Users\ADMIN\Desktop\web tech lab\web tech 8"
git init
git add .
git commit -m "Initial commit - Insurance Policy Management System"
```

### Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. **Repository name**: `insurance-policy-management`
3. **Description**: "Online Insurance Policy Management System with MERN Stack"
4. Keep it **Public**
5. **DO NOT** check "Initialize with README" (we already have code)
6. Click **"Create repository"**

### Step 3: Push Code to GitHub

**Copy the commands shown on GitHub** (they look like this):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/insurance-policy-management.git
git branch -M main
git push -u origin main
```

**Replace YOUR_USERNAME with your actual GitHub username and run these commands!**

✅ **Code is now on GitHub!**

---

## 🌐 **PART 4: Deploy Backend to Render**

### Step 1: Create Web Service for Backend

1. Go to: https://dashboard.render.com/
2. Click **"New +"** button (top right)
3. Select **"Web Service"**
4. Click **"Connect GitHub"** (if not connected)
5. Select your repository: `insurance-policy-management`
6. Click **"Connect"**

### Step 2: Configure Backend Service

Fill in these details:

- **Name**: `insurance-backend`
- **Region**: Select closest to you
- **Branch**: `main`
- **Root Directory**: `server`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Instance Type**: `Free`

### Step 3: Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

| Key           | Value                                                      |
| ------------- | ---------------------------------------------------------- |
| `MONGODB_URI` | Your MongoDB Atlas connection string (from Part 1, Step 4) |
| `PORT`        | `5000`                                                     |
| `NODE_ENV`    | `production`                                               |

**Example MONGODB_URI**:

```
mongodb+srv://insuranceuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/insurance_db?retryWrites=true&w=majority
```

### Step 4: Deploy Backend

1. Click **"Create Web Service"**
2. **Wait 5-10 minutes** for deployment
3. You'll see logs - wait for "Successfully connected to MongoDB"
4. **Copy the URL** - it looks like: `https://insurance-backend.onrender.com`

✅ **Backend is deployed!**

---

## 🎨 **PART 5: Deploy Frontend to Render**

### Step 1: Create Static Site for Frontend

1. Go to: https://dashboard.render.com/
2. Click **"New +"** button
3. Select **"Static Site"**
4. Select same repository: `insurance-policy-management`
5. Click **"Connect"**

### Step 2: Configure Frontend Service

Fill in these details:

- **Name**: `insurance-frontend`
- **Branch**: `main`
- **Root Directory**: `client-app`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

### Step 3: Add Environment Variable

Click **"Advanced"** → **"Add Environment Variable"**

| Key            | Value                                                                         |
| -------------- | ----------------------------------------------------------------------------- |
| `VITE_API_URL` | Your backend URL from Part 4 (e.g., `https://insurance-backend.onrender.com`) |

### Step 4: Deploy Frontend

1. Click **"Create Static Site"**
2. **Wait 5-10 minutes** for deployment
3. **Copy the URL** - it looks like: `https://insurance-frontend.onrender.com`

✅ **Frontend is deployed!**

---

## 🎯 **PART 6: Test Your Live Application**

### Step 1: Test Backend API

1. Open browser
2. Go to: `https://insurance-backend.onrender.com/api/policies`
3. You should see: `[]` (empty array)

### Step 2: Test Frontend

1. Go to: `https://insurance-frontend.onrender.com`
2. Try adding a policy:
   - Policy Number: POL-2024-001
   - Customer Name: John Doe
   - Policy Type: Life Insurance
   - Premium: 50000
   - Start Date: 2025-11-05
   - End Date: 2026-11-05
   - Status: Active
3. Click **"Add Policy"**
4. Policy should appear in the table!

### Step 3: Verify in MongoDB Atlas

1. Go to MongoDB Atlas
2. Click **"Browse Collections"**
3. Navigate to `insurance_db` → `policies`
4. You should see your policy data!

---

## ✅ **YOU'RE DONE!**

### 🎉 **Your URLs:**

- **Frontend (Live App)**: `https://insurance-frontend.onrender.com`
- **Backend (API)**: `https://insurance-backend.onrender.com`
- **GitHub Code**: `https://github.com/YOUR_USERNAME/insurance-policy-management`

---

## 📝 **Important Notes**

### Free Tier Limitations:

- ⏰ Backend sleeps after 15 minutes of inactivity
- ⏰ First request after sleep takes 30-60 seconds to wake up
- 💾 750 hours/month free (enough for learning/demo)

### Keep Backend Awake (Optional):

Use a service like **UptimeRobot** (https://uptimerobot.com) to ping your backend every 10 minutes.

---

## 🆘 **Troubleshooting**

### Backend Won't Deploy?

- Check MongoDB connection string is correct
- Make sure you replaced `<password>` with actual password
- Check logs in Render dashboard

### Frontend Can't Connect to Backend?

- Check `VITE_API_URL` environment variable
- Make sure backend is running (not showing error)
- Check browser console for errors (F12)

### Database Connection Issues?

- Verify MongoDB Atlas IP whitelist has `0.0.0.0/0`
- Check database user credentials
- Make sure connection string has database name

---

## 📞 **Need Help?**

1. Check Render logs (click on service → Logs)
2. Check MongoDB Atlas metrics
3. Check browser console (F12)
4. Ask me for help!

---

**Created for Web Technology Lab - November 2025**
