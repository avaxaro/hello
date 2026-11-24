import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler from './greet.js';

test('greet handler sends a response', async () => {
  const req = {
    method: 'GET',
    query: {},
  };

  let sentBody;
  let statusCode = 200;

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    send(body) {
      sentBody = body;
      return this;
    },
    json(body) {
      sentBody = body;
      return this;
    },
  };

  await handler(req, res);

  assert.equal(statusCode, 200);
  assert.ok(sentBody, 'Expected handler to send a non-empty response');
});
