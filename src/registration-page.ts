import {SocketCommand} from '../shared/sockeeter/registration-page';
import {Socketeer} from '../shared/socketeer/index';
import {IUser} from '../shared/interface/user';

//...
const socketeer = new Socketeer(SocketCommand, socket);
//....
const user$ = socketeer.from('REGISTER_FROMSERVER').map(request => request.user);

//when form is submitted
socketeer.send('REGISTER_FROMCLIENT', { //will throw a typescript compile object doesn't match type
  email: "chrissychris@gmail.com",
  password: "youknowdatpassword"
});
//...
