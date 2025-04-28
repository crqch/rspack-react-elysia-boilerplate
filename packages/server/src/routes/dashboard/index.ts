import { error, t } from 'elysia';

import { UserInstance } from '../../db/user.controller';
import { createElysia } from '../../elysia';

export default createElysia({ prefix: '/dashboard' })
  .derive(({ user }) => {
    if (!user) return error(401, 'Unauthorized');
    return user;
  })
  .get('/user', async ({ user }) => {
    if (!user) return error(401, 'Unauthorized');
    return new UserInstance(user).getNonSensitiveData();
  });
