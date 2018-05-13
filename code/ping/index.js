'use strict'

module.exports.handler = async (event, context) => {
  console.log(event, context);
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'ok' })
  }
}
