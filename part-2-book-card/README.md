# Book Card Mini-Project (Part 2)

Welcome to the **Book Card Mini-Project**, a reusable Angular component created for the *Mastering Angular in 2025* blog series. This project demonstrates how to build a component that displays book details (title, author, publication year) in a clean, styled card, perfect for a library or bookstore application.

This project is featured in **Part 2: Diving Deep into Angular Components**, where we explore Angular’s component-based architecture, styling, and lifecycle hooks. It’s ideal for beginners and developers looking to practice Angular fundamentals.

## Project Overview

The Book Card component renders book details in a modular, reusable UI element. Built with Angular 19, it includes:

- **External CSS** for a polished, scoped card design.
- **Lifecycle hooks** (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`) to log component events.
- **Component architecture** for maintainability and reuse.

The app displays a single book card (e.g., “The Hobbit” by J.R.R. Tolkien, published 1937) within the root `AppComponent`.

## Setup and Installation

Follow these steps to run the project locally:

1. **Prerequisites**:
   - Node.js (v18 or higher)
   - Angular CLI. Install globally with:
     ```bash
     npm install -g @angular/cli
     ```

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gitesh08/mastering-angular-2025.git
   cd mastering-angular-2025/part-2-book-card
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the App**:
   ```bash
   ng serve
   ```
   Open `http://localhost:4200` in your browser to view the Book Card.

## Project Structure

Key files in the project:

- `src/app/book-card/book-card.component.ts`: Component logic with lifecycle hooks.
- `src/app/book-card/book-card.component.html`: Template for rendering book details.
- `src/app/book-card/book-card.component.css`: Styles for the card’s design.
- `src/app/app.component.html`: Root component hosting the book card.
- `src/app/app.module.ts`: Module declaring the components.

## Explore the Mastering Angular Series

This project is part of the **Mastering Angular in 2025** blog series, guiding you through Angular development with practical projects. Check out:

- **Part 1: Getting Started with Angular** ([Medium link](https://medium.com/@gitesh08/mastering-angular-a-developers-guide-to-building-modern-web-apps-386801f67466)): Set up Angular and create a “Hello, World!” app.
- **Part 2: Diving Deep into Angular Components** ([Medium link](https://medium.com/@gitesh08/mastering-angular-components-in-2025-01a8bdf4e0ce)): Learn components with this Book Card project.

Stay tuned for **Part 3**, which will explore lifecycle hooks and component interactions. Follow me on Medium for the latest posts.

## Try It Out

Experiment with the Book Card:

- Updateatown book data (title, author, year) in `book-card.component.ts`.
- Modify the styles in `book-card.component.css` to customize the card’s appearance.
- Add multiple book cards in `app.component.html` to simulate a library.

Share your modifications on LinkedIn and tag me—I’d love to see your work!

## Contributing

Fork this repository, submit issues, or send pull requests to enhance the project. Contributions are welcome!

## Connect with Me

- **Medium**: [medium.com/@gitesh08](https://medium.com/@gitesh08)
- **LinkedIn**: [linkedin.com/in/gitesh-mahadik](https://www.linkedin.com/in/gitesh-mahadik-7487961a0/)
- **GitHub**: [github.com/Gitesh08](https://github.com/Gitesh08)

Thank you for checking out the Book Card project! Let’s continue mastering Angular together.

Happy coding!
