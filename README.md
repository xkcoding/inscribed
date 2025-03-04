# inscribed.app

A slide-based tool for fast sketching and animating ideas.

![Inscribed App Interface](./docs/imgs/screenshot.png)

🚀 [Try Inscribed](https://inscribed.app) | [Feedback](https://github.com/chunrapeepat/inscribed/issues)

## Tutorials

- [How to use Google fonts?](./docs/custom-fonts.md)
- [How each export options work?](./docs/export-options.md)

## Features

- 🎨 Interactive drawing canvas powered by Excalidraw
- ⌨️ Keyboard shortcuts support
  - Copy/Paste functionality
  - Navigation with Up/Down arrows
  - Delete items
- 📏 Customizable document size
- 🖼️ Image import and manipulation
- 🔤 Google Fonts integration
- 🎭 Presentation mode for slideshows
- 📤 Export presentations as GIF
- 💾 Export/Import data functionality
- 🔗 Embed support via iframe, hosted on Gist

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/inscribed.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `pnpm install`
5. Start the development server: `pnpm dev`

## Docker Instructions

### Building the Docker Image

To build the Docker image for the application, run the following command:

```sh
docker build -t inscribed-app .
```

### Running the Docker Container

To run the Docker container, use the following command:

```sh
docker run -p 5173:5173 inscribed-app
```

### Using Docker Compose

You can also use Docker Compose to manage the application. To start the application with Docker Compose, run:

```sh
docker-compose up
```

## Changelog

- [23/2/2025] [v1.0.2](https://github.com/chunrapeepat/inscribed/pull/5) - slide bar ux improvement

- [16/2/2025] [v1.0.1](https://github.com/chunrapeepat/inscribed/pull/1) - ux improvement and indexeddb migration

- [11/2/2025] [v1.0.0](https://www.youtube.com/watch?v=wEXE8-6yEzw) - launch an MVP
  - shortcuts: copy/paste, up/down/delete
  - integrated google fonts
  - export: gif, iframe embed
  - full-screen presentation mode

- [04/03/2025] Added Docker support
  - Added Dockerfile to build the application
  - Added docker-compose.yml to manage multi-container applications
  - Added GitHub Actions workflow to build and push Docker images
  - Updated README with Docker instructions

---

Crafted with 🧡 by [@chunrapeepat](https://chunrapeepat.com)
