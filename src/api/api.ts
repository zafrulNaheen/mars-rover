'use strict';

import { Response, Request } from 'express';

/**
 * List of API examples.
 * @route GET /api
 */
export const getApi = (req: Request, res: Response) => {
  const steps = new ScanCommand(req.params);
  steps.Execute();
  res.send({ data: { one: 1 } });
};
