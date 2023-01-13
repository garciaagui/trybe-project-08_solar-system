import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  {
    name: 'Mercúrio',
    image: MercurioImg,
    overview: `The smallest planet in our solar system and nearest to the Sun, 
    Mercury is only slightly larger than Earth's Moon. From the surface of 
    Mercury, the Sun would appear more than three times as large as it does 
    when viewed from Earth, and the sunlight would be as much as seven times brighter.
    
    Mercury's surface temperatures are both extremely hot and cold. Because the 
    planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). 
    Without an atmosphere to retain that heat at night, temperatures can dip 
    as low as -290°F (-180°C).

    Despite its proximity to the Sun, Mercury is not the hottest planet in our 
    solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. 
    But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`,
    day: '59 Earth days',
    year: '88 Earth days',
    diameter: '3,031.9 miles (4,879.4 kilometers)',
    sunDistance: '36 million miles (58 million kilometers)',
    planetType: 'Terrestrial',
    moons: 0,
  },
  {
    name: 'Vênus',
    image: VenusImg,
    overview: `It's a cloud-swaddled planet named for a love goddess, often called 
    Earth's twin. But pull up a bit closer, and Venus turns hellish. Our nearest 
    planetary neighbor, the second planet from the Sun, has a surface hot 
    enough to melt lead. The atmosphere is so thick that, from the surface, 
    the Sun is just a smear of light.
    
    In some ways it is more an opposite of Earth than a twin: Venus spins backward, 
    has a day longer than its year, and lacks any semblance of seasons. It might once 
    have been a habitable ocean world, like Earth, but that was at least a billion years 
    ago. A runaway greenhouse effect turned all surface water into vapor, which then 
    leaked slowly into space. The present-day surface of volcanic rock is blasted by 
    high temperatures and pressures. Asked if the surface of Venus is likely to be 
    life-bearing today, we can give a quick answer: a hard “no.”

    Further, Venus may hold lessons about what it takes for life to get its start ­– on 
    Earth, in our solar system, or across the galaxy. The ingredients are all there, or 
    at least, they used to be. By studying why our neighbor world went in such a 
    different direction with regard to habitability, we could find out what could 
    make other worlds right. And while it might sound absurd, we can't rule out life 
    on Venus entirely. Temperature, air pressure, and chemistry are much more 
    congenial up high, in those thick, yellow clouds.`,
    day: '243 Earth days',
    year: '225 Earth days',
    diameter: '7,520 miles (12,100 kilometers)',
    sunDistance: '67 million miles (108 million kilometers)',
    planetType: 'Terrestrial',
    moons: 0,
  },
  {
    name: 'Terra',
    image: TerraImg,
    overview: `Our home planet is the third planet from the Sun, and the only place we 
    know of so far that's inhabited by living things. While Earth is only the fifth 
    largest planet in the solar system, it is the only world in our solar system with 
    liquid water on the surface. Just slightly larger than nearby 
    Venus, Earth is the biggest of the four planets closest to the Sun, 
    all of which are made of rock and metal.`,
    day: '23.9 hours',
    year: '365.25 days',
    diameter: '7,917.5 miles (12,742 kilometers)',
    sunDistance: '93 million miles (150 million kilometers)',
    planetType: 'Terrestrial',
    moons: 1,
  },
  {
    name: 'Marte',
    image: MarteImg,
    overview: `Mars is no place for the faint-hearted. It's dry, rocky, 
    and bitter cold. The fourth planet from the Sun, Mars is one of Earth's 
    two closest planetary neighbors (Venus is the other). Mars is one of the 
    easiest planets to spot in the night sky – it looks like a bright red point of light.

    Despite being inhospitable to humans, robotic explorers – like NASA's new 
    Perseverance rover – are serving as pathfinders to eventually get humans 
    to the surface of the Red Planet.`,
    day: '24.6 hours',
    year: '687 Earth days',
    diameter: '4,212.3 miles (6,779 kilometers)',
    sunDistance: '142 million miles (228 million kilometers)',
    planetType: 'Terrestrial',
    moons: 2,
  },
  {
    name: 'Júpiter',
    image: JupiterImg,
    overview: `Jupiter is the fifth planet from our Sun and is, by far, 
    the largest planet in the solar system – more than twice as massive 
    as all the other planets combined. Jupiter's stripes and swirls are 
    actually cold, windy clouds of ammonia and water, floating in an 
    atmosphere of hydrogen and helium. Jupiter's iconic Great Red Spot 
    is a giant storm bigger than Earth that has raged for hundreds of years.

    Jupiter is surrounded by dozens of moons. Jupiter also has several 
    rings, but unlike the famous rings of Saturn, Jupiter's 
    rings are very faint and made of dust, not ice.`,
    day: '9.93 hours',
    year: '11.86 Earth Years',
    diameter: '86,881 miles (139,820 kilometers)',
    sunDistance: '484 million miles (778 million kilometers)',
    planetType: 'Gas Giant',
    moons: 80,
  },
  {
    name: 'Saturno',
    image: SaturnoImg,
    overview: `Saturn is the sixth planet from the Sun and the second-largest 
    planet in our solar system. Like fellow gas giant Jupiter, Saturn is a massive 
    ball made mostly of hydrogen and helium. Saturn is not the only planet to have 
    rings, but none are as spectacular or as complex as Saturn's. 
    Saturn also has dozens of moons.

    From the jets of water that spray from Saturn's moon Enceladus to the methane 
    lakes on smoggy Titan, the Saturn system is a rich source of scientific 
    discovery and still holds many mysteries.`,
    day: '10.7 hours',
    year: '29 Earth Years',
    diameter: '72,367 miles (116,460 kilometers)',
    sunDistance: '886 million miles (1.4 billion kilometers)',
    planetType: 'Gas Giant',
    moons: 83,
  },
  {
    name: 'Urano',
    image: Uranoimg,
    overview: `The seventh planet from the Sun with the third largest 
    diameter in our solar system, Uranus is very cold and windy. 
    The ice giant is surrounded by 13 faint rings and 27 small moons 
    as it rotates at a nearly 90-degree angle from the plane of its 
    orbit. This unique tilt makes Uranus appear to spin sideways, 
    orbiting the Sun like a rolling ball.

    The first planet found with the aid of a telescope, Uranus was discovered 
    in 1781 by astronomer William Herschel, although he originally thought 
    it was either a comet or a star. It was two years later that the object 
    was universally accepted as a new planet, in part because of 
    observations by astronomer Johann Elert Bode.`,
    day: '17 hours 14 minutes',
    year: '84 Earth Years',
    diameter: '31,518 miles (50,724 kilometers)',
    sunDistance: '1.8 billion miles (2.9 billion kilometers)',
    planetType: 'Ice Giant',
    moons: 27,
  },
  {
    name: 'Netuno',
    image: Netunoimg,
    overview: `Dark, cold, and whipped by supersonic winds, ice giant 
    Neptune is the eighth and most distant planet in our solar system. 
    More than 30 times as far from the Sun as Earth, Neptune is the only 
    planet in our solar system not visible to the naked eye. In 2011 
    Neptune completed its first 165-year orbit since its discovery in 1846.

    Neptune is so far from the Sun that high noon on the big blue
    planet would seem like dim twilight to us. The warm light we see 
    here on our home planet is roughly 900 times as bright as sunlight on Neptune.`,
    day: '16 hours',
    year: '165 Earth Years',
    diameter: '30,599 miles (49,244 kilometers)',
    sunDistance: '2.8 billion miles (4.5 billion kilometers)',
    planetType: 'Ice Giant',
    moons: 14,
  },
];

export default Planets;
