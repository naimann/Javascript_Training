console.log("Hello World");

import axios from 'axios';

main();



interface ArrangedPersonData {
    name: string;
    age: number;
    hobby: string;
}

let ArrangedPersonList = new Array<ArrangedPersonData>();



type PersonHobby = {
    hobbyName: string;
    rate: number;
};

type PersonData = {
    name: string;
    age: number;
    hobbie: PersonHobby[];
};

type PersonListItem = {
    data: PersonData[];
};

type ServerData = {
    data: PersonListItem;
    success: boolean;
    timestamp: number;
};



async function main() {
    
    const { data: response } = await axios.get<ServerData>('https://icat-trainee-api.onrender.com/getData');

    console.log(response);

    console.log("");
    console.log("");
    console.log("");

    response.data.data.forEach(element => {
        let highestRateHobby:string = "";
        let highestRateHobby_Value:number = 0;

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

        ArrangedPersonList.push({ name : element.name, age : element.age , hobby : highestRateHobby });
    });


    
    console.log("[ Result ]");

    let arrayLoopCount:number = 0;

    ArrangedPersonList.forEach(item => {
        console.log("[" + arrayLoopCount + "] : \t name: " + item.name + " \t age: " + item.age + " \t hobby: " + item.hobby);
        arrayLoopCount++;
    });

    console.log("");
    console.log("");
    console.log("");
    

}