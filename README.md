## Working PROD Version
Working prod version can be found at https://posts.filiphristov.com/

## Getting Started

First time

```bash
npm i
npm run dev
```
Dev server will be accessible at http://localhost:3000

Run a production build

```bash
npm build
npm run start
```

Prod build will be accessible at http://localhost:8081

## Docker
Build Docker image
```bash
docker-compose up --build -d
```

From the second time onwards run Docker image
```bash
docker-compose up -d
```

Docker build will be accessible at http://localhost:8081

## Git Workflow

### Feature branches

- Each new feature should reside in its own branch.
- Feature branches use develop as their parent branch.
- When a feature is complete, it gets merged back into develop.
- Features should never interact directly with master.


##  Supported browsers
https://nextjs.org/docs/architecture/supported-browsers