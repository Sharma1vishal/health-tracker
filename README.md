# Health Challenge Tracker

## 📌 Project Overview

Health Challenge Tracker is a web application built with **Angular 16** that helps users track their workout activities. Users can add, view, and analyze their workout data using interactive charts and lists. The data is persisted using **local storage**.

## 🚀 Features

- **Dashboard:** Provides an overview of workout data.
- **Add Workout:** Allows users to log new workout sessions.
- **Workout List:** Displays all logged workouts in a tabular format.
- **Workout Charts:** Visualizes workout data using charts.
- **Pagination:** Supports navigation through large workout lists.
- **Navbar & Page Not Found:** Common UI components for navigation and error handling.

## 📂 Folder Structure

```
health-challenge-tracker/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── workout-list/
│   │   │   ├── workout-charts/
│   │   │   ├── add-workout/
│   │   │   ├── common/
│   │   │   │   ├── navbar/
│   │   │   │   ├── pagination/
│   │   │   │   ├── page-not-found/
│   ├── assets/
│   ├── environments/
│── angular.json
│── package.json
│── README.md
```

## ⚡ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sharma1vishal/health-tracker.git
   cd health-challenge-tracker
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the project locally:**
   ```sh
   ng serve
   ```
   Open `http://localhost:4200/` in your browser.

## 📊 Data Persistence

- Workout data is stored and retrieved from **local storage** to maintain persistence across sessions.

## 🚢 Deployment

To deploy the project using **GitHub Pages**:

1. **Build the project:**
   ```sh
   ng build --configuration=production
   ```
2. **Deploy to GitHub Pages:**
   ```sh
   npx angular-cli-ghpages --dir=dist/health-challenge-tracker
   ```
   # Test Coverage

  The project includes unit tests for key components and services. The code coverage for `DashboardComponent` and `WorkoutService` is 100%.

  To run tests and view the coverage report:

  ```bash
  ng test --code-coverage


## 🔧 Future Enhancements

- **User Authentication:** Secure login and signup functionality.
- **Backend Integration:** Replace local storage with a database.
- **More Charts & Insights:** Advanced analytics for workout trends.
- **Dark Mode:** Theme support for better UI/UX.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

### 🎯 Contribute & Support

Feel free to fork this repo, submit issues, and contribute! 😊
