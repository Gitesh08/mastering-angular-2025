# Quote Card Mini-Project (Part 4)

Welcome to the **Quote Card Mini-Project**, a dynamic Angular application created for the *Mastering Angular in 2025* blog series. This project showcases a quote display app with cards that highlight favorite quotes and label quote lengths, demonstrating the power of Angular directives and pipes.

This project is featured in **Part 4: Directives and Pipes for Dynamic Templates**, where we dive into Angular’s directive types (Component, Structural, Attribute), custom directives, and pipes. It’s perfect for developers eager to enhance their UI with dynamic, reusable template logic.

## Project Overview

The Quote Card App displays a collection of quotes with author details and length labels ("Short," "Medium," "Long"). Built with Angular 20, it includes:

- **Custom Attribute Directive** (`HighlightFavoriteDirective`) to style favorite quotes with a golden border and yellow background.
- **Custom Pipe** (`QuoteLengthPipe`) to categorize quotes based on word count.
- **Service** (`QuoteService`) for managing quote data and favorite toggling.
- **Component Architecture** for modular, maintainable UI.

The app uses NgModules and features a responsive layout with clickable cards to toggle favorite status.

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
   cd mastering-angular-2025/part-4-quote-card
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the App**:
   ```bash
   ng serve
   ```
   Open `http://localhost:4200` in your browser to view the Quote Card App (checked as of 5:38 PM IST, June 12, 2025).

## Project Structure

Key files in the project:

- `src/app/quote-card/quote-card.component.ts`: Component logic for rendering quote cards.
- `src/app/quote-card/quote-card.component.html`: Template for displaying quote details.
- `src/app/quote-card/quote-card.component.css`: Styles for the card’s design.
- `src/app/highlight-favorite.directive.ts`: Custom directive for highlighting favorite quotes.
- `src/app/quote-length.pipe.ts`: Custom pipe for labeling quote lengths.
- `src/app/quote.service.ts`: Service for managing quote data and favorite status.
- `src/app/app.component.ts`: Root component hosting the quote cards.
- `src/app/app.module.ts`: Module declaring components, directives, and pipes.

## Explore the Mastering Angular Series

This project is part of the **Mastering Angular in 2025** blog series, guiding you through Angular development with practical projects. Check out:

- **Part 1: Getting Started with Angular** ([Medium link](https://medium.com/@gitesh08/mastering-angular-a-developers-guide-to-building-modern-web-apps-386801f67466)): Set up Angular and create a “Hello, World!” app.
- **Part 2: Diving Deep into Angular Components** ([Medium link](https://medium.com/@gitesh08/mastering-angular-components-in-2025-01a8bdf4e0ce)): Build the Book Card project.
- **Part 3: Lifecycle Hooks and Component Communication** ([Medium link](https://medium.com/@gitesh08/mastering-angular-components-in-2025-52f2f492d3cc)): Create the Task Tracker app.
- **Part 4: Directives and Pipes for Dynamic Templates** ([Medium link](https://medium.com/@gitesh08/mastering-angular-directives-and-pipes-in-2025-858158145e32)): Explore directives and pipes with this Quote Card App.

Stay tuned for **Part 5**, which will dive into services and dependency injection. Follow me on Medium for the latest posts.

## Try It Out

Experiment with the Quote Card App:

- Add new quotes to the `QuoteService` in `quote.service.ts`.
- Customize the card styles in `quote-card.component.css` or tweak the `HighlightFavoriteDirective` for different visual effects.
- Extend the `QuoteLengthPipe` to include additional length categories (e.g., "Epic" for very long quotes).
- Add a filter to display only favorite quotes in `app.component.html`.

Share your modifications on X or LinkedIn and tag me—I’d love to see your work!

## Contributing

Fork this repository, submit issues, or send pull requests to enhance the project. Contributions are welcome!

## Connect with Me

- **Medium**: [medium.com/@gitesh08](https://medium.com/@gitesh08)
- **LinkedIn**: [linkedin.com/in/gitesh-mahadik](https://www.linkedin.com/in/gitesh-mahadik-7487961a0/)
- **GitHub**: [github.com/Gitesh08](https://github.com/Gitesh08)

Thank you for checking out the Quote Card project! Let’s continue mastering Angular together.

Happy coding!
