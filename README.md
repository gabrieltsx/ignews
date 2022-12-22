## Ig.News

Ig.News is a news subscription project, using Next + Next Auth + React + FaunaDB + Prismic CMS + Stripe + SASS + Jest + Testing Library

## Layout
![Screenshot](logo.png)

## Installation

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```bash
yarn
```

## Configuration

Add a file (.env.local) with the following settings:

```bash

# Stripe
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic CMS
PRISMIC_ENDPOINT=https://ignewsg.cdn.prismic.io/api/v2
PRISMIC_ACCESS_TOKEN=
```

## Usage

Just run `dev` script.

```bash
yarn dev
```

## Contact

Any question, bug and comment, you can mail me in gabrielhenrique.ls96@gmail.com or use Issues tab here in GitHub

Thank you.