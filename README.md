# CA Website

A modern, responsive Chartered Accountant (CA) service website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
This project is designed to showcase professional CA services, provide firm information, and allow potential clients to connect through an integrated contact form.

## 🚀 Project Description

**CA_Website** is a business-focused web application for a Chartered Accountant practice. It presents services, branding, and contact details in a clean and professional interface.  
The project includes a server-side contact form workflow that sends user enquiries to **Google Sheets** via a **Google Apps Script Web App**, making lead capture simple and organized.

## ✨ Features

- Responsive UI built with Next.js App Router
- TypeScript-based codebase for better maintainability
- Tailwind CSS styling setup
- Component-driven folder structure
- Contact form API endpoint (`app/api/contact/route.ts`)
- Google Sheets integration through Apps Script

## 🧱 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS, CSS
- **Runtime:** Node.js

## 📁 Project Structure

- `app/` – App Router pages, layouts, and API routes
- `components/` – Reusable UI components
- `data/` – Static/local data resources
- `lib/` – Utility/helper functions
- `public/` – Static assets
- `styles/` – Global and custom styles

## ⚙️ Environment Variables

Create a `.env.local` file in the root and add:

```bash
CONTACT_GOOGLE_SCRIPT_URL=your_google_apps_script_web_app_url
```

## 📨 Contact Form + Google Sheets Integration

The contact form posts data to `app/api/contact/route.ts`.  
That API route forwards the submission to your deployed Google Apps Script Web App.

Expected sheet fields:

- Timestamp
- Name
- Email
- Phone
- Subject
- Message

### Setup Steps

1. Deploy your Google Apps Script as a **Web App**.
2. Set access to **Anyone**.
3. Add `CONTACT_GOOGLE_SCRIPT_URL` in `.env.local`.
4. Restart the development server.

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.  
Feel free to fork the repository and create a pull request.

## 📄 License

No license has been added yet. Add a LICENSE file if you plan to distribute or open-source this project under specific terms.
