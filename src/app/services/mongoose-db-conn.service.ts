
import { Mongoose } from '../../node_modules/mongoose';

@Injectable()
export class MongooseDbConnService {

  constructor( private mongoose: Mongoose)) { }
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}