# SvelteKit Todo App - University Group Project

This project is part of a university course focused on team collaboration and web development. It's a simple todo application built with SvelteKit and Tailwind CSS.

## 📝 Project Overview

This is a simple task management application that allows you to:
- Create and manage tasks
- Mark tasks as complete
- Delete tasks
- Switch between light and dark themes
- Enable/disable notifications
- Store your data locally in the browser

## 🚀 Getting Started (Complete Beginner's Guide)

### Step 1: Setting Up Your Development Environment

1. **Install Visual Studio Code**
    - Go to [Visual Studio Code website](https://code.visualstudio.com/)
    - Download the version for your operating system (Windows, Mac, or Linux)
    - Install it on your computer

2. **Install Node.js**
    - Go to [Node.js website](https://nodejs.org/)
    - Download the "LTS" (Long Term Support) version
    - Run the installer
    - To verify installation, open Command Prompt (Windows) or Terminal (Mac/Linux) and type:
      ```bash
      node --version
      ```
    - The command should display a version number

3. **Install pnpm**
   After installing Node.js, you need to install pnpm. Open Command Prompt (Windows) or Terminal (Mac/Linux) and run:
   ```bash
   npm install -g pnpm
   ```

   To verify the installation:
   ```bash
   pnpm --version
   ```

### Step 2: Download the Project

If you're new to Git:
1. Click the green "Code" button at the top of this page
2. Click "Download ZIP"
3. Extract the ZIP file to a folder on your computer

If you're familiar with Git:
```bash
git clone [repository-url]
```

### Step 3: Installing Dependencies

1. Open Command Prompt (Windows) or Terminal (Mac/Linux)
2. Navigate to the project folder
   ```bash
   # Windows example:
   cd C:\Users\YourName\Downloads\project-folder
   
   # Mac/Linux example:
   cd ~/Downloads/project-folder
   ```
3. Install the project dependencies
   ```bash
   pnpm install
   ```

### Step 4: Running the Application

1. In the same terminal window, run:
   ```bash
   pnpm dev
   ```
2. Open your web browser and go to: `http://localhost:5173`
    - The address will be shown in your terminal after running the command

## 🛠️ Available Scripts

In the project directory, you can run:

- `pnpm dev` - Runs the app in development mode
- `pnpm build` - Builds the app for production
- `pnpm preview` - Preview the production build

## 📁 Project Structure

```
my-sveltekit-app/
├── src/
│   ├── lib/
│   │   └── stores/          # State management
│   ├── routes/              # Application pages
│   ├── app.css             # Global styles
│   └── app.html            # HTML template
├── static/                  # Static assets
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🤔 Common Issues & Solutions

### Nothing happens when I run `pnpm dev`
- Make sure you have Node.js and pnpm installed
- Try deleting the `node_modules` folder and running `pnpm install` again
- Make sure you're in the correct directory

### Page shows blank screen
- Check your browser console for errors (Press F12)
- Clear your browser cache
- Make sure JavaScript is enabled in your browser

### Command not found: pnpm
- Run `npm install -g pnpm` to install pnpm globally
- On Windows, you might need to run PowerShell as administrator
- On Mac/Linux, you might need to use `sudo npm install -g pnpm`
- Restart your terminal after installation

### Permission errors when installing pnpm (Mac/Linux)
```bash
# Try using sudo
sudo npm install -g pnpm

# Or fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

## 🌟 Tips for New Developers

1. **Understanding package managers**
    - We use pnpm instead of npm because it's faster and more efficient
    - pnpm uses a unique approach to storing dependencies, saving disk space
    - Most commands are similar to npm, just replace `npm` with `pnpm`

2. **Get familiar with the terminal/command prompt**
    - This is where you'll run most development commands
    - Basic commands you'll need:
      ```bash
      ls (or dir on Windows) # List files
      cd folder-name        # Change directory
      cd ..                # Go back one folder
      pwd                  # Show current directory
      ```

3. **Learn to use Visual Studio Code**
    - Press Ctrl+` to open the integrated terminal
    - Install the Svelte extension for better development experience
    - Use File > Open Folder to open the project folder

4. **Browser Developer Tools**
    - Press F12 in your browser to open developer tools
    - Use the Console tab to see errors
    - Use the Elements tab to inspect the page structure

## 💡 Learning Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Development Basics - MDN](https://developer.mozilla.org/en-US/docs/Learn)
- [pnpm Documentation](https://pnpm.io/)
