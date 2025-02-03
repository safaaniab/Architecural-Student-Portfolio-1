import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
    "../New folder (2)/DSGN3.png",  // Go one level up
    "../New folder (2)/DSGN4.png",
    "../New folder (2)/DSGN5.png",
    "../New folder (3)/DSGN7.png",
    "../New folder (3)/DSGN9.png"
];

const trees = [
  "./images and obj/tails image model.png",
  "./images and obj/paper model.png",
  "./images and obj/Screenshot 2025-02-03 004813.png",
  "./images and obj/Screenshot 2025-02-03 004835.png",
  "./images and obj/Screenshot 2025-02-03 004857.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      DIGITIZED CATASTROPHE
        <div class="three-model">
        <a href="./CE Images/ce amani.png" target="_blank"><img src="./CE Images/ce amani.png" id="model1" alt="Model 1 Image" /></a>
        </div>
        <div id="images-description">
          <div id="images">
  ${cubes
    .map(
      (cube, index) => `<a href="${cube}" target="_blank"><img src="${cube}" alt="cube${index + 1}" /></a>`
    )
    .join("")}        
</div>
          <h4 id="description">The process of “Digitized Catastrophe” began with exploring the connections that I have to the digital world that we all find ourselves interconnected with. I wanted to showcase my opinions on societies, and my own dependence on technology. Thus, the images were chosen and collaged to create a cyber-like world that contains environments similar to ones that could be found in real life. To symbolically represent our reliance on technology, the people in the scene are created from inorganic material or parts of them are technological as well.


          The world as we know it is constantly becoming more technological, and in turn humanity is as well. Our dependence on technology is neither inherently good or bad, however, more commonly I find myself negatively impacted by it. Our digital world consistently pushes out information of new tragedies and disparities daily, and crowds our worldview. We are constantly watching others and being watched, it is our connection to everyone else, yet also what creates disconnect because of its prioritization in society.
          

It is beneficial at highlighting good in our world as well, but more often than not, it is overlooked and forgotten. I myself am guilty of this as well, as we are bombarded with negative information that we simply process and forget before the next piece of media is published and the cycle begins again. The information we learn is so fleeting, quick and ephemeral, but as it is so commonly negative, our outlook on life tends to reflect what we learn as well. Thus, while a commentary on the tendency of individuals to start catastrophizing, there are pockets of hope within the crowded, technological city in the cadavre. To show that while the world may seem bleak and hopeless - and it is easy to fall into pits of despair believing this - there is still good in the world, no matter how small, if individuals choose to look for it.</h4>
        </div>
      </div>

      <div id="project-row">
      INTEROP(ERABILITY)
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
             ${trees
    .map(
      (trees, index) => `<a href="${trees}" target="_blank"><img src="${trees}" alt="tree${index + 1}" /></a>`
    )
    .join("")} 
          </div>
          <h4 id="description">It’s not really something I ever was too conscious of before. I had used the different surfaces to create objects but when I was working with SubDs and meshes in Rhino, I never really knew what the distinction or difference was besides the fact that one made my computer crash more frequently because it was more detailed and had more faces.
However, I think learning about the interoperability between surfaces and the abiity to switch between different ones in order to suit the needs of a software or desired look for a creation was actually quite helpful in allowing me to
understand how to visualize and conceptualize modeling different objects and surfaces in my mind. I am not the most versed in STL or FBX file types, but I think seeing how they can be applied and the different levels of surfaces and mesh faces does give
me some insight as to how they could be used more efficiently in 3D modelling for landscapes and such. I think it is quite a useful thing, I feel that with these concepts in mind, it actually helped me with modelling my higher quality model as I was conscious of the different shapes, and sub-division levels. When converting from different programs as well, I was able to see how all these programs are really interconnected with one another because of the ability to transfer these types of files over quickly, and start working on the same model. It’s nice that objects can
be converted into different file and surface types easily because it opens up
the possibilities of what you can do to those surfaces and how you can modify
it. I believe it helps to think more critically about modelling, using the surface
type that fits the needs of what is being modeled most effectively and also
showing how different processes can potentially be created in different ways
but still end up at the same endpoint</h4>
        </div>
      </div>

${/* Model 3 commented out}
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
 createThreeScene("#model2", "/3DModels/project2/222222.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
