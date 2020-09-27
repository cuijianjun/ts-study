"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var DellAnalyzer = /** @class */ (function () {
    function DellAnalyzer() {
    }
    DellAnalyzer.getInstance = function () {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    };
    DellAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItems = $('.goodslist>.item');
        var courseInfos = [];
        courseItems.map(function (index, element) {
            var descs = $(element).find('a>img');
            var title = $(element).find('p>a').text();
            var url = descs.attr('src');
            courseInfos.push({ title: title, url: url });
        });
        console.log(courseInfos);
        return {
            time: new Date().getTime(),
            data: courseInfos
        };
    };
    DellAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        console.log(courseInfo);
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    DellAnalyzer.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return DellAnalyzer;
}());
exports.default = DellAnalyzer;
