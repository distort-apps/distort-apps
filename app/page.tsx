import ProjectGrid from "@/components/projects/project-grid";
import { Project } from "@/types/project";
import classes from './page.module.css'
import Image from "next/image";


const projects: Project[] = [
  {
    id: '04',
    slug: 'ts-snippets',
    title: 'ts-snippets',
    description: 'A chrome extension to save, compile, run, and manage TypeScript snippets',
    body: "TS Snippets is a powerful Chrome extension designed to enhance your development workflow by enabling you to create, save, run, and manage TypeScript code snippets directly within your browser's DevTools. With integrated Monaco Editor support, you benefit from features like IntelliSense, syntax highlighting, and code validation, making it easier to write and test TypeScript code on the fly. /n Key Features: /n Create and Save Snippets: Easily create new TypeScript snippets and save them for future use. /n Run Snippets Instantly: Execute your TypeScript snippets with a single click or using keyboard shortcuts. Monaco Editor Integration: Enjoy a rich coding experience with IntelliSense, syntax highlighting, and error checking. /n Seamless DevTools Integration: Access and manage your snippets directly from the Chrome DevTools panel. /n Auto-Save Feature: Your code is automatically saved as you type, ensuring you never lose your progress. /n Whether you’re debugging, prototyping, or learning TypeScript, TS Snippets provides a convenient and efficient way to work with TypeScript code snippets directly in your browser.",
    info: "If you're looking for a thrilling and visually captivating gaming experience, STARFLEET is the game you've been waiting for. This 2-D masterpiece takes you on an intergalactic journey like no other, where the boundaries of space are yours to explore... One of the standout features of STARFLEET is its unique visual style. Despite being a 2-D game, it cleverly simulates a 3-D appearance, making you feel fully immersed in the vastness of space. The game’s graphics are sharp and engaging, with vibrant colors and smooth animations that bring your starship and the cosmos to life. /n But STARFLEET isn't just about looks; it's also incredibly fun to play. The controls are intuitive, allowing you to quickly get the hang of navigating your ship through asteroid fields, dodging enemy fire, and engaging in epic space battles. Each level offers new challenges and surprises, keeping you on your toes and ensuring that the gameplay never gets stale. /n Whether you're a casual gamer or a seasoned pro, STARFLEET offers a satisfying blend of strategy and action. The game is easy to pick up, but mastering it will take skill and practice, making it perfect for those who enjoy a good challenge. /n In STARFLEET, you're not just playing a game—you're embarking on an adventure through the stars. With its stunning visuals, addictive gameplay, and endless excitement, STARFLEET is a must-play for anyone who loves space-themed games. So strap in, power up your engines, and get ready to explore the galaxy in this unforgettable gaming experience!",
    media: ['/tsSnippetsSmall.png','/ts-SnippetsMarque.png'],
    date: new Date()
  },
  {
    id: '02',
    slug: 'starfleet',
    title: 'STARFLEET',
    description: "A thrilling and visually captivating gaming experience, STARFLEET is ...",
    body: "ＳＴＡＲＦＬＥＥＴ is a 2-D game designed to simulate a 3-D appearance, built using TypeScript classes. The game utilizes a custom rendering engine that leverages HTML5 Canvas with CanvasRenderingContext2D to create its visual effects.",
    info: "If you're looking for a thrilling and visually captivating gaming experience, STARFLEET is the game you've been waiting for. This 2-D masterpiece takes you on an intergalactic journey like no other, where the boundaries of space are yours to explore. One of the standout features of STARFLEET is its unique visual style. Despite being a 2-D game, it cleverly simulates a 3-D appearance, making you feel fully immersed in the vastness of space. The game’s graphics are sharp and engaging, with vibrant colors and smooth animations that bring your starship and the cosmos to life. /n But STARFLEET isn't just about looks; it's also incredibly fun to play. The controls are intuitive, allowing you to quickly get the hang of navigating your ship through asteroid fields, dodging enemy fire, and engaging in epic space battles. Each level offers new challenges and surprises, keeping you on your toes and ensuring that the gameplay never gets stale. /n Whether you're a casual gamer or a seasoned pro, STARFLEET offers a satisfying blend of strategy and action. The game is easy to pick up, but mastering it will take skill and practice, making it perfect for those who enjoy a good challenge. /n In STARFLEET, you're not just playing a game—you're embarking on an adventure through the stars. With its stunning visuals, addictive gameplay, and endless excitement, STARFLEET is a must-play for anyone who loves space-themed games. So strap in, power up your engines, and get ready to explore the galaxy in this unforgettable gaming experience!",
    media:['/starfleetin.png', '/starfleet.png'],
    date: new Date()
  }, 
  {
  id: '01',
  slug: 'distortnewyork',
  title: 'DistortNewYork.com',
  description: "A Premier Resource for Underground Event in New York",
  body: "Your live event aid in New York. Automatically aggregating events from an array of venues, DistortNewYork stands as a leading platform for discovering live music in New York's vibrant underground. Our platform eliminates the hassle of searching through multiple sites and lets event organizers add their own content to our curated list. 𝐖𝐡𝐚𝐭 𝐃𝐢𝐬𝐭𝐨𝐫𝐭𝐍𝐞𝐰𝐘𝐨𝐫𝐤 𝐎𝐟𝐟𝐞𝐫𝐬: For Fans By Fans: Our team is composed of avid underground music lovers. We created this for ourselves, to spend less time finding things to do. We hope others find it just as useful. It could even help upcoming artists find an audience. User-Friendly Interface: Our intuitive design is visually appealing on both laptop screens and mobile devices, our platform ensures a seamless browsing experience. Effortlessly search using keywords, phrases, or dates to quickly find what you're looking for. Insider Recommendations: Discover hidden gems and emerging talents that are shaping the new scene. Community: Engage with other music lovers. Each listing has a comment section, allowing discourse between enthusiasts and tastemakers. Up-to-Date Information: Automation does SOME of the work. But our team constantly updates listings to provide the most accurate and current information. We let independent organizers upload their own shows, shining light on nontraditional venues that might otherwise slip through the cracks.",
  media: ['/dsny.PNG','/dny.PNG', '/bushwick.jpg'],
  date: new Date()

},
{
  id: '03',
  slug: 'tripshare',
  title: 'tripShare',
  description: 'share and inspire others with your experiences',
  body: "Explore captivating journeys and share your own. Dive into the world's favorite destinations.",
  media: ['/tripsharemain.PNG', '/tripshare.PNG', '/tripshare1.PNG'],
  date: new Date()
}, 
]

export default function Home() {
  return (
    <main className={classes.header}> 
           <ProjectGrid projects={projects}/>
    </main>
  );
}
