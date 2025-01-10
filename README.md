## Mental Health App 
A web application designed to help individuals manage their mental health by providing a platform for booking appointments with psychologists. The app allows users to view a list of available doctors, book appointments, and track the status of their appointments. This application offers a user-friendly interface and features essential functionalities aimed at improving access to mental health support.

## Demo

![Project Demo]()

## Features

- **Appointment Booking:** Allows users to select a doctor, choose an appointment date and time, and book a session.
- **Responsive Design:** The app is responsive and works seamlessly on different devices, providing a great experience for both desktop and mobile users.
- **Doctor Filtering:** Users can filter and view only the appointments of a specific doctor when selecting them.
- **Alert Notifications:** After successfully booking an appointment, users are notified with a confirmation message.

## Technologies Used

- **React.js:** Front-end JavaScript library used for building the user interface and managing state.
- **React Hooks (useState, useEffect):** Used for managing state and side effects in the application.
- **React Icons:** Used to display various icons like the close button (FaTimesCircle).
- **UUID:** A package used for generating unique identifiers for each appointment.
- **CSS:** Used for styling the application, making it visually appealing and easy to use. Custom CSS was implemented for responsive layouts, form designs, and transitions.
- **JavaScript (ES6+):** The core programming language used to build the logic and functionality of the app.

## Project Structure

```plaintext
📦src
 ┣ 📂components
 ┃ ┣ 📜AddPatient.jsx
 ┃ ┣ 📜Doctors.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┗ 📜PatientList.jsx
 ┣ 📂helper
 ┃ ┗ 📜data.js
 ┣ 📂pages
 ┃ ┗ 📜Home.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```
### Live Page
Click the link below to view the live version of the app:
[Live Page]()  

## Installation Instructions

To get started with the Mental Health App project, follow these steps:

Clone this repository to your local machine:
```
git clone 
```
Navigate into the project directory:

```
cd mental-health-app
```
Install the required dependencies:
```
pnpm install
```
Run the development server:
```
pnpm start
```
Open the application in your browser to view the project.

## License

MIT license