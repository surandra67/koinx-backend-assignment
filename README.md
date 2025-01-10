# Koinx Backend Assignment

## Project Description
A backend system to fetch, store, and analyze cryptocurrency data using Node.js, Express, and MongoDB.

## Features
- Fetches crypto prices every 2 hours.
- Provides APIs for latest stats and standard deviation calculations.

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Add a `.env` file with the following content:
   ```
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/koinxAssignment
   ```
4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints
- **GET** `/api/stats?coin=<coin>`: Fetch latest stats for the specified coin.
- **GET** `/api/deviation?coin=<coin>`: Fetch standard deviation of the last 100 prices.
