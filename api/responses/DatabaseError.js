const HttpError = require('../responses/HttpError');

/**
 * Class to provide uniform instance/formatting for database error responses
 * @module DatabaseError
 */
class DatabaseError extends HttpError {
  /**
   * @constructor
   * @param {string} message - Custom error message
   */
  constructor(
    message = 'Database error',
  ) {
    super(new Date(), 500, 9998, message);
  }
}

module.exports = DatabaseError;