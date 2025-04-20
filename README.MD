# 🚀 LaunchLoop – Full-Stack CI/CD Pipeline  
LaunchLoop is a full-stack application template integrated with GitHub Actions for automated testing and deployment. Every feature branch is tested via Cypress before it merges into `develop`, and when `develop` is merged into `main`, the app is auto-deployed to Render using deploy hooks.  
## 📌 Features  
- ✅ Cypress component test execution on every PR to `develop`  
- 🚀 Auto-deploy to Render when `develop` is merged into `main`  
- 🔐 Secure secrets via GitHub Actions  
- 🧪 Reliable continuous integration & delivery  
- 🧱 Modular structure for frontend + backend  
## 🧑‍💻 Developer Workflow  
1. **Clone the repo:**  
```bash  
git clone https://github.com/your-username/launchloop.git  
```  
2. **Install dependencies:**  
```bash  
npm install  
```  
3. **Run app locally:**  
```bash  
npm start  
```  
## 🧪 Testing (Cypress)  
Cypress component tests are run automatically when a pull request is created targeting the `develop` branch. These are configured in `.github/workflows/test-on-develop.yml`.  
Run locally:  
```bash  
npx cypress open  
```  
## 🚀 Deployment (Render)  
When `develop` is merged into `main`, a GitHub Action triggers a POST request to the Render Deploy Hook.  
You must:  
- Disable auto-deploy in Render  
- Copy your deploy hook URL  
- Add it to GitHub Actions Secrets as `RENDER_DEPLOY_HOOK`  
## 📁 Branch Strategy  
- `main` → Live production code  
- `develop` → Integration branch for all features  
- `feature/xyz` → Short-lived dev branches merged into `develop` via PR  
## 🛠 Tech Stack  
- Node.js  
- Express  
- MongoDB (via Mongoose)  
- TypeScript  
- Cypress  
- GitHub Actions  
- Render  
## 📄 License  
MIT License  
## 🙌 Credits  
- Built by an aspiring dev committed to clean CI/CD pipelines and production-ready workflows.
- 📚 Xpert Learning — for helpful coding insights along the journey
- 🤖 ChatGPT — for READme magic 