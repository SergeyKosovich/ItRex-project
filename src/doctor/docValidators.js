import ApiError from '../errors/appError.js';
import {
  shemaForResolutionAndName,
  schemaForName,
} from '../validatorSchemes/schemes.js';

export default class Validator {
  checkRes(req, res, next) {
    const schema = shemaForResolutionAndName;
    const { error } = schema.validate({ body: req.body });
    if (error) {
      throw new ApiError(400, 'incorrect name of patient or resolution value');
    }
    next();
  }

  checkName(req, res, next) {
    const schema = schemaForName;
    const { error } = schema.validate(req.query);
    if (error) {
      throw new ApiError(400, 'incorrect name of patient');
    }
    next();
  }
}
