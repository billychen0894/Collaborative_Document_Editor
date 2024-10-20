# Collaborative Document Editor

This project is a collaborative document editing platform built with React and ASP.NET Core.

## Project Structure

- `src/Frontend`: React frontend application
- `src/Backend`: ASP.NET Core backend services
- `src/Shared`: Shared DTOs and utilities
- `tests`: Test projects for frontend and backend
- `docs`: Project documentation
- `scripts`: Build and deployment scripts

## Getting Started

1. Clone the repository
2. Navigate to the project root
3. Run `docker-compose up --build` to start all services
4. Access the application at `http://localhost:3000`

## Development

- Frontend: Navigate to `src/Frontend` and run `npm start`
- Backend: Open the solution in Visual Studio or use `dotnet run` in each service directory

## Testing

- Frontend: Navigate to `src/Frontend` and run `npm test`
- Backend: Use `dotnet test` in the root directory

## Deployment

Use the scripts in the `scripts` directory for building and deploying the application.
