const request = require('supertest');
const app = require('../../src/app');

describe('Resources', () => {

  it('should recieve all resources', async () => {
    const response = await request(app).get('/resources');

    expect(response.status).toBe(200);
  });

  it('after registering the resource you must update it and delete it', async () => {
    const responseRegister = await request(app).post('/resources').send({
      name: 'Elven Works',
      type: 'Database',
    });

    const responseUpdate = await request(app).post('/resources/1').send({
      name: 'Elven Works',
      type: 'Api',
    })

    const responseDelete = await request(app).delete(`/resources/1`);

    expect(responseRegister.status).toBe(201);
    expect(responseDelete.status).toBe(204);
    expect(responseUpdate.status).toBe(204);
  });
});
