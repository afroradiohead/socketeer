import {SocketCommand} from '../shared/sockeeter/registration-page';
import {Socketeer} from '../shared/socketeer/index';
import {IUser} from '../shared/interface/user';

//...
const socketeer = new Socketeer(SocketCommand, socket);
//....
const user$ = socketeer.from('REGISTER_FROMSERVER').map(data => data.user);

//when form is submitted
socketeer.send('REGISTER_FROMCLIENT', { //will throw a typescript compile error if value doesn't match the interface it expects
  email: "chrissychris@gmail.com",
  password: "youknowdatpassword"
});
//...
