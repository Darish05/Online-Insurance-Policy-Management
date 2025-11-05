# Online Insurance Policy Management System

A full-stack web application for managing insurance policies with React frontend and Node.js backend.

## 🏗️ Project Structure

```
web tech 8/
├── client-app/          # React Frontend (Vite)
│   ├── src/
│   │   ├── App.jsx      # Main UI with CRUD operations
│   │   └── main.jsx     # Entry point with Bootstrap
│   └── package.json
│
├── server/              # Node.js Backend (Express)
│   ├── models/
│   │   └── Policy.js    # Mongoose schema
│   ├── routes/
│   │   └── policyRoutes.js  # API routes
│   ├── server.js        # Main server file
│   ├── .env             # Environment variables
│   └── package.json
│
└── MONGODB_SETUP.md     # MongoDB installation guide
```

## 🚀 Features

- ✅ Create new insurance policies
- ✅ View all policies in a table
- ✅ Update existing policies
- ✅ Delete policies
- ✅ Policy types: Life, Health, Vehicle, Home, Travel
- ✅ Status tracking: Active, Expired, Cancelled
- ✅ Form validation
- ✅ Responsive Bootstrap UI
- ✅ Real-time updates

## 📋 Prerequisites

Before running this project, make sure you have:

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** (v5.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
   - See `MONGODB_SETUP.md` for installation instructions

## 🔧 Installation & Setup

### Step 1: Install MongoDB

Follow instructions in `MONGODB_SETUP.md` to install and start MongoDB.

Verify MongoDB is running:

```powershell
Get-Service MongoDB
```

### Step 2: Install Dependencies

Both client and server dependencies are already installed. If you need to reinstall:

**Client:**

```powershell
cd client-app
npm install
```

**Server:**

```powershell
cd server
npm install
```

## ▶️ Running the Application

### Option 1: Run Both (Recommended)

Open TWO separate terminals:

**Terminal 1 - Start Backend Server:**

```powershell
cd server
npm run dev
```

Server will start at: http://localhost:5000

**Terminal 2 - Start Frontend Client:**

```powershell
cd client-app
npm run dev
```

Client will start at: http://localhost:5173

### Option 2: Run Individually

**Backend only:**

```powershell
cd server
npm start          # Production mode
npm run dev        # Development mode (with auto-restart)
```

**Frontend only:**

```powershell
cd client-app
npm run dev
```

## 🧪 Testing the Application

1. Open browser: http://localhost:5173
2. You should see "Online Insurance Policy Management" page
3. Fill in the form and click "Add Policy"
4. Policy should appear in the table
5. Try Edit and Delete buttons

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/policies`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | /        | Get all policies  |
| GET    | /:id     | Get policy by ID  |
| POST   | /        | Create new policy |
| PUT    | /:id     | Update policy     |
| DELETE | /:id     | Delete policy     |

## 🗄️ Database Schema

**Collection:** policies

```javascript
{
  policyNumber: String (unique, required)
  customerName: String (required)
  policyType: String (enum: Life/Health/Vehicle/Home/Travel)
  premium: Number (required, min: 0)
  startDate: Date (required)
  endDate: Date (required, must be after startDate)
  status: String (enum: Active/Expired/Cancelled)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## 🛠️ Technologies Used

### Frontend

- React 18
- Vite (Build tool)
- Bootstrap 5 (UI framework)
- Axios (HTTP client)

### Backend

- Node.js
- Express.js (Web framework)
- MongoDB (Database)
- Mongoose (ODM)
- CORS (Cross-origin resource sharing)
- dotenv (Environment variables)

## 🐛 Troubleshooting

### Issue: "Failed to fetch policies"

- ✅ Check if MongoDB service is running
- ✅ Check if backend server is running on port 5000
- ✅ Check console for error messages

### Issue: "Port already in use"

```powershell
# Change port in server/.env
PORT=5001
```

### Issue: MongoDB connection error

```powershell
# Start MongoDB service
net start MongoDB

# Or check if it's running
Get-Service MongoDB
```

## 📝 Sample Data

You can add this sample policy:

- Policy Number: POL-2024-001
- Customer Name: John Doe
- Policy Type: Life Insurance
- Premium: 50000
- Start Date: 2024-01-01
- End Date: 2025-01-01
- Status: Active

## 📖 Learning Objectives

This project demonstrates:

- ✅ React hooks (useState, useEffect)
- ✅ Axios API calls (GET, POST, PUT, DELETE)
- ✅ Express.js routing
- ✅ MongoDB CRUD operations
- ✅ Mongoose schema and validation
- ✅ Asynchronous JavaScript
- ✅ REST API design
- ✅ Full-stack integration
- ✅ Bootstrap responsive design

## 🎓 Next Steps

To enhance this project, you could add:

- User authentication (login/register)
- Search and filter functionality
- Pagination for large datasets
- Export to PDF/Excel
- Email notifications
- Payment integration
- Dashboard with charts

## 📞 Support

If you encounter any issues:

1. Check MongoDB is running
2. Check both servers are running
3. Check browser console for errors
4. Check server terminal for errors

---

**Created for Web Technology Lab - November 2025**
