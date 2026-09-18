# Shortly URL Shortening App

A responsive URL shortening application built with React and TypeScript. This project is a React refactor of an existing URL shortening interface and integrates with the Bitly API to create shortened links.

## Features

- Shorten valid URLs using the Bitly API
- Display shortened links dynamically
- Copy shortened URLs to the clipboard
- Save shortened links to localStorage
- URL validation and error handling
- Loading states during API requests
- Responsive desktop and mobile layouts
- Accessible form controls and navigation
- Reusable React components and custom hooks
- Secure API requests through a Netlify serverless function

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Bitly API
- Netlify Functions
- localStorage
- Git / GitHub

## Running the Project Locally

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root of the project and add your Bitly API token:

```env
BITLY_TOKEN=your_bitly_token
```

The `.env` file is excluded from Git and should not be committed.

Build the project:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Development Reflection

The primary goal of this project was to refactor an existing URL shortening application into React and TypeScript. Because the original interface and design were already established, much of the development process involved identifying pieces of the existing application that could become reusable React components rather than completely redesigning the project. I separated the interface into components for the header, hero section, URL shortener, shortened link cards, statistics, footer, and reusable section content. I also moved URL-shortening logic into a custom hook and used TypeScript interfaces to define the data passed between components.

The biggest challenge was working with the Bitly API. The API plan available for the project allowed only five shortened links per month, which made repeatedly testing the application against the real API impractical. To solve this, I created a mock response during development that generated unique Bitly-style URLs. This allowed me to test state updates, rendering, localStorage persistence, loading behavior, validation, and the copy-to-clipboard feature without consuming the limited API requests. After those features were working, I switched to the real Bitly API to verify the integration.

I also moved the Bitly request behind a Netlify serverless function so the API token would not be exposed in the client-side Vite bundle. With additional development time, I would improve the error messages returned from the API, add automated tests, and expand link-management features such as deleting individual links and displaying additional link information.

## Deployment

The production application is deployed with Netlify.

**Live Demo:** https://silly-cucurucho-7d9c57.netlify.app/

## Repository

**GitHub:** https://github.com/pleonard02/refactored-url-shortening-api-app-