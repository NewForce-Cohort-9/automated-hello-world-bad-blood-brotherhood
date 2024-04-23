const cambodiaDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Phnom Penh",
            cityImage: 'scripts/cambodia/images/Phnom_Penh.jpg',
            cityPopulation: "2,281,951",
            cityFounded: "5th Century"

        },{
            id: 2,
            name: "Siem Reap",
            cityImage: 'scripts/cambodia/images/Siem_Reap.jpg',
            cityPopulation: "245,494",
            cityFounded: "802"

        },{
            id: 3,
            name: "Battambang",
            cityImage: 'scripts/cambodia/images/Battambang.JPG',
            cityPopulation: "119,251",
            cityFounded: "11th Century"



        },    
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Angkor Wat",
        landmarkImage: 'scripts/cambodia/images/Angkor_Wat.jpg',
        landmarkFunFact: "Widely known as a location in Lara Croft: Tomb Raider"
        }, 
        {
         id: 2,
         landmarkName: "Tuol Sleng Genocide Museum",
        landmarkImage: 'scripts/cambodia/images/Tuol_Sleng.jpg',
         landmarkFunFact: "See Kissinger's contribution to a dark time in Cambodian history"
         },
         {
         id: 3,
         landmarkName: "Royal Palace",
         landmarkImage: 'scripts/cambodia/images/Royal_Palace_Phnom_Penh.jpg',
         landmarkFunFact: "Cambodia's Royal Palace since 1866"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Rithy Panh",
            celebImage: 'scripts/cambodia/images/Rithy_Panh.jpg',
            celebQuote: "I have only one life, and I can't do all. If I do one thing well, I'm happy.",
            celebKnownFor: "Rithy Panh is a Cambodian documentary film director and screenwriter",
        },
	{
            id: 2,
            celebName: "Norodom Sihamoni",
            celebImage: 'scripts/cambodia/images/Norodom_Sihamoni.jpg',
            celebQuote: "I will devote my body and soul to the service of the people and the nation.",
            celebKnownFor: "Elected King of Cambodia",
        },
	{
            id: 3,
            celebName: "Yubin Shin",
            celebImage: 'scripts/cambodia/images/Yubin_Shin.jpg',
            celebQuote: "Every achievement I made is only a step to success. Success has no boundary.",
            celebKnownFor: "Well known actress",
        },
    ]
}

//put cambodia exports here
export const getCambodiaCities = () => {
    return cambodiaDatabase.cities.map(cities => ({...cities}))
}

export const getCambodiaLandmarks = () => {
    return cambodiaDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getCambodiaCelebrities = () => {
    return cambodiaDatabase.celebrities.map(celebrities =>({...celebrities}))
}

//end exports

const greenlandDatabase = {
 cities: [
        {
            id: 1,
            cityName: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: 1997

        },{
            id: 2,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },{
            id: 3,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },{
            id: 4,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },    
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Name",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "Wow, this fact sure is fun"
        }, 
        {
         id: 2,
         landmarkName: "Name",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
         },
         {
         id: 3,
         landmarkName: "Name",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "NameOfCelebrity",
            celebImage: "PutImageHere",
            celebQuote: "How did I get here?",
            celebKnownFor: "Inventor of the Fork",
        },
    ]
}

//put greenland exports here

export const getGreenlandCities = () => {
    return greenlandDatabase.cities.map(cities => ({...cities}))
}

export const getGreenlandLandmarks = () => {
    return greenlandDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getGreenlandCelebrities = () => {
    return greenlandDatabase.celebrities.map(celebrities =>({...celebrities}))
}



//end greenland exports

const steinDatabase = {
    cities: [
        {
            id: 1,
            cityName: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: 1997

        },{
            id: 2,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },{
            id: 3,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },{
            id: 4,
            name: "CityName",
            cityImage: "PutImageHere",
            cityPopulation: 10,
            cityFounded: "1997"

        },    
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Name",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "Wow, this fact sure is fun"
        }, 
        {
         id: 2,
         landmarkName: "Name",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
         },
         {
         id: 3,
         landmarkName: "Name",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "NameOfCelebrity",
            celebImage: "PutImageHere",
            celebQuote: "How did I get here?",
            celebKnownFor: "Inventor of the Fork",
        },
    ]
}

//put stein exports here

export const getSteinCities = () => {
    return steinDatabase.cities.map(cities => ({...cities}))
}

export const getSteinLandmarks = () => {
    return steinDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getSteinCelebrities = () => {
    return steinDatabase.celebrities.map(celebrities =>({...celebrities}))
}






//end stein exports
const vietnamDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Hanoi",
            cityImage: "PutImageHere",
            cityPopulation: "5,432,000",
            cityFounded: "257 BC"

        },{
            id: 2,
            name: "Cao Bang",
            cityImage: "PutImageHere",
            cityPopulation: "73,549",
            cityFounded: "Between 300 BC to 201 BC"

        },{
            id: 3,
            name: "Hue",
            cityImage: "PutImageHere",
            cityPopulation: "455,230",
            cityFounded: "1687"

        }, 
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Ban Gioc Waterfall",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "It's the fourth-largest waterfall in the world along a national border, after Niagara, Victoria, and Iguazu Falls"
        }, 
        {
         id: 2,
         landmarkName: "Son Doong Cave",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "Largest Natural Cave on the planet"
         },
         {
         id: 3,
         landmarkName: "Cu Chi Tunnel",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "These tunnels can now be explored by tourists. Whether that be crawling through the safe areas, firing an AK-47 on the grounds, or sampling the typical foods that soldiers ate at the time the tunnels were used."
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Phan Thị Mỹ Tâm",
            celebImage: "PutImageHere",
            celebQuote: "Don’t let them break you",
            celebKnownFor: "Being one of the most successful Vietnamese singers for two decades",
        },{
            id: 2,
            celebName: "Hương Giang",
            celebImage: "PutImageHere",
            celebQuote: "Where there’s a will, there’s a way”—” This is true for you, for me, for everyone",
            celebKnownFor: "Being the first Vietnamese representative to participate in Miss International Transgender in Thailand",
        },{
            id: 3,
            celebName: "Linh Ngọc Đàm",
            celebImage: "PutImageHere",
            celebQuote: "She's got oceans tucked away in her hair, poems swim under her skin",
            celebKnownFor: "Being a famous game streamer, YouTuber, and model",
        },
    ]
}

export const getVCityInfo = () => {
    return database.cities.map(cities => ({...cities}))
  }

 export const getVLandmarkInfo = () => {
    return database.landmarks.map(landmarks => ({...landmarks}))
 } 

 export const getVCelebInfo = () => {
    return database.celebrities.map(celebrities => ({...celebrities}))
 }
