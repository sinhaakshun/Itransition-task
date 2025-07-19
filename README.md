
# Drug Database Viewer

This is a full-stack application that displays drug data in a searchable and filterable table.

- Backend: Node.js + Express (TypeScript)
- Frontend: React + Material UI
- Database: MySQL
- Supports Docker-based deployment

---

## Project Structure

```
.
├── backend/          → Express.js backend (TypeScript)
├── frontend/         → React frontend with MUI
├── deployment/       → Docker Compose setup
├── mysql/init.sql    → SQL file to create and seed the database
```

---

##  A. One-Command Docker Setup

This is the **recommended** way to get the app running instantly.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/deployment
   ```

2. Run the following command:
   ```bash
   docker-compose up --build
   ```

3. Wait until all 3 services are running:
   - MySQL
   - Backend (Node.js API on port `3100`)
   - Frontend (React app on port `3000`)

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

You should now see the drug dashboard UI 🎉

---

##  B. Manual Local Setup (No Docker)

For full control or local development:

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sinhaakshun/Itransition-task.git
   cd your-repo-name
   ```

2. Open two terminals — one for each:

#### Backend

```bash
cd backend
cp .env  # Fill in DB_HOST, DB_USER, DB_PASSWORD, etc.
npm install
npm start
```

#### Frontend

```bash
cd frontend
cp .env  # Set API base URL (e.g., http://localhost:3100/api)
npm install
npm start
```

3. MySQL setup manually:

- Create the database:

```sql
CREATE DATABASE drugs_db;
USE drugs_db;
```

- Create the table:

```sql
CREATE TABLE drugs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(255),
  genericName TEXT,
  brandName TEXT,
  company VARCHAR(255),
  launchDate VARCHAR(255)
);
```

- Import drug data from the `init.sql` or insert manually.

4. Visit `http://localhost:3000` in your browser.

---

## Environment Variables

### Backend `.env`

```env
PORT=3100
DB_HOST=localhost
DB_PORT=3306
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_NAME=drugs_db
```

### Frontend `.env`

```env
REACT_APP_API_BASE_URL=http://localhost:3100/api
```

---

##  Docker Images

| Service   | Port    | Docker Image                        |
|-----------|---------|-------------------------------------|
| Frontend  | `3000`  | React dev server (via Node)         |
| Backend   | `3100`  | Node.js Express API                 |
| Database  | `3306`  | MySQL (8.x), seeded from `init.sql` |

---

## Features

- Drug list sortable by date
- Filter by company (dropdown)
- Responsive table with MUI
- Unit tests for React components (RTL + Jest)
- Paginated backend support

---

## License

MIT

---

## Author

Akshun Sinha  
🐙 GitHub: [@akshunsinha](https://github.com/akshunsinha)
