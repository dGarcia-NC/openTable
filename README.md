![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)


# openTable

Hey there 👋, here's a Next.js project I'm working that is a clone of the [opentable.com](https://www.opentable.com/) website. In this project I used:
- SupaBase to host the PostgreSQL DB
- Prisma to interact with the DB
- React.js, Next.js, and TypeScript


## Here's a sample of what it looks like
![Image of the Next.js project I'm working on](readme_images/frontend-pic.png)

## Setup and connect a PostgreSQL Database
**Step 1:** Create a [https://supabase.com/](supabase) account

**Step 2:** Create a project within supabase.
> This will create PostgreSQL Database

**Step 3:** Copy the `Database Password` and temporarily paste it somewhere

**Step 4:** Navigate to the `Dashboard / Settings / Database`

**Step 5:** Copy the `Connection string`
![Screenshot of the Connection string you need to copy](readme_images/con_str_photo.png)

**Step 6:** Copy the `Connection string` into the `DATABASE_URL` and paste this into in the `.env` file

**Step 7:** Replace the `randompassword` with the `Database Password`

## Seed the Database
**Step 1:** Open the terminal and navigate to the root of the project and run this command to create the tables defined in the `schema.prisma` file
```bash
npx prisma db push
```

**Step 2:** Run the development server
```bash
npm run dev
```
**Step 3:** Seed the Database by navigating to [http://localhost:3000/api/seed](http://localhost:3000/api/seed) in the browser
> if you navigate back supabase within your browser, you'll notice that you have created tables within your database.

## You're all set, the frontend is connected to the Database:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 🤞
