// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 4000;

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  // const filePath = fs.realpathSync(path.resolve(__dirname, './index.html'));
  // await page.goto('file://' + filePath, {waitUntil: 'domcontentloaded'});
  await new Promise(function (resolve) {
    setTimeout(resolve, 1500);
  });
  await page.goto('http://localhost:9000', {
    waitUntil: ['networkidle0', 'domcontentloaded'],
  });
});

describe('Cats table', () => {
  test(
    'Test table data for the first and second cell for all records',
    async () => {
      const elements = await page.evaluate(() => {
        let arr = [];
        document.querySelectorAll('table tbody tr').forEach((el) => {
          arr.push(el.querySelector('td:nth-of-type(1)').textContent);
          arr.push(el.querySelector('td:nth-of-type(2)').textContent);
        });
        return arr;
      });

      // Compares it with the intended behaviour
      expect(elements).toMatchObject([
        '2f9',
        'https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg',
        '3h0',
        'https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg',
        '3v7',
        'https://cdn2.thecatapi.com/images/3v7.gif',
        '58l',
        'https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg',
        '9qn',
        'https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png',
        'aad',
        'https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg',
        'ae4',
        'https://cdn2.thecatapi.com/images/ae4.gif',
        'auf',
        'https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png',
        'dqn',
        'https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg',
      ]);
    },
    timeout
  );

  test(
    'Test table data for the image SRCs',
    async () => {
      // Gets page title
      const title = await page.title();

      const elements = await page.evaluate(() => {
        let arr = [];
        document.querySelectorAll('table tbody tr img').forEach((el) => {
          arr.push(el.src);
        });
        return arr;
      });

      // Compares it with the intended behaviour
      expect(elements).toMatchObject([
        'https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg',
        'https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg',
        'https://cdn2.thecatapi.com/images/3v7.gif',
        'https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg',
        'https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png',
        'https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg',
        'https://cdn2.thecatapi.com/images/ae4.gif',
        'https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png',
        'https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg',
      ]);
    },
    timeout
  );
});
