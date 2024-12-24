# Data Graphics

A MERN-based data visualization service that enables users to upload, process, and visualize data efficiently. The platform is designed to help users transform raw data into meaningful insights using interactive charts and graphs.

## Features

- **Data Upload**: Upload CSV or Excel files for processing.
- **Dynamic Visualizations**: Generate interactive charts and graphs.
- **Customizable Options**: Tailor visualizations to meet specific needs.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Real-time Data Handling**: Smooth processing and visualization of data.

## Live Demo

Experience the application live at: [Data Graphics](https://data-graphicss-vercel.vercel.app/)

## Technologies Used

- **Frontend**: React.js, Chart.js, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: Vercel

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Abhaykevat23/Data-Graphicss.git
    cd Data-Graphicss
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory with the following keys:
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    ```

4. **Run the Server**:
    ```bash
    npm start
    ```

5. **Run the Client**:
    Navigate to the `client` folder and start the frontend:
    ```bash
    cd client
    npm start
    ```

6. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
Data-Graphicss/
├── client/                # Frontend code (React.js)
├── server/                # Backend code (Node.js, Express)
├── models/                # Database models
├── routes/                # API routes
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json           # Node.js dependencies
└── README.md              # Project documentation
```

## Future Improvements

- Add user authentication for saving and sharing visualizations.
- Support additional file formats for data upload.
- Enhance chart customization options.
- Integrate advanced analytics and machine learning features.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

**Abhay Kevat**  
[GitHub Profile](https://github.com/Abhaykevat23)
