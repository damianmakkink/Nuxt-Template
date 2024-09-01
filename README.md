# Nuxt 3 Quickstarter Template

This repository is a Nuxt 3 quickstarter template that comes pre-configured with essential integrations such as Nuxt UI, Nuxt Fonts, i18n, Pinia, Firebase, AlgoliaSearch, and Vitest. It is designed to get you up and running quickly with a fully-featured Nuxt 3 project.

## Features

- **Nuxt UI**: Fully styled and customizable components for Nuxt, powered by Headless UI and Tailwind CSS.
- **Nuxt Fonts**: Plug-and-play web font optimization and configuration for Nuxt apps.
- **i18n**: i18n features for your Nuxt project so you can easily add internationalization.
- **Pinia**: The Vue Store that you will enjoy using.
- **Firebase**: Firebase integration for authentication, Firestore, and more.
- **AlgoliaSearch**: Fast and powerful search with Algolia.
- **Vitest**: Testing setup with Vitest, a blazing-fast unit testing framework.

## Setup

Make sure to install the dependencies:

```bash
# bun (recommended)
bun install

# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Configuration

### Firebase

1. Create a Firebase project in the Firebase Console.
2. Copy your Firebase configuration and replace the placeholder values in the .env file.

```
NUXT_PUBLIC_FIREBASE_API_KEY=""
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NUXT_PUBLIC_FIREBASE_PROJECT_ID=""
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NUXT_PUBLIC_FIREBASE_APP_ID=""
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""
```

### AlgoliaSearch

1. Create an Algolia account and obtain your API keys from the Algolia Dashboard.
2. Add your Algolia credentials to the .env file.

```
NUXT_PUBLIC_ALGOLIA_APP_ID=""
NUXT_PUBLIC_ALGOLIA_API_KEY=""
```

### i18n

Update the i18n configuration in `i18n.config.ts` and the `locales` folder to include the languages and translations you need for your project.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev

# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# bun
bun run build

# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# bun
bun run preview

# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

## Testing

Run unit tests with Vitest:
```bash
# bun
bun run test

# npm
npm run test

# pnpm
pnpm run test

# yarn
yarn test
```

## Deployment
Check out the [Nuxt 3 deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deploying your application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or enhancements.

## Learn More
- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Firebase Documentation](https://firebase.google.com/docs/build)
- [Algolia Documentation](https://www.algolia.com/doc/libraries/javascript/v4/)
- [Vitest Documentation](https://vitest.dev/guide/)
