# Docker Setup for AppSwap Website

## Overview

The website uses a **multi-stage Docker build**:
1. **Stage 1**: Builds the Next.js app and exports static files
2. **Stage 2**: Serves the static files with nginx

## Quick Start

### Build locally
```bash
docker build -t appswap-website .
```

### Run locally
```bash
docker run -p 8080:80 appswap-website
```

Visit: http://localhost:8080

## GitHub Actions

The workflow automatically builds and publishes Docker images to GitHub Container Registry (ghcr.io).

### Triggers
- **Push to main**: Creates `latest` and `main` tags
- **Tags (v*)**: Creates version tags (e.g., `v1.0.0`, `1.0`, `1`)
- **Pull requests**: Builds but doesn't push
- **Manual**: Via workflow_dispatch

### Image Tags

After pushing, images are available at:
```bash
ghcr.io/appswap-dev/website:latest
ghcr.io/appswap-dev/website:main
ghcr.io/appswap-dev/website:v1.0.0  # for version tags
ghcr.io/appswap-dev/website:main-abc123  # SHA tags
```

### Pull and run from GitHub Container Registry
```bash
docker pull ghcr.io/appswap-dev/website:latest
docker run -p 8080:80 ghcr.io/appswap-dev/website:latest
```

## Configuration

### nginx.conf
- Gzip compression enabled
- Static asset caching (1 year)
- HTML caching (1 hour)
- Security headers
- Health check endpoint at `/health`

### Next.js
- Static export mode (`output: 'export'`)
- Images unoptimized for static hosting

## Production Deployment

### Docker Compose Example
```yaml
version: '3.8'
services:
  website:
    image: ghcr.io/appswap-dev/website:latest
    ports:
      - "80:80"
    restart: unless-stopped
```

### Kubernetes Example
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: appswap-website
spec:
  replicas: 2
  selector:
    matchLabels:
      app: appswap-website
  template:
    metadata:
      labels:
        app: appswap-website
    spec:
      containers:
      - name: website
        image: ghcr.io/appswap-dev/website:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: appswap-website
spec:
  selector:
    app: appswap-website
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

## Image Details

- **Base images**:
  - Build: `node:20-alpine`
  - Runtime: `nginx:alpine`
- **Final size**: ~50MB
- **Platforms**: linux/amd64, linux/arm64

## Health Check

Test container health:
```bash
curl http://localhost:8080/health
```

Expected response: `healthy`
