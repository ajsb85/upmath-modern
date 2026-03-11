# Contributing to UpMath Modern

First off, thanks for taking the time to contribute! 🎉

## Development Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ajsb85/upmath-modern.git
    cd upmath-modern
    ```
2.  **Install dependencies**:
    Ensure you have Node.js installed (v18+ recommended).
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Code Quality & Standards

To maintain a high standard of code quality, we use ESLint and TypeScript for static analysis. Please ensure your changes pass all checks before submitting a pull request.

### Linting
We use ESLint to catch common mistakes and enforce a consistent style.
```bash
npm run lint
```

### Type Checking & Building
Verify that there are no TypeScript errors and that the production build completes successfully.
```bash
npm run build
```
Note: The `build` command runs `tsc` (TypeScript compiler) followed by `vite build`.

### Security
Always check for vulnerabilities before pushing:
```bash
npm audit
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

-   `feat:` A new feature
-   `fix:` A bug fix
-   `docs:` Documentation only changes
-   `style:` Changes that do not affect the meaning of the code
-   `refactor:` A code change that neither fixes a bug nor adds a feature
-   `test:` Adding missing tests or correcting existing tests
-   `chore:` Changes to the build process or auxiliary tools

**Limits**:
-   Header: 50 characters or less.
-   Body: Wrapped at 72 characters.

## Deployment

The project is deployed on Vercel. While automatic deployments can be configured, we provide a manual deployment script for authorized maintainers.

### Manual Production Deploy
To deploy the current state of the repository to production:
1.  Ensure you have a valid `VERCEL_TOKEN`.
2.  Run the deployment command:
    ```bash
    export VERCEL_TOKEN="your_token_here"
    npm run deploy
    ```
This script uses the Vercel CLI to perform a production build and deployment under the defined team scope.

## Pull Requests

1.  Fork the project and create your branch from `main`.
2.  Ensure your code passes all linting and type checks (`npm run lint && npm run build`).
3.  Describe your changes clearly in the pull request description.
4.  Submit the PR for review!
