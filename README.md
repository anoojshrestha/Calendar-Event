# Calendar-Event
It is a single-page-application that allows us to schedule Events in a Calendar using AngularJS 1, LocalStorage, HTML5, CSS3 and Bootstrap 3.

## Installation
- Some local server will be required. (For eg. XAMPP)
- http://localhost/Calendar-Event/ - Application start point

## Features
- Weekly Calendar with week number.
- Navigate between weeks
- Add/ Update/ Delete events
- Get notification alert for the upcoming event (before 10 min)
- Responsive design (for Desktop and Mobile)

## Event model
```javascript
{
    id: {
        id: "",
        title: "",
        description: "",
        date: "",
        time: "",
        isCompleted: "false"
    }
}
```
