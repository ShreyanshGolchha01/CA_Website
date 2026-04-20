This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contact Form Google Sheets Integration

The contact form submits data to `app/api/contact/route.ts`, and that route forwards the payload to your Google Apps Script Web App.
The sheet receives these fields:

- Timestamp
- Name
- Email
- Phone
- Subject
- Message

### Setup

1. Deploy your Apps Script as a Web App.
2. Set access to `Anyone`.
3. Create a `.env.local` file and add:

```bash
CONTACT_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyFoB8L3cUFqAd4gf7g2RyZXhTgi1Wn2wKPp39rr5b7EOVbSuCjkvvZoOLF5A22061F/exec
```

4. Restart the dev server.

### Why this works

Direct browser calls to Apps Script can fail due to CORS. This project avoids that by posting to the local Next.js API route first, then sending the data server-to-server to Apps Script.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
