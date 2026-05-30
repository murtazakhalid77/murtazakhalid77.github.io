# Murtaza Khalid Portfolio

A production-ready static portfolio website for a Software Engineer focused on Java, Spring Boot, Microservices, Kafka, Digital Banking, RTGS, RAAST, and Payment Systems.

## Structure

```text
portfolio/
  index.html
  about.html
  skills.html
  experience.html
  resume.html
  contact.html
  css/styles.css
  js/main.js
  assets/images/*.svg
  assets/docs/Murtaza-Khalid-Resume.pdf
```

## Run Locally

Because this site uses only HTML, CSS, and vanilla JavaScript, you can open `index.html` directly in a browser.

For a local server:

```powershell
cd C:\Users\MurtazaKhalid\Documents\portfolio
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `murtazakhalid77.github.io` or `portfolio`.
2. Copy these files into the repository root.
3. Commit and push:

```powershell
git add .
git commit -m "Add portfolio website"
git push origin main
```

4. In GitHub, open **Settings > Pages**.
5. Set **Source** to **Deploy from a branch**.
6. Choose the `main` branch and `/root` folder.
7. Save. GitHub Pages will publish the site after the build completes.

## Customization

- Replace `assets/images/avatar.svg` with a real professional headshot when ready.
- Update links in each HTML file if your GitHub Pages URL changes.
- Keep the resume PDF at `assets/docs/Murtaza-Khalid-Resume.pdf` so the download buttons continue to work.

## Tech Constraints

No frameworks, no libraries, no external CSS, no build step. The site is fully static and GitHub Pages-ready.
