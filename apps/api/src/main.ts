import * as express from 'express';
import { Meeting } from '@atomus/api-interface';

const app = express();
const router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('data'));

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

router.post('/summary', (req, res) => {
  console.log(req.body);

  const meetingRequest = req.body as Meeting;

  const personName = meetingRequest.personName;
  const bookingDate = new Date(meetingRequest.bookingDate);
  const dayName = bookingDate.toLocaleString('default', { weekday: 'long' });
  const date = getDateSuffix(bookingDate.getDate());
  const monthName = bookingDate.toLocaleString('default', { month: 'long' });
  const year = bookingDate.getFullYear();
  const meetingReason = meetingRequest.meetingReason;

  const message = `${personName} booked a meeting for ${dayName} ${date} ${monthName} ${year}. Reason: ${meetingReason}`;
  res.json({ message: message });
});

function getDateSuffix(number) {
  const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
  }
  const suffix = suffixes[new Intl.PluralRules('en', { type: 'ordinal' }) .select(number)];
  return (number + suffix);
}

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
