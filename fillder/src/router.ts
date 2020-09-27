import { Router, Request, Response } from 'express';
import Crowller from './crowller';
import DellAnalyzer from './dellAnalyzer';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getData">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
});
const crowller = async (url: string) => {
  // const url = `http://www.wwqun.com/m/Product.asp?id=23&page=3`;
  const analyzer = DellAnalyzer.getInstance();
  new Crowller(url, analyzer);
}

const genUrl = (base: string) => {
  const url = []
  for(let i = 1; i< 100; i++) {
    url.push(`${base}${i}`)
  }
  return url
}
router.get('/getData', (req: RequestWithBody, res: Response) => {
  const temp = genUrl('http://www.wwqun.com/m/Product.asp?id=23&page=')
  console.log(temp)
  temp.map(async (index, item) => {
    await crowller(item + '')
  })
  res.send('getData Success!');
});

export default router;
