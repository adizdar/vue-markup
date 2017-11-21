import logger from '../../common/logger';
import db from './examples.db.service';

class ExamplesService {
  all() {
    logger.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    logger.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(name) {
    return db.insert(name);
  }
}

export default new ExamplesService();
