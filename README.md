
# Full-Stack TypeScript App with Bun, Docker, React, and PostgreSQL

This project is a full-stack application built using **Bun** for the backend, **React** for the frontend, and **PostgreSQL** for the database. The project is containerized using **Docker** and orchestrated with **Docker Compose** for local development. TypeORM is used for database interaction, and JWT authentication is implemented for user login.

## Project Structure

```
/project-root
  ├── /backend                 # Bun backend (Express + TypeORM)
  ├── /frontend                # React frontend
  ├── /db                      # PostgreSQL database (Docker image)
  ├── /k8s                     # Kubernetes manifests (optional)
  ├── docker-compose.yml       # Docker setup for local development
  ├── /infra                   # Terraform, CI/CD setup (optional)
  └── README.md                # Project instructions
```

## Features

- **Backend**: Bun, Express, TypeORM, JWT Authentication
- **Frontend**: React with TypeScript, Webpack
- **Database**: PostgreSQL with TypeORM for ORM
- **Containerization**: Docker and Docker Compose for development
- **Security**: Password hashing with bcrypt and authentication using JWT

## Prerequisites

Before starting, ensure you have the following installed on your system:

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for frontend dependency management)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```

### 2. Set up environment variables

You need to create `.env` files for both the backend and frontend.

#### **Backend `.env`**
Create a `.env` file in the `/backend` directory with the following environment variables:

```bash
POSTGRES_HOST=db
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb
JWT_SECRET=your_jwt_secret
```

#### **Frontend `.env`**
If needed, create a `.env` file in the `/frontend` directory to configure any environment variables for the React app.

### 3. Start the application with Docker Compose

The easiest way to run the entire stack locally is with Docker Compose. This will spin up the backend, frontend, and PostgreSQL database as separate containers.

```bash
docker-compose up --build
```

- The backend will be available at `http://localhost:4000`.
- The frontend will be available at `http://localhost:3000`.

### 4. Database Setup

TypeORM will automatically sync your entities with the database. If you need to run migrations, you can use TypeORM CLI commands:

```bash
docker exec -it backend-container-name bash
# Inside the backend container
bun typeorm migration:run
```

Replace `backend-container-name` with the name of your backend container from `docker ps`.

## Project Configuration

### Backend Configuration

- **Language**: TypeScript
- **Framework**: Express (served with Bun)
- **ORM**: TypeORM
- **Authentication**: JWT with bcrypt for password hashing
- **Database**: PostgreSQL

#### Backend Directory Structure

```
/backend
  ├── /controllers               # Route logic
  ├── /middlewares               # Authentication middlewares
  ├── /routes                    # API routes
  ├── /models                    # Database models (TypeORM)
  ├── /services                  # Business logic
  ├── app.ts                     # Bun entry point
  ├── ormconfig.ts               # TypeORM configuration
  ├── Dockerfile                 # Docker for backend service
  ├── .env                       # Environment variables
```

### Frontend Configuration

- **Language**: TypeScript
- **Framework**: React
- **Build Tool**: Webpack

#### Frontend Directory Structure

```
/frontend
  ├── /components                 # Reusable components
  ├── /pages                      # Page components (Landing, Login, Dashboard)
  ├── /services                   # API services (axios)
  ├── App.tsx                     # Main entry
  ├── index.tsx                   # React DOM render
  ├── Dockerfile                  # Docker for frontend
```

### Deployment

For production deployment, you can either use Docker Compose or Kubernetes (for advanced orchestration).

#### Docker Compose Deployment

For deploying to a production environment, modify the `docker-compose.yml` to use production settings.

```bash
docker-compose -f docker-compose.yml up --build
```

#### Kubernetes Deployment (Optional)

If you want to deploy this project with Kubernetes, you can use the manifests provided in the `/k8s` directory.

```bash
kubectl apply -f k8s/deployment.yaml
```

### Running Tests

You can add unit and integration tests using your preferred testing library (Jest, Mocha, etc.). The test commands can be added to your `package.json`.

```bash
npm run test
```

## Common Issues

1. **Database connection errors**: Ensure that the `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` are correctly set in your `.env` files.
2. **TypeORM errors**: Ensure that `emitDecoratorMetadata` and `reflect-metadata` are properly configured in the backend.
3. **Docker issues**: Ensure Docker is running, and containers are correctly configured.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or create pull requests to contribute to this project.

