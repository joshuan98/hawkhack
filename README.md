# TravelGPT - Your Personalized Trip Planner

## Description:

TravelGPT is an innovative and user-friendly web application designed to simplify the process of planning the perfect weekend getaway. We've taken the hassle out of trip planning by offering a one-of-a-kind service that crafts personalized itineraries based on your unique preferences and interests.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 12.0 or higher) and npm (version 6.0 or higher)
- You have an OpenAI API key
- You have a Mapbox API key

## Setup and Configuration

1. Install the required dependencies: `npm install`
1. Create a `config.json` file in the project's src directory to store your API keys:

```
{
  "OPENAI_ORGANISATION": "<your-organisation-key-here>",
  "OPENAI_APIKEY": "<your-api-key-here>",
  "MAPBOX_APIKEY": "<your-api-key-here>"
}
```

Note: | Make sure to keep your API keys secret and never share them with anyone.

## Running the Project

### `npm start`

In the project directory, you can run the above command to start the development server. The application will open in your default web browser at http://localhost:3000.
