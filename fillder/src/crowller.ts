import superagent from "superagent";
import cheerio from 'cheerio';
class Crawler {
    private secret = '';
    private url =  `
    http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}
    `
    private rawHtml = ''
    getCourseInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split(": ")[1], 10);``
        })
    }
    async getRawHtml () { 
        const result = await superagent.get(this.url);
        this.rawHtml = result.text;
        this.getCourseInfo(result.text)
    }
    constructor() {
        console.log('constructor');
        this.getRawHtml();
    }
}

const crawler = new Crawler()