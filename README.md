## Getting Started

First time

```bash
npm i
npm run dev
```

Run a production build

```bash
npm build
npm run start
```

## Docker
Build Docker image
```bash
docker-compose up --build -d
```

From the second time onwards run Docker image
```bash
docker-compose up -d
```

## Git Workflow

### Feature branches

- Each new feature should reside in its own branch.
- Feature branches use develop as their parent branch.
- When a feature is complete, it gets merged back into develop.
- Features should never interact directly with master.
