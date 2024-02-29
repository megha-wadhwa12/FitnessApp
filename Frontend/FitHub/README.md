# FitHub Prototype

## Problem Statement

- ID: CBP25
- Category: Student Innovation
- Theme: Fitness & Sports
- Description: Ideas that can boost fitness activities and assist in keeping fit.

## Idea

### Basic Pretense

FitHub is a prototype designed to promote healthy living and empower individuals to track their fitness journeys without conforming to modern beauty standards. The platform encourages users to focus on holistic well-being and long-term health goals rather than just physical appearance. Users can:

- Create a basic user profile.
- Log and track basic fitness activities such as running, walking, and cycling.
- View basic statistics about their activity levels.
- Engage in community challenges.

### Prototype Features

1. **User Profile**:
   - Users can create a simple profile with a username.

2. **Activity Tracking**:
   - Users can log basic fitness activities with timestamps (e.g., running: 30 minutes, cycling: 45 minutes).

3. **Basic Statistics**:
   - Users can view total duration and frequency of their logged activities.

4. **Community Challenges**:
   - Users can view a list of predefined community challenges and join them.

## Implementation Details

1. **Frontend (React)**:
   - Use React to build the frontend interface.
   - Create components for user profile creation, activity logging, and statistics display.
   - Use React Router for navigation between different views.

2. **Backend (Minimal)**:
   - Implement a minimal backend using JSON Server.
   - Store user profiles and activity logs as JSON data.
   - Create basic API endpoints for user profile creation, activity logging, and challenge listing.

3. **Integration**:
   - Use Axios or Fetch API to communicate with the backend API.
   - Simulate authentication with fake user data or skip authentication for simplicity.

4. **User Interface**:
   - Design a clean and responsive user interface using CSS frameworks like Bootstrap or Tailwind CSS.
   - Focus on usability and intuitive navigation.

5. **Testing**:
   - Conduct manual testing to ensure basic functionality works as expected.
   - Test responsiveness across different devices and screen sizes.

## Future Enhancements (Beyond Prototype)

- Implement more robust user authentication with JWT or OAuth.
- Enhance activity tracking with support for additional types of activities and integration with fitness APIs.
- Add more comprehensive statistics and visualization options using charting libraries like Chart.js or D3.js.
- Expand community features with user-generated challenges and social interactions.
