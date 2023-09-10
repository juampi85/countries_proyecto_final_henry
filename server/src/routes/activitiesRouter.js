const { Router } = require('express');
const {
  getActivitiesHandler,
  createActivityHandler,
  deleteActivityHandler,
} = require('../handlers/activitiesHandlers');


const activitiesRouter = Router();

activitiesRouter.get('/', getActivitiesHandler);
activitiesRouter.post('/', createActivityHandler);
activitiesRouter.delete('/:id', deleteActivityHandler);


module.exports = activitiesRouter;