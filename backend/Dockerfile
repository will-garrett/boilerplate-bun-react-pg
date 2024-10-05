# Use the official Bun base image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and bun.lockb files
COPY package.json bun.lockb ./

# Install the dependencies using Bun
RUN bun install

# Copy the entire backend code to the container
COPY . .

# Expose the application port
EXPOSE 4000

# Start the Bun application
CMD ["bun", "run", "app.ts"]