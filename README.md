# News Aggregator

## Overview

The News Aggregator is a React.js-based web application that allows users to search and filter news articles from various sources. Users can customize their news feed based on their preferred sources and authors. The application is designed with a responsive UI/UX using Tailwind CSS and follows best practices such as DRY, KISS, and SOLID principles.

## Features

- **Search Articles**: Users can search for articles based on keywords.
- **Filter by Source and Author**: Filters are available to refine the news feed by source and author.
- **Personalized News Feed**: Users can customize their feed by selecting preferred sources and authors.
- **Responsive Design**: The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
- **Dockerized Setup**: The project can be containerized and run in a Docker environment for easy deployment.

## Technologies Used

- React.js
- Tailwind CSS
- Docker
- News API

## Folder Structure

```
src/
│
├── api/               # API configuration and calls
├── components/        # Reusable components like Filters, Header, NewsFeed, SearchBar, Preferences
│   ├── Filters/
│   ├── Header/
│   ├── NewsFeed/
│   ├── SearchBar/
│   └── Preferences/
├── pages/             # Page components
│   └── Home/
├── styles/            # Global and component-specific styles
└── utils/             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or Yarn
- Docker (for containerized setup)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mute-o-rehman/news-aggregator.git
   cd news-aggregator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or if you prefer Yarn:

   ```bash
   yarn install
   ```

### Running the Application Locally

To run the application locally, use the following command:

```bash
npm start
```

Or with Yarn:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

### Running the Application in Docker

1. **Build the Docker image:**

   ```bash
   docker build -t news-aggregator .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 3000:3000 -d news-aggregator
   ```

   This will start the application in a Docker container, making it available at `http://localhost:3000`.

3. **Stopping the Docker container:**

   To stop the running container, first find the container ID:

   ```bash
   docker ps
   ```

   Then stop it using:

   ```bash
   docker stop <container_id>
   ```

## Customization and Further Development

### Adding New Features

To add new features or modify existing ones, simply create a new branch from `main`, make your changes, and submit a pull request.

### Styling

The project uses Tailwind CSS for styling. You can customize the styles by editing the `tailwind.config.js` file or adding new styles directly in your components.

### Deployment

The application can be deployed to any cloud service or hosting platform that supports Docker. Simply push the Docker image to a container registry like Docker Hub, then deploy it to your cloud provider.
