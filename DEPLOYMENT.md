# Deployment Guide: Vercel

Since you have already pushed your code to GitHub, deploying to Vercel is extremely easy.

## Steps

1.  **Create a Vercel Account**
    *   Go to [vercel.com](https://vercel.com/signup).
    *   Sign up using **Continue with GitHub**. (This is important so it can see your repositories).

2.  **Import Your Repository**
    *   Once logged in, you will see your dashboard.
    *   Click the **"Add New..."** button (usually top right) -> **"Project"**.
    *   You will see a list of your GitHub repositories.
    *   Find `my_portfolio` (it should be at the top) and click **"Import"**.

3.  **Configure Project**
    *   **Framework Preset:** Vercel usually auto-detects **Vite**. If not, select "Vite" from the dropdown.
    *   **Root Directory:** Leave as `./`.
    *   **Build Command:** `npm run build` (default).
    *   **Output Directory:** `dist` (default).
    *   **Environment Variables:** You don't need any for this portfolio unless you added hidden API keys.

4.  **Deploy**
    *   Click **"Deploy"**.
    *   Vercel will run the build. Wait about 30-60 seconds.
    *   Confetti will pop up! 🎊

5.  **View Your Site**
    *   Click **"Continue to Dashboard"**.
    *   You will see a "Domains" section with a link like `my-portfolio-vinay889900.vercel.app`.
    *   Click that link to see your live website!

## Updating Your Site
*   Whenever you want to make changes, just edit your code in VS Code, commit, and push to GitHub:
    ```bash
    git add .
    git commit -m "My updates"
    git push
    ```
*   Vercel detects the push and **automatically redeploys** your site with the new changes in ~1 minute.
