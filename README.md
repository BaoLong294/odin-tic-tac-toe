# ODIN-TIC-TAC-TOE

## Introduction

This project is a classic Tic Tac Toe web application developed as a key milestone in The Odin Project's JavaScript course. The primary goal was to practice advanced JavaScript organization patterns, specifically Factory Functions and the Module Pattern (IIFE), to create a program with high encapsulation and a clean global namespace.

## Initial Project Goals

- Apply and reinforce advanced JavaScript concepts such as Factory Functions and the Module Pattern (IIFE).
- Build a game logic that is completely decoupled from the DOM/UI logic (Separation of Concerns).
- Design a modern, user-friendly game interface using CSS Grid and Flexbox.
- Manage the application's state strictly to prevent invalid interactions (e.g., clicking before start or after game over).
- Practice a professional Git/GitHub workflow by managing clear and specific commit messages.

## Technologies Used

- HTML5
- CSS3 (Focusing on Flexbox, CSS Grid, and 3D box-shadow effects)
- JavaScript (ES6+, Factory Functions, Module Pattern)
- Git & GitHub
- Google Fonts (Fredoka)

## Features Completed

- Game Initialization: A setup form for custom player names (Player 1 & Player 2) with automatic uppercase formatting.
- Board Logic: A Gameboard module that securely manages a private 9-element array representing the grid.
- Turn Control: Automatic turn-switching between players 'X' and 'O' after every valid move.
- Win/Tie Detection: An algorithm that instantly checks for all 8 winning combinations or a tie state.
- Dynamic Status Display: Real-time turn notifications and winner announcements displayed directly on the UI.
- Next Round & Restart: A "Next Round" feature to clear the board while keeping player names, and a "Restart" feature to fully reset the game.
- State Security: Prevention of board interaction once a winner is determined or before the game has officially started.

## Skills Demonstrated

- Module Pattern (IIFE): Encapsulating Gameboard and GameController data to protect internal variables and methods.
- Factory Functions: Efficiently generating player objects with specific markers and names.
- DOM Manipulation: Utilizing a displayController to dynamically render the board based on the internal JavaScript array.
- Event Handling: Implementing Event Delegation on the game board to optimize click event performance.
- Architectural Thinking: Applying the "Separation of Concerns" principle to keep calculation logic separate from UI rendering.
- Responsive Layout Design: Using CSS Grid to create a perfectly aligned 3x3 game board and Flexbox for UI components.

## Lessons Learned

- Biggest Challenge: Managing the gameActive state and ensuring the UI accurately reflected the memory state was challenging when first splitting the code into modules.
- How I Overcame It: I learned to return status objects from the logic functions and use them as "signals" for the displayController to update the UI, resulting in cleaner and more debuggable code.
- What I Would Do Differently: In the future, I would explore adding animations for the X and O markers as they appear to make the user experience more engaging.
- General Lesson: This project solidified my understanding of the importance of modular code. Spending time planning the logic flow before writing code saves a significant amount of time during the debugging phase.

## Credits/Attribution

- Google Fonts:

  - Source: Fredoka Font
  - License: Open Font License (OFL)

- Course Inspiration:
  - Based on the The Odin Project curriculum.

## Contact

- GitHub: https://github.com/BaoLong294
- Email: longbao2904@gmail.com
- LinkedIn: https://www.linkedin.com/in/long-b%E1%BA%A3o-a9226a377/
