"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
const axios_1 = __importDefault(require("axios"));
main();
let ArrangedPersonList = new Array();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: response } = yield axios_1.default.get('https://icat-trainee-api.onrender.com/getData');
        console.log(response);
        console.log("");
        console.log("");
        console.log("");
        response.data.data.forEach(element => {
            let highestRateHobby = "";
            let highestRateHobby_Value = 0;
            if (element.hobbie.length > 0) {
                highestRateHobby = element.hobbie[0].hobbyName;
                highestRateHobby_Value = element.hobbie[0].rate;
                element.hobbie.forEach(currHobby => {
                    if (currHobby.rate > highestRateHobby_Value) {
                        highestRateHobby = currHobby.hobbyName;
                        highestRateHobby_Value = currHobby.rate;
                    }
                });
            }
            ArrangedPersonList.push({ name: element.name, age: element.age, hobby: highestRateHobby });
        });
        console.log("[ Result ]");
        let arrayLoopCount = 0;
        ArrangedPersonList.forEach(item => {
            console.log("[" + arrayLoopCount + "] : \t name: " + item.name + " \t age: " + item.age + " \t hobby: " + item.hobby);
            arrayLoopCount++;
        });
        console.log("");
        console.log("");
        console.log("");
    });
}
