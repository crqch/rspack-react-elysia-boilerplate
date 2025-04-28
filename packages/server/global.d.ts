import AuthorizationModule from './src/modules/authorization';
import type { newWebsocket } from './src/websocket';

declare global {
  var env: 'preview' | 'local' | 'prod';
  var envUrl: string;
  var frontendUrl: string;
  let websocket: ReturnType<typeof newWebsocket>;
}
