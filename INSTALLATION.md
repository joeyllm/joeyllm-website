
## 🚀 How to Open and Run the The Website Locally

### 🧩 Step 1: Install VS Code

**Goal:** Get a proper coding editor.

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download and install **Visual Studio Code** (choose macOS or Windows version).
3. Open VS Code once it’s installed.

---

### 🪄 Step 2: Install Node.js

**Goal:** You need Node.js to run Next.js projects.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version.
3. Run the installer, just click “Next” through the setup screens.
4. Once done, close and reopen VS Code.

*(This automatically installs npm as well, which you’ll use later.)*

---

### 🧰 Step 3: Get Git (if you don’t already have it)

**Goal:** You’ll use Git to download the project.

* On **Mac:** It’s usually already installed. If not, install [Homebrew](https://brew.sh/) and then run `brew install git`.
* On **Windows:** Download Git from [https://git-scm.com/downloads](https://git-scm.com/downloads) and follow the prompts.

You only need to do this once.

---

### 📦 Step 4: Clone the Project

**Goal:** Download the code from GitHub.

1. Open VS Code.
2. Press **Ctrl+Shift+P** (or **Cmd+Shift+P** on Mac).
3. Type `Git: Clone` and press Enter.
4. Paste the project link:

   ```
   https://github.com/joeyllm/web-joeyllm-website.git
   ```
5. Choose a folder on your computer to save it.
6. Once it’s finished, click **“Open”** when VS Code asks.

---

### ⚙️ Step 5: Install the Project Dependencies

**Goal:** Download everything the project needs.

1. In VS Code, open the **Terminal** (View → Terminal).
2. Run this command:

   ```bash
   npm install
   ```

   This shouldn't take too long.

---

### 🖥️ Step 6: Run the Project

**Goal:** Start the development server.

Run this command in the same terminal:

```bash
npm run dev
```

You should see something like:

```
Local: http://localhost:3000
```

Click that link or open it in your browser - that’s your project running locally!

---

### 💡 Extra Tips

* **If you get errors:** Restart VS Code and try again.
* **To stop the server:** Go to the terminal and press **Ctrl + C**.
* **To make edits:** Open files in VS Code’s sidebar — changes will update automatically.

---

### 🧠 Optional: VS Code Extensions

To make life easier, install these (from the Extensions tab):

* 🟢 **ES7+ React/Redux/React-Native snippets** — for quick React code shortcuts
* 💅 **Prettier** — auto-formats code nicely
* 🔍 **GitLens** — helps see who changed what in the code

