# New Year Timer — Architecture

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Playwright for e2e testing

## Layers

### UI Layer
React components that render the interface.

### Application Layer
Hooks and state management controlling app states.

### Domain Layer
Logic for time calculations and countdown behavior.

### Infrastructure Layer
Local storage and media playback helpers.

## App States
- setup
- countdown
- final_countdown
- celebration

## Project Structure
/app
/components
/features
/lib
/tests
/docs

## Key Rule
UI must not contain business logic.
Time calculations must be isolated in utilities or hooks.