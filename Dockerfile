FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

RUN pnpm test:coverage

RUN pnpm build:storybook

EXPOSE 6006
CMD ["pnpm", "serve:storybook"]