import {SocketCommand} from '../shared/sockeeter/registration-page';
import {Socketeer} from '../shared/socketeer/index';
import {IUser} from '../shared/interface/user';

//...
const socketeer = new Socketeer(SocketCommand, socket);

socketeer.from('REGISTER_FROMCLIENT').subscribe(request => {
  //request.email, request.password
  const user:IUser; //..grab user from database or whatever
 
  socketeer.send('REGISTER_FROMSERVER', {
    user: user //will throw a typescript error if not a IUser
  });
});
//...
