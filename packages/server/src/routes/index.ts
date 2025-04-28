import Elysia from 'elysia';

import { createContext } from '../elysia';
import auth from './auth';
import dashboard from './dashboard';

export default new Elysia().use(createContext).use(dashboard).use(auth);
