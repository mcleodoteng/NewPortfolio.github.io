import ProjectsItem from "./ProjectsItem";
import image1 from "../assets/Todo.jpg";
import image2 from "../assets/Mole.jpg";
import image3 from "../assets/ecom.jpg";
import image4 from "../assets/port.jpg";
import image5 from "../assets/Country.jpg";
import image6 from "../assets/Dictionary.jpg";
import image7 from "../assets/FoodApp.png";
import image8 from "../assets/FoodApp1.jpg";
import image9 from "../assets/analogue.jpg";
import image10 from "../assets/Fylo.jpg";
import image11 from "../assets/Digital .jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore my frontend projects portfolio, a curated collection of
        captivating web development endeavors. From crafting pixel-perfect
        interfaces to implementing seamless user experiences, each project
        demonstrates my commitment to marrying creativity with functionality.
        Whether it&apos;s responsive design, dynamic animations, or intuitive
        user interfaces, this portfolio encapsulates my passion for bringing
        ideas to life in the digital realm. Dive into the showcase to witness
        firsthand the fusion of design finesse and technical expertise. Your
        journey into the world of frontend excellence awaits.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem
          img={image1}
          projectName="To Do App"
          link1={"https://mcleodoteng.github.io/MyTodoApp.github.io/"}
          link2={"https://github.com/mcleodoteng/MyTodoApp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
          lang3={"Firebase"}
        />
        <ProjectsItem
          img={image2}
          projectName="Whack A Mole"
          link1={"https://mcleodoteng.github.io/Whack-a-Mole.github.io/"}
          link2={"https://github.com/mcleodoteng/Whack-a-Mole.github.io"}
          lang1={"HTML "}
          lang2={"CSS"}
          lang3={"JavaScript"}
        />
        <ProjectsItem
          img={image3}
          projectName="Ecommerce Shop"
          link1={"https://mcleodoteng.github.io/StereoApp.github.io/"}
          link2={"https://github.com/mcleodoteng/StereoApp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image4}
          projectName="Portfolio App"
          link1={"https://mcleodoteng.github.io/portfolio.github.io/"}
          link2={"https://github.com/mcleodoteng/portfolio.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image5}
          projectName="Country App"
          link1={"https://mcleodoteng.github.io/countryApp.github.io/"}
          link2={"https://github.com/mcleodoteng/countryApp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image6}
          projectName="Dictionary App"
          link1={"https://mcleodoteng.github.io/dictionaryApp.github.io/"}
          link2={"https://github.com/mcleodoteng/dictionaryApp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image7}
          projectName="FoodStore"
          link1={"https://mcleodoteng.github.io/Foodapp.github.io/"}
          link2={"https://github.com/mcleodoteng/Foodapp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image8}
          projectName="Burger Shop"
          link1={"https://mcleodoteng.github.io/MyFoodApp.github.io/"}
          link2={"https://github.com/mcleodoteng/MyFoodApp.github.io"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image9}
          projectName="Analogue Clock"
          link1={"https://mcleodoteng.github.io/The-Analogue-Clock.github.io/"}
          link2={"https://github.com/mcleodoteng/The-Analogue-Clock.github.io"}
          lang1={"HTML"}
          lang2={"CSS"}
          lang3={"Javascript"}
        />
        <ProjectsItem
          img={image10}
          projectName="Fylo Page"
          link1={"https://mcleodoteng.github.io/FirstReactProject/"}
          link2={"https://github.com/mcleodoteng/FirstReactProject"}
          lang1={"React.js"}
          lang2={"Tailwind CSS"}
        />
        <ProjectsItem
          img={image11}
          projectName="Count Down Timer"
          link1={
            "https://mcleodoteng.github.io/mcleodCountDownTimer.github.io/"
          }
          link2={
            "https://github.com/mcleodoteng/mcleodCountDownTimer.github.io"
          }
          lang1={"HTML"}
          lang2={"CSS"}
          lang3={"Javascript"}
        />
      </div>
    </div>
  );
};

export default Projects;
