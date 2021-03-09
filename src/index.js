const express = require('express');
const {v4: uuid} = require('uuid');

const app = express();
app.use(express.json());

const courses = [];

app.get('/courses', (request, response) => {
  return response.json(courses);
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  const course = {
    id: uuid(),
    name,
  }

  courses.push(course);

  return response.json(course);
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  const {name} = request.body;
  
  const courseIndex = courses.findIndex(course => course.id === id);

  if(courseIndex < 0) {
    return response.status(400).json({message: 'Course not found'});
  }

  courses[courseIndex] = {
    id,
    name
  }

  return response.json(courses[courseIndex]);
});

app.patch('/courses/:id', (request, response) => {
  const { id } = request.params;
  const {name} = request.body;
  
  const courseIndex = courses.findIndex(course => course.id === id);

  if(courseIndex < 0) {
    return response.status(400).json({message: 'Course not found'});
  }

  courses[courseIndex] = {
    id,
    name
  }

  return response.json(courses[courseIndex]);
});

app.delete('/courses/:id', (request, response) => {
  const { id } = request.params;

  const courseIndex = courses.findIndex(course => course.id === id);

  if(courseIndex < 0) {
    return response.status(400).json({message: 'Course not found'});
  }

  courses.splice(courseIndex, 1);

  return response.send();
});


app.listen(3333, () => {
  console.log('Server started!');
});