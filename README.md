# Mastering Angular in 2025

Welcome to the **Mastering Angular in 2025** repository! This is your go-to spot for hands-on mini-projects tied to my Medium blog series, designed to help you level up your Angular skills. Whether you’re just starting out or you’re a seasoned dev looking to sharpen up, these projects break down key Angular concepts like components, lifecycle hooks, component communication, directives, and pipes through practical, bite-sized apps. Each project lives in its own folder and matches a blog post in the series.

Dive in, play around, and let’s master Angular together!

![Angular dev](https://github.com/user-attachments/assets/c94d70e9-30f3-4601-b6b5-82f18a734ec9)

## Projects

Here’s the lineup of mini-projects in this repo, each linked to a blog post:

- **Part 2: Book Card** (`part-2-book-card`)
  - A reusable Angular component displaying book details (title, author, year) in a sleek card.
  - Features: Component creation, external CSS, lifecycle hooks (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`).
  - Blog Post: [Part 2: Diving Deep into Angular Components](https://medium.com/@gitesh08/mastering-angular-components-in-2025-01a8bdf4e0ce)
  - Folder: `part-2-book-card`

- **Part 3: Task Tracker** (`part-3-task-tracker`)
  - A dynamic task tracker app where you can add tasks and mark them as complete.
  - Features: Lifecycle hooks (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`), component communication with `@Input` and `@Output`, and a simple service for data sharing.
  - Blog Post: [Part 3: Lifecycle Hooks and Component Communication](https://medium.com/@gitesh08/mastering-angular-components-in-2025-52f2f492d3cc)
  - Folder: `part-3-task-tracker`

- **Part 4: Quote Card App** (`part-4-quote-card`)
  - A quote display app with cards showing text, author, and length, plus a favorite toggle feature.
  - Features: Custom attribute directive (`HighlightFavoriteDirective`) for styling favorite quotes, custom pipe (`QuoteLengthPipe`) for labeling quote lengths, and a service for managing quotes.
  - Blog Post: [Part 4: Directives and Pipes for Dynamic Templates](https://medium.com/@gitesh08/mastering-angular-directives-and-pipes-in-2025-858158145e32)
  - Folder: `part-4-quote-card`

More projects are coming as the series rolls on—stay tuned for Part 5!

## Getting Started

Each project is a standalone Angular app with its own setup. To run any project:

1. **Prerequisites**:
   - Node.js (v18 or higher)
   - Angular CLI. Install it globally with:
     ```bash
     npm install -g @angular/cli
     ```

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gitesh08/mastering-angular-2025.git
   cd mastering-angular-2025
   ```

3. **Navigate to a Project**:
   For example, to run the Quote Card App:
   ```bash
   cd part-4-quote-card
   ```

4. **Install Dependencies**:
   ```bash
   npm install
   ```

5. **Run the Project**:
   ```bash
   ng serve
   ```
   Open `http://localhost:4200` in your browser (checked as of 5:34 PM IST, June 12, 2025).

Each project folder (e.g., `part-2-book-card/README.md`, `part-3-task-tracker/README.md`, or `part-4-quote-card/README.md`) has its own `README.md` with specific setup details.

## About the Mastering Angular Series

The *Mastering Angular in 2025* blog series is your guide to building modern web apps with Angular. Each part comes with a mini-project to hammer home key concepts. Here’s the rundown so far:

- **Part 1: Getting Started with Angular** ([Medium link](https://medium.com/@gitesh08/mastering-angular-a-developers-guide-to-building-modern-web-apps-386801f67466)): Set up Angular and build a “Hello, World!” app.
- **Part 2: Diving Deep into Angular Components** ([Medium link](https://medium.com/@gitesh08/mastering-angular-components-in-2025-01a8bdf4e0ce)): Create the Book Card project and learn component basics.
- **Part 3: Lifecycle Hooks and Component Communication** ([Medium link](https://medium.com/@gitesh08/mastering-angular-components-in-2025-52f2f492d3cc)): Build the Task Tracker and master lifecycle hooks and communication.
- **Part 4: Directives and Pipes for Dynamic Templates** ([Medium link](https://medium.com/@gitesh08/<part-4-slug>)): Build the Quote Card App to explore custom directives and pipes.

Part 5 is coming soon, diving into services and dependency injection with another fun project. Follow me on Medium to stay in the loop!

## Get Involved

- **Experiment**: Tweak the projects! Try changing the Quote Card App’s styles or adding a feature like quote filtering.
- **Share**: Show off your remixes on X or LinkedIn—tag me so I can check them out!
- **Contribute**: Fork the repo, report issues, or submit pull requests to make these projects even better.

## Connect with Me

- **Medium**: [medium.com/@gitesh08](https://medium.com/@gitesh08)
- **LinkedIn**: [linkedin.com/in/gitesh-mahadik](https://www.linkedin.com/in/gitesh-mahadik-7487961a0/)
- **GitHub**: [github.com/Gitesh08](https://github.com/Gitesh08)

Thanks for checking out this repo! I’m stoked to have you along for this Angular journey. Grab a project, mess around, and let’s keep building cool stuff together.

Happy coding!
