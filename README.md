# MUI Interface To Do List App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Important Experience

When I want to make a post request with axios, suddenly I have faced with a problem apperently it's not sync with my backend. Problem was not about sending data, it was about to handle it.
And every time i want to handle data on backend requests body was always empty / undefined. But when i search about it, astonishingly there was nothing about it until i can find this [stackoverflow question](https://stackoverflow.com/questions/61627541/how-can-i-receive-the-body-of-an-axios-post-request-with-express-nodejs).

So i realized that i must use this code in my backend:

```javascript
app.use(express.json());
```

And to send data in my frontend:

```javascript
 method: "POST",
      url: "",
      contentType: "application/json",
      data: { data },
```

# Backend Repo

You can find [backend codes](https://github.com/theakhilleus/ToDolist-backend) on there.

Finally i can send data without problem and see it in my `req.body.data`

If you read it i'm reaaly happy because i wanted to make all things good working and easy to understand. Thank you if you read all this :)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
