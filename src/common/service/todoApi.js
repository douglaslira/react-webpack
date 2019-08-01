import request from 'superagent';

let todoList= [];

function formatObj(obj) {

  let newObj = {
    id: obj.id ? obj.id : '',
    title: obj.title,
    description: obj.description,
    status: parseInt(obj.status),
    date: new Date().toISOString()
  }

  return newObj;
}

class todoApi {

  static getTasks(id) {
    return new Promise((resolve, reject) => {
      request.get('http://localhost:3000/api/tasks')
      .set('Accept', 'application/json')
      .query({id: id})
      .end(function(err, response) {
        if(err) {
          reject(Object.assign({}, err));
        } else {
          todoList = Object.assign([], response.body);
          resolve(todoList);
        }
      });
    });
  }

  static createTasks(obj) {
    return new Promise((resolve, reject) => {
      request.post('http://localhost:3000/api/tasks')
      .set('Accept', 'application/json')
      .send(formatObj(obj))
      .end(function(err, response) {
        if(err) {
          reject(Object.assign({}, err));
        } else {
          resolve({status: true, message: response.body.message});
        }
      });
    });
  }

  static updateTasks(obj) {
    return new Promise((resolve, reject) => {
      request.put('http://localhost:3000/api/tasks')
      .set('Accept', 'application/json')
      .send(formatObj(obj))
      .end(function(err, response) {
        if(err) {
          reject(Object.assign({}, err));
        } else {
          resolve({status: true, message: response.body.message});
        }
      });
    });
  }

  static removeTasks(obj) {
    return new Promise((resolve, reject) => {
      request.delete('http://localhost:3000/api/tasks')
      .set('Accept', 'application/json')
      .query({id: obj.id})
      .end(function(err, response) {
        if(err) {
          reject(Object.assign({}, err));
        } else {
          resolve({status: true, message: response.body.message});
        }
      });
    });
  }

}



export default todoApi;