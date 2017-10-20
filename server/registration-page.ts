import {SocketCommand} from '../shared/sockeeter/registration-page';
import {Socketeer} from '../shared/socketeer/index';
import {IUser} from '../shared/interface/user';

//...
const socketeer = new Socketeer(SocketCommand, socket);

socketeer.from('REGISTER_FROMCLIENT').subscribe(data => {
  //data.email, data.password
  const user:IUser; //..grab user from database or whatever
 
  socketeer.send('REGISTER_FROMSERVER', { //will throw a typescript compile error if value doesn't match the interface it expects
    user: user
  });
});
//...
