# Getting Started

Always do `git pull` and `yarn`

### First time only (To setup husky precommit hooks)
`yarn prepare`

# Preview URLs
- https://paymentlabs.vercel.app
- https://prizepayments.vercel.app
- https://mallo.vercel.app


# CMS URLs
- https://paymentlabs.sanity.studio
- https://prizepayments.sanity.studio
- https://mallo.sanity.studio


# To start development

1. `yarn`
2. `yarn bootstrap`
3. `yarn dev`

# To modify one of the packages `/components` or `/utils`

1. Make code change
2. `yarn build:ts`

# CI

1. `yarn`
2. `yarn bootstrap`
3. `yarn ci`

# Testing production build locally

Run CI steps above

1. `yarn serve-local`
