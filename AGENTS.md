```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent and efficient development of AGENTS.md, a repository for AI coding agents. Adherence to these principles is crucial for maintainability, scalability, and overall project success.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent function/component should have a single, clearly defined purpose. Avoid creating overly complex functions with multiple responsibilities.
*   **Reusable Components:**  Design components that can be easily reused across multiple agents.  Modularize code where appropriate.
*   **Abstraction:**  Favor abstract representations over concrete implementations.  Hide implementation details behind interfaces.
*   **Consistent Naming Conventions:** Use consistent naming conventions throughout the codebase.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimal Code:** Strive for the shortest possible code that achieves the required functionality. Unnecessary complexity should be avoided.
*   **Readability:** Code should be easy to read and understand, even by someone unfamiliar with the specific implementation.
*   **Simplicity:** Favor simple, declarative solutions over complex, imperative ones.

## 3. SOLID Principles

*   **Single Responsibility:**  Each class or component should have a single, well-defined responsibility.
*   **Open/Closed Principle:**  The system should be extensible through the addition of new features without modifying existing code.  (This is less relevant for AI agents, focusing on modularity).
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Each interface should have only the methods that are necessary for its implementation.
*   **Dependency Inversion Principle:** High-level modules (agents) should be dependent on low-level modules (interface).

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Over-Engineering:** Don’t implement features or solutions that are not currently required.  Delay implementation until absolutely necessary.
*   **Focus on Core Functionality:** Prioritize delivering the essential functionality of each agent to avoid unnecessary complexity.
*   **Refactoring:**  Refactor code only when it becomes necessary to improve its structure or design.

## 5. Code Length Constraint (180 Lines Max)

*   **Maximum Code:**  Each file shall not exceed 180 lines of code.
*   **Line Length:**  Maintain a consistent line length (e.g., 80 characters) to improve readability.

## 6. Test Coverage Requirements (80%+)

*   **Target Coverage:**  Aim for an absolute minimum of 80% test coverage for all agent functions and components.
*   **Test Case Design:**  Ensure test cases cover all critical paths and edge cases.
*   **Test Data Management:**  Utilize realistic test data that accurately reflects real-world scenarios.

## 7. Code Structure & Organization

*   **Modular Design:** Agents should be organized into modular components with well-defined interfaces.
*   **Clear Abstraction:** Use abstract classes/interfaces to represent common behavior.
*   **Comments:** Provide clear and concise comments to explain complex logic or design decisions.  Focus on *why* the code is doing something, not just *what* it's doing.

## 8.  Specific Guidelines for AI Agents

*   **State Management:** State management should be handled through well-defined interfaces and data structures, not through direct state variables.
*   **Reasoning & Logic:**  Encourage the use of appropriate reasoning mechanisms and formal logic (if applicable to the agent’s role) to guide decision-making.
*   **Error Handling:** Implement robust error handling and logging to facilitate debugging and monitoring.

## 9. Development Process

*   **Version Control:**  Use a version control system (e.g., Git) to track changes and facilitate collaboration.
*   **Code Reviews:** Conduct thorough code reviews to identify potential issues and ensure adherence to best practices.
*   **Documentation:**  Maintain up-to-date documentation for each agent, including its purpose, inputs, outputs, and any dependencies.

## 10.  Automated Checks (Future Consideration - Not explicitly part of initial guidelines, but important)

*   **Linters:** Utilize a linter to enforce coding style guidelines.
*   **Static Analysis:** Implement static analysis to identify potential bugs and vulnerabilities.
*   **Unit Tests:**  Ensure comprehensive unit tests cover all critical functionality.

```