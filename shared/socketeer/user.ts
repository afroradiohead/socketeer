import {IUser} from '../interface/user';
import {ISocketCommand} from './index';

export class SocketCommand implements ISocketCommand {
  namespace = 'user';

  events: {
    REGISTER_FROMCLIENT: {
      email: string,
      password: string,
      //..etc
    },
    REGISTER_FROMSERVER: {
      user: IUSER,
      //...etc
    };
  };
}
