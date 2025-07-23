# Coffee Vending Machine Project README

## Project Structure and Code Organization

The codebase is organized into domain-specific folders under `src/`:

- `cart/`: Handles cart logic and types.
- `catalogue/`: Contains product definitions, constants, and types for coffee options.
- `pricing/`: Contains pricing logic, constants, and related types.
- `utils/`: Utility functions and shared type definitions.

**Type Definitions:**

- Types such as `CoffeeSizeType`, `CreamerType`, and `SweetenerType` are defined outside of pricing to promote reusability and separation of concerns. This makes it easier to maintain and extend the codebase as new product options or features are added.

**Classes and Modularity:**

- Classes and functions are grouped by responsibility, making the codebase modular and easier to test, debug, and maintain. This structure supports scalability and clear ownership of logic.

**Maintainability:**

- The folder structure and separation of types, constants, and logic help new contributors quickly understand the codebase and make changes with minimal risk of breaking unrelated features.

## Code Quality and Standards

To maintain code quality and standards, the following tools are used:

- **Prettier:** Enforces consistent code formatting.
- **ESLint:** Identifies and fixes code style and potential errors.
- **Tests:** Automated unit tests ensure correctness and prevent regressions.

### Setup Prettier, ESLint, and Tests

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run Prettier:**
   ```sh
   npm run format
   ```
3. **Run ESLint:**
   ```sh
   npm run lint
   ```
4. **Run Tests:**
   ```sh
   npm test
   ```

## Steps to Run the Application

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the application:**
   ```sh
   npm start
   ```

## Additional Notes

- Follow the folder and type organization for new features.
- Use Prettier and ESLint before committing code.
- Write and run tests for all new logic.
