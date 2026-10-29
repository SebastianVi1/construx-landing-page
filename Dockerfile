# syntax=docker/dockerfile:1

# Dependencies stage: install locked dependencies, cached until the lockfile changes
FROM oven/bun:1.4.2 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Dev stage: Astro dev server with hot reload; compose bind-mounts the source
FROM deps AS dev
EXPOSE 4321
CMD ["bunx", "astro", "dev", "--host", "0.0.0.0"]

# Build stage: render the static site
FROM deps AS build
COPY . .
RUN bun run build

# Runtime stage (default target): nginx serves the prerendered pages
FROM nginx:1.29-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
