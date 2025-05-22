const circuitData = {
    albert_park: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Australia",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon",
        trackRecord: {
            driver: "Sergio Perez",
            team: "Red Bull",
            time: "1:16.732",
            year: 2023
        },
        numberOfLaps: 58,
        raceDistance: 306.124,
        circuitLength: 5.278,
        description: "Albert Park, set around a picturesque lake in Melbourne, is a fast street circuit with smooth tarmac and flowing corners. Its challenging layout rewards precision, with overtaking opportunities at Turns 1 and 3. The Australian Grand Prix often delivers unpredictable races due to its early-season slot."
    },
    shanghai: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/China",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/China%20carbon",
        trackRecord: {
            driver: "Michael Schumacher",
            team: "Ferrari",
            time: "1:32.238",
            year: 2004
        },
        numberOfLaps: 56,
        raceDistance: 305.066,
        circuitLength: 5.451,
        description: "Shanghai International Circuit features a unique layout with long straights and tight hairpins, inspired by the Chinese character 'shang.' Its high-speed corners, like Turns 1-2, test driver skill. The circuit’s wide design allows for strategic overtaking, especially into Turn 14."
    },
    suzuka: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:27.319",
            year: 2019
        },
        numberOfLaps: 53,
        raceDistance: 307.471,
        circuitLength: 5.807,
        description: "Suzuka, a driver favorite, is a demanding figure-eight circuit with iconic corners like 130R and the Spoon Curve. Its high-speed sections and elevation changes test car and driver limits. The Japanese Grand Prix is steeped in F1 history with dramatic title battles."
    },
    bahrain: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Bahrain",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:27.264",
            year: 2020
        },
        numberOfLaps: 57,
        raceDistance: 308.238,
        circuitLength: 5.412,
        description: "Bahrain International Circuit, set in the desert, combines long straights with technical corners, ideal for night racing under floodlights. Its abrasive track surface challenges tire management. Overtaking is frequent, particularly at Turn 1, making it a strategic race."
    },
    jeddah: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Saudi_Arabia",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:27.511",
            year: 2021
        },
        numberOfLaps: 50,
        raceDistance: 308.450,
        circuitLength: 6.174,
        description: "Jeddah Corniche Circuit is a high-speed street track along Saudi Arabia’s Red Sea coast. Its 27 corners, including fast sweeps, demand precision and bravery. The circuit’s tight walls and long straights create intense, close racing under the lights."
    },
    miami: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Miami",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:27.241",
            year: 2023
        },
        numberOfLaps: 57,
        raceDistance: 308.326,
        circuitLength: 5.412,
        description: "Miami International Autodrome, built around Hard Rock Stadium, blends fast straights with a tight technical section. Its vibrant atmosphere reflects Miami’s flair, with overtaking possible at Turn 1. The circuit’s smooth surface favors car setup versatility."
    },
    imola: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Emilia%20Romagna",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:15.484",
            year: 2020
        },
        numberOfLaps: 63,
        raceDistance: 309.049,
        circuitLength: 4.909,
        description: "Imola, officially Autodromo Enzo e Dino Ferrari, is a historic track with flowing corners like Piratella and Acque Minerali. Its narrow layout and elevation changes make overtaking tricky. The circuit’s rich F1 heritage adds emotional weight to races."
    },
    monaco: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Monaco",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1200,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:11.176",
            year: 2019
        },
        numberOfLaps: 78,
        raceDistance: 260.286,
        circuitLength: 3.337,
        description: "Monaco’s street circuit is the crown jewel of F1, with tight corners like the Grand Hotel Hairpin and iconic Tunnel. Overtaking is nearly impossible, making qualifying crucial. Its glamorous backdrop and unforgiving barriers demand absolute precision."
    },
    catalunya: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Spain",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:12.272",
            year: 2023
        },
        numberOfLaps: 66,
        raceDistance: 307.236,
        circuitLength: 4.655,
        description: "Circuit de Barcelona-Catalunya is a well-balanced track with a mix of high-speed corners and technical sections. Turn 3’s long right-hander tests car aerodynamics, while the final chicane challenges braking. It’s a staple for F1 testing and racing."
    },
    villeneuve: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon",
        trackRecord: {
            driver: "Valtteri Bottas",
            team: "Mercedes",
            time: "1:10.896",
            year: 2019
        },
        numberOfLaps: 70,
        raceDistance: 305.270,
        circuitLength: 4.361,
        description: "Circuit Gilles Villeneuve, on Montreal’s Île Notre-Dame, is a fast, low-downforce track with heavy braking zones. The Wall of Champions at the final chicane is infamous for catching out drivers. Its stop-start layout creates exciting overtaking opportunities."
    },
    red_bull_ring: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Austria",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon",
        trackRecord: {
            driver: "Carlos Sainz",
            team: "Ferrari",
            time: "1:04.947",
            year: 2020
        },
        numberOfLaps: 71,
        raceDistance: 306.452,
        circuitLength: 4.318,
        description: "The Red Bull Ring, nestled in Austria’s Styrian hills, is one of F1’s shortest tracks, with fast, flowing corners. Its compact layout and elevation changes create close racing. Overtaking is common at Turns 3 and 4, making it action-packed."
    },
    silverstone: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Great%20Britain",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:27.097",
            year: 2020
        },
        numberOfLaps: 52,
        raceDistance: 306.198,
        circuitLength: 5.891,
        description: "Silverstone, the home of British motorsport, is a high-speed circuit with legendary corners like Maggotts and Becketts. Its fast layout rewards aerodynamic efficiency and driver commitment. The passionate crowd adds to the electric atmosphere of the British Grand Prix."
    },
    spa: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:41.252",
            year: 2020
        },
        numberOfLaps: 44,
        raceDistance: 308.052,
        circuitLength: 7.004,
        description: "Spa-Francorchamps, set in the Ardennes forest, is one of F1’s most iconic tracks, with Eau Rouge and Blanchimont testing driver courage. Its long straights and sweeping corners favor power and downforce. Variable weather often adds drama to the Belgian Grand Prix."
    },
    hungaroring: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Hungary",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:13.447",
            year: 2020
        },
        numberOfLaps: 70,
        raceDistance: 306.630,
        circuitLength: 4.381,
        description: "The Hungaroring, near Budapest, is a tight, twisty track often compared to a go-kart circuit. Its narrow layout makes overtaking difficult, emphasizing qualifying performance. Hot summer conditions challenge car cooling and tire management."
    },
    zandvoort: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:08.885",
            year: 2023
        },
        numberOfLaps: 72,
        raceDistance: 306.587,
        circuitLength: 4.259,
        description: "Circuit Zandvoort, set among Dutch sand dunes, features banked corners like Turn 3 and the Arie Luyendyk corner. Its short, undulating layout creates intense racing with limited overtaking. The passionate Dutch fans create a festival-like atmosphere."
    },
    monza: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Italy",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon",
        trackRecord: {
            driver: "Rubens Barrichello",
            team: "Ferrari",
            time: "1:21.046",
            year: 2004
        },
        numberOfLaps: 53,
        raceDistance: 306.720,
        circuitLength: 5.793,
        description: "Monza, known as the ‘Temple of Speed,’ is F1’s fastest track, with long straights and historic corners like Lesmo and Parabolica. Low-downforce setups dominate, enabling high speeds. The passionate Tifosi make the Italian Grand Prix a spectacle."
    },
    baku: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon",
        trackRecord: {
            driver: "Charles Leclerc",
            team: "Ferrari",
            time: "1:40.203",
            year: 2023
        },
        numberOfLaps: 51,
        raceDistance: 306.049,
        circuitLength: 6.003,
        description: "Baku City Circuit combines a long 2.2km straight with a tight, twisty castle section, creating a unique challenge. Its street layout leads to unpredictable races with frequent safety cars. Overtaking is common, especially into Turn 1."
    },
    marina_bay: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Singapore",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon",
        trackRecord: {
            driver: "Kevin Magnussen",
            team: "Haas",
            time: "1:38.523",
            year: 2018
        },
        numberOfLaps: 61,
        raceDistance: 306.143,
        circuitLength: 5.063,
        description: "Marina Bay Street Circuit, Singapore’s night race, is a physically demanding track with 23 corners and high humidity. Its bumpy surface and close walls punish mistakes. Overtaking is tough, but the sling-shot into Turn 7 offers chances."
    },
    americas: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/USA",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon",
        trackRecord: {
            driver: "Charles Leclerc",
            team: "Ferrari",
            time: "1:34.356",
            year: 2023
        },
        numberOfLaps: 56,
        raceDistance: 308.405,
        circuitLength: 5.513,
        description: "Circuit of The Americas (COTA) in Austin features a mix of fast esses, inspired by Silverstone, and a steep uphill into Turn 1. Its varied corners test car balance, with overtaking possible at the long back straight. The vibrant Texan crowd adds energy."
    },
    rodriguez: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon",
        trackRecord: {
            driver: "Valtteri Bottas",
            team: "Mercedes",
            time: "1:15.875",
            year: 2021
        },
        numberOfLaps: 71,
        raceDistance: 305.354,
        circuitLength: 4.304,
        description: "Autódromo Hermanos Rodríguez, at high altitude in Mexico City, challenges teams with thin air affecting aerodynamics and cooling. The long main straight into the Foro Sol stadium section offers prime overtaking. The passionate crowd creates a festive vibe."
    },
    interlagos: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon",
        trackRecord: {
            driver: "Lewis Hamilton",
            team: "Mercedes",
            time: "1:07.281",
            year: 2021
        },
        numberOfLaps: 71,
        raceDistance: 305.879,
        circuitLength: 4.309,
        description: "Interlagos, São Paulo’s Autódromo José Carlos Pace, is a short, undulating track with flowing corners like the Senna S. Its anti-clockwise layout and bumpy surface challenge drivers. Unpredictable weather and fervent fans make the Brazilian Grand Prix thrilling."
    },
    vegas: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Las%20Vegas",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:35.441",
            year: 2023
        },
        numberOfLaps: 50,
        raceDistance: 309.950,
        circuitLength: 6.201,
        description: "The Las Vegas Strip Circuit, a night street race, features high speeds along iconic landmarks like the Sphere. Its long straights and sweeping corners allow for slipstreaming battles. The glitzy setting makes it a spectacle-heavy Grand Prix."
    },
    losail: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Qatar",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:21.742",
            year: 2023
        },
        numberOfLaps: 57,
        raceDistance: 306.660,
        circuitLength: 5.380,
        description: "Losail International Circuit, designed for MotoGP, features flowing, high-speed corners under Qatar’s floodlights. Its abrasive surface demands careful tire management. The long main straight and Turn 6 offer overtaking, with desert winds adding unpredictability."
    },
    yas_marina: {
        track: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Abu%20Dhabi",
        trackMap: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit",
        layout: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi%20carbon",
        trackRecord: {
            driver: "Max Verstappen",
            team: "Red Bull",
            time: "1:23.445",
            year: 2021
        },
        numberOfLaps: 58,
        raceDistance: 306.183,
        circuitLength: 5.281,
        description: "Yas Marina Circuit, Abu Dhabi’s twilight race, features a modern layout with a mix of high-speed and technical sections. Its marina backdrop and unique pit exit tunnel add flair. Overtaking is possible at the long straights into Turns 6 and 8."
    },
};

export default circuitData;

// default layout - https://media.formula1.com/content/dam/fom-website/races/2025/race-listing/Pre-Season-Testing.jpg
// default img - https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/Formula_1_Testing_in_Bahrain___Day_2/2030382630
// default trackMap -  