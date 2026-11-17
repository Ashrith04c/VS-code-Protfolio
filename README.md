Ashrith Ajmera — Developer Portfolio

A VS Code-inspired developer portfolio built with Next.js, React, TypeScript, and modern web technologies. Designed to recreate the familiar Visual Studio Code experience while showcasing my projects, technical skills, professional journey, and achievements.

Features

VS Code-Inspired UI – A developer-focused interface inspired by Visual Studio Code.

Interactive Sidebar – Navigate through different portfolio sections.

Multiple Themes – Customize the editor experience with different color themes.

Interactive Terminal – Explore portfolio information through custom terminal commands.

GitHub Integration – Explore my GitHub profile and repositories.

Projects Showcase – Discover applications and projects I've built.

Journey Timeline – Explore my education, college activities, and hackathon participation.

Skills & Technologies – Browse my technical skills through the Extensions view.

Responsive Design – Optimized for different screen sizes.

Resume Access – View and download my resume.

## 🎨 Themes

The portfolio supports multiple editor themes:

-  GitHub Dark (Default)
-  One Dark Pro
-  Dracula
-  Ayu Dark
-  Ayu Mirage
-  Nord
-  Night Owl

## 🛠️ Tech Stack

Frontend
- Next.js
- React
- TypeScript
- CSS Modules

Backend & APIs
- Node.js
- REST APIs
- GitHub API

Tools & Platforms
- Git & GitHub
- Docker
- VS Code
- Vercel

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Ashrith04c/vscode-portfolio.git
```

Navigate to the project directory:

```bash
cd vscode-portfolio
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and configure the following variables:

```env
GITHUB_API_KEY=your_github_token
NEXT_PUBLIC_GITHUB_USERNAME=Ashrith04c
```

**Environment variables explained:**

- `GITHUB_API_KEY`: Optional GitHub personal access token used to authenticate GitHub API requests and increase the API rate limit.
- `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username, used to fetch and display your GitHub profile and repositories.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
vscode-portfolio/
│
├── app/                  # Next.js application routes
│   ├── about/
│   ├── articles/         # Journey page
│   ├── github/
│   ├── projects/
│   └── ...
│
├── components/           # Reusable UI components
│
├── public/               # Static assets and resume
│   ├── logos/
│   └── Ashrith_Ajmera_Resume.pdf
│
├── styles/               # CSS modules and styling
│
├── portfolio.config.ts   # Personal portfolio configuration
│
├── package.json
└── README.md
```

## 🧑‍💻 Customization

Personal portfolio details can be configured in `portfolio.config.ts`.

Update the following sections to make the portfolio your own:

Profile: Name, role, location, biography, website URL, and SEO details.

Socials: GitHub, LinkedIn, and other social profile links.

Experience: Professional experience and freelance work.

Writing / Journey: Personal journey and related page content.

Extensions: Technical skills and technologies displayed in the Extensions view.

Projects: Project names, descriptions, links, and other details.

Routes: Portfolio pages, navigation icons, keyboard shortcuts, and explorer entries.

To add a new page, create a route inside the `app/` directory and configure it in the routes section of `portfolio.config.ts`.

## 🌐 Connect With Me

- GitHub: [Ashrith04c](https://github.com/Ashrith04c)

## 🚀 Deployment

This portfolio can be deployed using [Vercel](https://vercel.com/).

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy your application.

For more information, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---
Built with ❤️ by Ashrith Ajmera


