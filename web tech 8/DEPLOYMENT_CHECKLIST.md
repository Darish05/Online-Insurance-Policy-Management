# ✅ Deployment Checklist

Print this and check off as you complete each step!

## Before You Start

- [ ] Application works locally (http://localhost:5173)
- [ ] Backend running (http://localhost:5000)
- [ ] MongoDB Compass connected

---

## STEP 1: Create Accounts

- [ ] GitHub account created
- [ ] Render account created
- [ ] MongoDB Atlas account created

---

## STEP 2: MongoDB Atlas Setup

- [ ] Cluster created (FREE M0 tier)
- [ ] Database user created
  - Username: ********\_\_********
  - Password: ********\_\_********
- [ ] IP Whitelist set to 0.0.0.0/0
- [ ] Connection string copied and saved
- [ ] Database `insurance_db` created
- [ ] Collection `policies` created

**My MongoDB Connection String:**

```
_________________________________________________________________
```

---

## STEP 3: GitHub Setup

- [ ] Git initialized locally
- [ ] Code committed
- [ ] GitHub repository created
  - Repo name: insurance-policy-management
- [ ] Code pushed to GitHub
- [ ] Can view code on GitHub website

**My GitHub Repo URL:**

```
https://github.com/___________________/insurance-policy-management
```

---

## STEP 4: Deploy Backend (Render)

- [ ] Connected Render to GitHub
- [ ] Selected repository
- [ ] Configured web service:
  - [ ] Root Directory: `server`
  - [ ] Build Command: `npm install`
  - [ ] Start Command: `node server.js`
- [ ] Added environment variables:
  - [ ] MONGODB_URI
  - [ ] PORT (5000)
  - [ ] NODE_ENV (production)
- [ ] Deployment successful
- [ ] Logs show "Successfully connected to MongoDB"
- [ ] Backend URL copied

**My Backend URL:**

```
https://_________________________________________________
```

---

## STEP 5: Deploy Frontend (Render)

- [ ] Created new static site
- [ ] Selected same repository
- [ ] Configured static site:
  - [ ] Root Directory: `client-app`
  - [ ] Build Command: `npm install && npm run build`
  - [ ] Publish Directory: `dist`
- [ ] Added environment variable:
  - [ ] VITE_API_URL (backend URL)
- [ ] Deployment successful
- [ ] Frontend URL copied

**My Frontend URL:**

```
https://_________________________________________________
```

---

## STEP 6: Testing

- [ ] Opened frontend URL in browser
- [ ] Can see the Insurance Policy form
- [ ] Added test policy:
  - Policy Number: POL-2024-001
  - Customer Name: Test User
  - Policy Type: Life Insurance
  - Premium: 50000
  - Start Date: **_/_**/**\_\_**
  - End Date: **_/_**/**\_\_**
  - Status: Active
- [ ] Policy appears in table
- [ ] Can edit policy
- [ ] Can delete policy
- [ ] Verified data in MongoDB Atlas

---

## Final Deliverables

### For Submission:

- [ ] GitHub repository URL
- [ ] Live application URL
- [ ] Screenshots of:
  - [ ] Working application
  - [ ] MongoDB Atlas collections
  - [ ] Render deployments
- [ ] Documentation (README.md)

---

## Troubleshooting Completed

If you had issues, what fixed them?

**Issue 1:** ************************\_************************

**Solution:** ************************\_************************

**Issue 2:** ************************\_************************

**Solution:** ************************\_************************

---

## ⏱️ Time Tracking

| Step            | Estimated  | Actual         |
| --------------- | ---------- | -------------- |
| Accounts        | 5 min      | \_\_\_ min     |
| MongoDB Atlas   | 10 min     | \_\_\_ min     |
| GitHub Push     | 5 min      | \_\_\_ min     |
| Backend Deploy  | 10 min     | \_\_\_ min     |
| Frontend Deploy | 10 min     | \_\_\_ min     |
| Testing         | 5 min      | \_\_\_ min     |
| **Total**       | **45 min** | **\_\_\_ min** |

---

## 🎉 Completion

**Completed by:** **************\_**************

**Date:** \_**\_/\_\_**/**\_\_**

**Grade/Feedback:** **************\_**************

---

**Signatures:**

Student: **************\_**************

Instructor: **************\_**************

---

_Keep this checklist with your lab report!_
