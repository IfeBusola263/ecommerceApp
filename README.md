# EcommerceApp

A modular, testable React Native e-commerce product listing app built with Redux Toolkit, React Navigation, and TypeScript.

## Features
- Product listing with filtering, sorting, and pagination
- Product detail screen
- Modular, reusable components
- Redux state management
- Custom hooks
- Navigation between screens
- Unit tests for slices and hooks

## Architecture & Design

### Folder Structure
- **api/**: Product API service (mocked)
- **components/**: Reusable UI components
- **hooks/**: Custom React hooks
- **navigation/**: App navigator
- **screens/**: Main app screens
- **store/**: Redux slices, hooks, root reducer
- **styles/**: Colors, spacing, global styles
- **utils/**: Constants, helpers
- **types.ts**: Shared types

### State Management
- **Redux Toolkit** for global state
- Slices: `productSlice`, `filterSlice`
- Async thunks for API calls
- Custom hooks for typed dispatch/selectors

### Navigation
- **React Navigation** with stack navigator
- Screens: Product listing, product detail
- Navigation params for product ID

### Components
- **ProductCard**: Displays product info
- **ProductList**: Renders list of products
- **FilterBar**: Category/price filter
- **SortMenu**: Sorting options
- **PaginationControls**: Paging UI
- **Loader**: Loading indicator

### Testing
- Unit tests for slices and hooks in `__tests__`
- Use Jest and React Testing Library

### Extensibility
- Add more screens/components as needed
- Easily swap mock API for real backend

## Getting Started

### Prerequisites
- Node.js & npm/yarn
- React Native CLI
- Android Studio/Xcode for emulators
- CocoaPods (for iOS)

### Installation
1. Clone the repo
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```
3. For iOS, install pods:
   ```sh
   cd ios && pod install
   ```

### Running the App
- Start Metro:
  ```sh
  npm start
  # or
  yarn start
  ```
- Run on Android:
  ```sh
  npm run android
  # or
  yarn android
  ```
- Run on iOS:
  ```sh
  npm run ios
  # or
  yarn ios
  ```

## Testing
Run unit tests:
```sh
npm test
# or
yarn test
```

## Documentation
- `task.md`: Step-by-step implementation phases

## Troubleshooting
See React Native [Troubleshooting](https://reactnative.dev/docs/troubleshooting).


## License
MIT
