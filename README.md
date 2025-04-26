
---

# 📝 PulsePoint – User Feedback System

PulsePoint is a full-stack web application designed to collect, manage, and analyze user feedback efficiently. Built with **Node.js**, **Express.js**, **React**, and **MongoDB**, it offers a seamless experience for users to submit feedback and for administrators to review and act upon it.

---

## 🚀 Features

- **Feedback Submission**: Users can submit feedback through a user-friendly form.
- **Dashboard View**: Administrators can view all feedback entries in a structured dashboard.
- **Filtering & Sorting**: Feedback can be filtered based on various parameters.
- **Scalable Architecture**: Designed to handle multiple submissions concurrently.
- **Optional Categorization**: Feedback can be categorized (e.g., Bug Report, Feature Request, Suggestion).
- **Export Functionality**: Allow exporting feedback data to CSV or PDF.

---

## 🛠 Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios, dotenv,

---

## 📂 Project Structure

```
PulsePoint/
├── backend/               
│   ├── config/            # DB Config
│   ├── controllers/       # Business Logic
│   ├── middlleware/       # Middlewares
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── schemas/           # Joi Validation Schema
│   ├── seeds/            # Seed Data
│   └── server.js          # Entry point
├── frontend/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/    # Reusable components
│       ├── lib/           # axois config
│       ├── pages/         # Page components
│       └── App.js         # Main React component
├── .env.example           # Environment variable example
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/gsk-007/PulsePoint.git
cd PulsePoint
```

### 2. Backend Setup

```bash
npm install
```

- Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- Start the backend server:

```bash
npm run server
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

- Start the frontend development server:

```bash
npm run client
```
### 4. Run App

```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`


---

## 📋 API Endpoints

### POST `/api/feedback`

- **Description**: Submit user feedback.
- **Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "feedback": "Great app!",
  "category": "Suggestion"
}
```

### GET `/api/feedback`

- **Description**: Retrieve all feedback entries.
- **Query Parameters** (optional):
  - `page`: Fetch the desired page.
  - `pageSize`: Fetch the desired page size (Default 10).
  - `name`: Filter by feedback name.
  - `email`: Filter by feedback email.
  - `feedbackText`: Filter by feedback text.
  - `category`: Filter by feedback category.
  

---

## 🧠 Architecture Overview

1. **Frontend**: Built with **React**, it provides a form for users to submit feedback and a dashboard for administrators to view feedback.
2. **Backend**: An **Express.js** server handles API requests, processes data, and communicates with the database.
3. **Database**: **MongoDB** stores feedback entries with fields such as name, email, feedback text, category, and timestamp.

---

## 📌 Future Enhancements

- **Authentication**: Implement user authentication for secure access.
- **Analytics Dashboard**: Visualize feedback trends over time.
- **Email Notifications**: Notify administrators upon new feedback submissions.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.


## ✉️ Contact

Created by **gsk-007**  
GitHub: [https://github.com/gsk-007](https://github.com/gsk-007)

---

