# Node.js GraphQL

## Name

- Kenya Luna
# Node.js GraphQL Example with Apollo Server

This project is a basic "Hello, World!" GraphQL API built with **Node.js** and **Apollo Server**. It includes a single query `hello` that returns a greeting message. The application is exposed to the internet using **Ngrok** for testing and external access.

## Features
- **Node.js**: JavaScript runtime for building server-side applications.
- **Apollo Server**: Powerful GraphQL server for creating APIs.
- **GraphQL**: Query language for APIs to retrieve and manipulate data.
- **Ngrok**: Tool to create a secure tunnel to expose the API publicly.

## Requirements
- Node.js (version 16 or higher)
- npm (Node package manager)
- Ngrok (installed and configured)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/lunakenya/Proyect--with-GraphQL.git
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
Running the Application
Start the Apollo Server:
   ```bash
   npm run dev
   ```
Test the query in the playground: In the interface, run this query:
   ```bash
{
    hello
}
   ```
You should get:
![imagen](https://github.com/user-attachments/assets/9cf6b4fc-cca9-41f2-85c7-c613f7c50baf)

Expose the application using Ngrok:
