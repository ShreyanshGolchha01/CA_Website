This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contact Form Email Integration

The contact form now sends submissions to email through `app/api/contact/route.ts`.
Each email is sent in a clear table format with:

- Name
- Email
- Phone
- Message
- Submitted time
- User agent

### Setup

1. Create a `.env.local` file in the project root.
2. Copy values from `.env.example`.
3. Fill SMTP credentials:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER_EMAIL=caankitlunawat@gmail.com
CONTACT_FROM_EMAIL=your-email@gmail.com
```

Notes:

- For Gmail, use an App Password (not your normal login password).
- If `CONTACT_RECEIVER_EMAIL` is not provided, emails are sent to the `firmInfo.email` value from `data/mock.ts`.
- After editing `.env.local`, restart the dev server.

### Troubleshooting

- `Email service is not configured (...)`: one or more SMTP values are missing in `.env.local`.
- `SMTP authentication failed`: credentials are wrong, or Gmail App Password is not used.
- `Unable to connect to the email server`: check SMTP host/port and internet/firewall.

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
