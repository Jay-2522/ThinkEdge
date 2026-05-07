# My Website

> A fast, modern, and fully responsive web application built for performance and scalability.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [License](#license)

---

## Overview

A clean, high-performance website designed with a focus on user experience, speed, and maintainability. Built using modern web technologies and best practices for both development and production environments.

**Local Development URL:** [http://localhost:3000/](http://localhost:3000/)

---

## Tech Stack

| Layer         | Technology         | Purpose                              |
|---------------|--------------------|--------------------------------------|
| Frontend      | React.js           | Component-based UI development       |
| Framework     | Next.js            | Server-side rendering & routing      |
| Styling       | Tailwind CSS       | Utility-first responsive design      |
| Runtime       | Node.js            | JavaScript server-side runtime       |
| Package Mgr   | npm                | Dependency management                |
| Environment   | dotenv / .env.local| Secure environment variable handling |
| Deployment    | Vercel             | Cloud hosting & CI/CD pipeline       |

---

## Prerequisites

Ensure the following are installed before proceeding:

| Requirement | Minimum Version | Download |
|-------------|-----------------|----------|
| Node.js     | >= 18.x         | [nodejs.org](https://nodejs.org/) |
| npm         | >= 9.x          | Included with Node.js |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate into the project directory
cd your-repo

# Install all dependencies
npm install
```

---

## Configuration

Create or update the `.env.local` file in the root of the project:

```env
GEMINI_API_KEY=your_api_key_here
```

> **Security Notice:** Never expose or commit `.env.local` to version control. Verify it exists in your `.gitignore`.

---

## Running the App

Start the local development server:

```bash
npm run dev
```

Open your browser and visit:

**[http://localhost:3000/](http://localhost:3000/)**

To create a production build:

```bash
npm run build
npm start
```

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project in accordance with the license terms.

---

<div align="center">
  <sub>Built with React · Next.js · Tailwind CSS · Node.js</sub>
</div>
