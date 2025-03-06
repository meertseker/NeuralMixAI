# React Frontend with Docker

This project sets up a **React frontend** inside a **Docker container**. It supports live reloading and can be easily deployed.

---

## 🚀 Setup & Run

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo/frontend
```

### **2. Build & Run with Docker**
#### 🏗 **Build the Docker Image**
```bash
docker build -t my-frontend .
```

#### ▶ **Run the Container**
```bash
docker run -p 3000:3000 my-frontend
```
Then, open **http://localhost:3000** in your browser.

---

## 🔄 Enable Live Reload (Hot Reloading)
By default, Docker does **not** detect file changes. To fix this, use **volume mounting**:

```bash
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules my-frontend
```

Or, with **Docker Compose**, add this to `docker-compose.yml`:
```yaml
version: '3'
services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

Then, run:
```bash
docker-compose up
```

Now, any changes in your `frontend` folder will instantly reflect in the browser.

---

## 📂 Dockerfile (For Reference)
Make sure your `frontend/Dockerfile` contains:
```dockerfile
# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy dependencies first
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose React's default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
```

---

## ❌ Stop and Remove the Container
To stop the running container:
```bash
docker ps  # Find the container ID
docker stop <container_id>
```
To remove old containers:
```bash
docker system prune -a
```

---

## ✅ Summary
- Build the image: `docker build -t my-frontend .`
- Run the container: `docker run -p 3000:3000 my-frontend`
- Enable live reload with Docker Compose
- Stop the container: `docker stop <container_id>`

Now your React app is running inside Docker! 🚀

