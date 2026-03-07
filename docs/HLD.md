# High Level Design (HLD)

## Project Name
Scalora AI

## Project Overview

Scalora AI is a web-based content generation tool designed to help creators quickly generate social media content ideas such as hooks, captions, and post ideas.

The application allows users to input a niche and generate content suggestions.

Future versions will integrate AI APIs to generate dynamic and unique results.

---

## System Architecture

User → Web Interface → JavaScript Logic → Content Generation → Output Display

Future architecture with AI integration:

User → Web Interface → Backend API → AI Model → Generated Content → UI Display

![Scalora AI Architecture](architecture-diagram.png)

---

## Major Components

### 1. User Interface
Handles user interaction including:

- Tool cards (Hook Generator, Caption Generator, Post Idea Generator)
- Input fields
- Generate buttons
- Result display area

### 2. Generic Logic
JavaScript functions process user input and generate results.

Example:
- Validate input
- Generate hooks
- Updating the UI with results

### 3. Content Output Module
Displays generated hooks dynamically in the UI.
Old results are replaced when new hooks are generated.

## Technology Stack

Frontend:
- HTML
- CSS
- JavaScript

Future Integration:
- AI API (OpenAI)
- Possible backend service

---

## Future Enhancements

- Caption Generator
- Post Idea Generator
- AI-powered generation
- Improved UI components
- Website deployment
