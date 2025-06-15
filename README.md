# 💻 Student CRUD App — Full Stack (Node.js + Express + HTML + Bootstrap)

Welcome to the **Student CRUD App** — a sleek, responsive, and beginner-friendly full-stack application built to manage student data with ease. From adding students to deleting them — everything works live in the browser! 🎯

---

## 🛠️ Tech Stack

| Layer     | Tech                 |
|-----------|----------------------|
| Frontend  | HTML + Bootstrap 5   |
| Backend   | Node.js + Express.js |
| Testing   | Postman              |
| Data      | In-Memory Array      |

---

## ✨ Features

- 📥 Add new students
- 📄 View all students in a dynamic table
- ✏️ Edit existing student details
- ❌ Delete students
- 🚀 Live reload without refreshing
- 💅 Polished Bootstrap UI (no boring forms)

---

## 🖼️ UI Preview

> 💡 *You can test it right in the browser — no Postman needed!*

2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the server
bash
Copy
Edit
node server.js
Server will run on: http://localhost:3000

4️⃣ Open the frontend
Simply open index.html in your browser. That’s it! 🎉

📬 API Endpoints (For Postman Testing)
Method	Endpoint	Description
POST	/students	Add a new student
GET	/students	Get all students
GET	/students/:id	Get student by ID
PUT	/students/:id	Update student by ID
DELETE	/students/:id	Delete student by ID

📁 Folder Structure
bash
Copy
Edit
student-crud-app/
│
├── index.html      # Frontend UI
├── server.js       # Express backend
├── README.md       # You're reading it ;)
└── package.json     # Node dependencies
🧠 Tips
Data is stored in-memory (so it resets when the server restarts)

Use Postman for deeper testing and experimentation

Can be easily extended to use MongoDB or local .json file

📌 To-Do / Next Steps
✅ Build responsive UI (done)

✅ API integrated frontend (done)

🔔 Add alert messages or toast (next?)

🔍 Add search/filter for table

💾 Save to JSON or database

👨‍💻 Author
Made with ❤️ by Harshit Joshi


