# MedCare - Your Health Companion

MedCare is a comprehensive healthcare management platform designed to revolutionize the way healthcare services are accessed and managed. Our mission is to empower patients, healthcare providers, and administrators with innovative tools and features for a seamless healthcare experience.

## Key Features

- **User Registration:** Create and manage user profiles securely.
- **Medical Records:** Easily store and access medical records and history.
- **Appointment Scheduling:** Book appointments with healthcare professionals hassle-free.
- **Sanction and Embargo Checks:** Ensure compliance with trade embargo lists for patient security.
- **Audit Logging:** Maintain a detailed audit trail for user actions and system events.
- **Enhanced Security:** Implement state-of-the-art security measures to protect user data.
- **Efficient Testing:** Robust testing and monitoring for system efficiency and latency.
- **Integration:** Seamlessly integrate with other healthcare systems and services.
- **User-Friendly Interface:** Intuitive and user-centric design for a smooth user experience.

Join us in our journey to simplify healthcare management, enhance patient care, and promote better health outcomes.

MedCare - Your Health, Our Priority.

---

## Technologies Used

MedCare utilizes a modern technology stack to provide efficient healthcare management:

### Backend

- **Node.js and Express.js**: The backend is built on Node.js, leveraging Express.js for handling HTTP requests and routing.

- **MongoDB**: We use MongoDB as the database management system for flexible and scalable data storage.

- **Pangea**: Pangea is integrated to ensure advanced security features for user data and medical records.

- **JSON Web Tokens (JWTs)**: JWTs are used for user authentication and secure communication between the frontend and backend.

### Frontend

The frontend is built using:

- **Next.js**: A powerful React framework for server-side rendering and improved SEO.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving better tooling at any scale..
- **Tailwind CSS**: A utility-first CSS framework for creating a responsive and visually appealing user interface.

---

## Local Development

To run MedCare locally, follow these steps:

1. Clone the repository (front-end and back-end):
   ```shell
   git clone --recursive https://github.com/vivekkj123/MedCare.git 

2.  Navigate to the project directory:
    
    ```
    cd MedCare
    ```
    
3.  Install dependencies:
    
    ```
    npm install
    ```
    
4.  Create an `.env` file in the root directory and set the following environment variables:
    
    
    ```
    NEXT_PUBLIC_PANGEA_DOMAIN=
    NEXT_PUBLIC_AUTHN_CLIENT_TOKEN=
    NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL=
    NEXT_PUBLIC_BACKEND_URL=
    AUTHN_SERVICE_TOKEN=
    ```

    
5.  Start the development server:
    
    `npm run dev` 
    
6.  Access the application at [http://localhost:8080](http://localhost:8080/).
    

----------

## Backend Repository

The backend code for MedCare is available in a separate repository: [MedCare Backend](https://github.com/JoelJaison394/MedCare/)
