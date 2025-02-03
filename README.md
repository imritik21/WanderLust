# WanderLust

**WanderLust** is a full-stack web application designed for seamless travel bookings and user management.

## 🚀 Features
- **RESTful API** built with **Node.js** and **Express.js**
- Secure **JWT Authentication** for user login and management
- **Booking Management**: Users can create, view, update, and delete their bookings
- **Error Handling** with custom Express middlewares
- **API Testing & Documentation** using **Postman**

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** MongoDB (with Mongoose)
- **API Testing:** Postman

## 📦 Project Structure
```
WanderLust/
├── init/               # Initial setup scripts
├── models/             # Mongoose models
├── node_modules/       # Project dependencies (excluded in .gitignore)
├── public/             # Static files (CSS, JS, images)
├── views/              # Front-end templates/views
├── app.js              # Main server file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Lock file for consistent dependency versions
└── Steps               # Documentation/notes
```

## ⚙️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/WanderLust.git
   cd WanderLust
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the server:**
   ```bash
   npm start
   ```

## 🔐 Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=3000
JWT_SECRET=your_secret_key
DB_URI=your_mongodb_uri
```

## 📋 API Documentation
Test and explore the API using **Postman**.

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss.

## 📄 License
This project is licensed under the MIT License.

---

*Happy coding with WanderLust! 🌍*

