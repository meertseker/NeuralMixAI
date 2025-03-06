# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the application
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "start"]
