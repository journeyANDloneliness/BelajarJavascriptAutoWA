import  express  from 'express';
import {doc, koneksiSheet} from "love-utility"
const app = express();
await koneksiSheet()

app.get('/', (req, res) => {
	doc.sheetByTitle
  res.send('Hello, world!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
