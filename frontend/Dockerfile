# Use the official Node.js image as the base for the frontend
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the entire frontend code to the container
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx image to serve the built frontend
FROM nginx:alpine

# Copy the build output to Nginx's HTML directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the default Nginx HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]