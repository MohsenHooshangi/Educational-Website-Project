# Persian CMS – Single Page Application with Node.js Backend & React Frontend

A full-featured **Persian CMS** built as a **Single Page Application (SPA)** with a **custom Node.js backend** and **MySQL database**.  
This project demonstrates building a scalable CMS with **dedicated APIs**, real-time CRUD operations, and a fully interactive React.js frontend.

---

## 🔧 Project Overview

- 👨‍💻 **Role:** Full-stack development (Frontend + Backend + Database)  
- 📅 **Status:** Completed  
- 🌐 **Test Environment:** [Localhost Development – mh-develop.local](http://mh-develop.local)  

---

## 🧰 Technologies Used

- **React.js** – SPA frontend with routing and reusable components.  
- **Node.js** – Backend server with custom REST APIs.  
- **MySQL** – Relational database for products, users, comments, and orders.  
- **CSS** – Component styling and layout.  

---

## 🧠 Features

- 🎨 **Frontend (React.js)**  
  - Dynamic **Sidebar** and **Header** templates.  
  - Routing with `useRoutes` for optimized navigation.  
  - Custom components: `ProductsTable`, `AddNewProduct`, `ErrorBox`, `DetailsModal`.  
  - State management with lifting state for better access.  

- ⚙️ **Backend (Node.js)**  
  - RESTful APIs for **products, comments, users, and orders**.  
  - Secure product CRUD (create, read, update, delete).  
  - Comment moderation system: approve, reject, edit, delete.  
  - User management: view, edit, and update user details.  

- 💾 **Database (MySQL)**  
  - Structured tables for products, comments, users, and orders.  
  - Sample schema and data import for development.  

- 🔐 **Additional Functionalities**  
  - Product availability handling.  
  - Multiple modals (confirm delete, edit product, edit comment, edit user).  
  - Error handling UI with custom error boxes.  

---

## 📂 Project Structure

### **`frontend/`**  
- `components/` – Reusable UI components (Sidebar, Header, ProductsTable, etc.).  
- `routes/` – React Router configuration.  
- `app.js`, `index.js` – Main entry points.  
- `custom.css` – Custom styling for UI.  

### **`backend/`**  
- `server.js` – Entry point of Node.js server.  
- `routes/` – APIs for products, comments, users, orders.  
- `db/` – Database connection and schema.  
- `package.json` – Backend dependencies.  

### **`screenshots/`**  
- `Home-Persian-CMS-Page.JPG` – CMS homepage preview.  
- `frontend.JPG` – React frontend preview.  
- `backend.JPG` – Node.js backend preview.  

---

## 📸 Screenshots

### 🏠 Home Page
![Admin Dashboard Home](./screenshots/Home-Persian-CMS-Page.JPG)

### 🎨 Frontend
![Frontend](./screenshots/frontend.JPG)

### ⚙️ Backend
![Backend](./screenshots/backend.JPG)

---

## 🗂️ Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/MohsenHooshangi/Persian-CMS.git
   cd Persian-CMS

2. Install frontend dependencies:

    cd frontend
    npm install

3. Install backend dependencies:

    cd backend
    npm install

4. Import database schema:
    Run the provided schema.sql inside MySQL.

5. Configure environment variables:
    Create .env in backend and set DB credentials.

6. Run backend server:
    npm start

7. Run frontend development server:
    npm start


## 📌 Notes

- SPA architecture for smooth navigation.
- Custom Node.js APIs fully integrated with React frontend.
- Database-driven with MySQL relational models.
- Project structured for scalability and modularity.

---

## 📬 Contact

If you’d like to learn more or collaborate:

- 📧 Email: mr.hooshangi.official@gmail.com
- 🌐 Website: www.mohsenhooshangi.ir
- 🖥️ GitHub: github.com/MohsenHooshangi
- 💼 LinkedIn: linkedin.com/mohsen-houshangi