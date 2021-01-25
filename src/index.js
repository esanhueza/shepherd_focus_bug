import "./styles.css";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

document.getElementById("app").innerHTML = `
<div class="container">
  <h1>Hello Vanilla!</h1>
  <div>
    <input class="input" placeholder="type here" type="text" />
  </div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  <div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores, libero maiores vel eius quia dolorem, doloribus quisquam adipisci provident reprehenderit quo ex illum pariatur eaque necessitatibus eveniet tempore minus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt nemo. Labore, soluta. Expedita, dignissimos est. Blanditiis quod quo repellat at ducimus rem expedita, soluta unde ullam saepe qui vero.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error deserunt veniam sint repellat, dolores odio. Quos unde, adipisci perspiciatis aut, voluptas fugiat aliquam id, corrupti doloremque alias in at porro.
  </div>
  <div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores, libero maiores vel eius quia dolorem, doloribus quisquam adipisci provident reprehenderit quo ex illum pariatur eaque necessitatibus eveniet tempore minus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt nemo. Labore, soluta. Expedita, dignissimos est. Blanditiis quod quo repellat at ducimus rem expedita, soluta unde ullam saepe qui vero.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error deserunt veniam sint repellat, dolores odio. Quos unde, adipisci perspiciatis aut, voluptas fugiat aliquam id, corrupti doloremque alias in at porro.
  </div>
  <div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores, libero maiores vel eius quia dolorem, doloribus quisquam adipisci provident reprehenderit quo ex illum pariatur eaque necessitatibus eveniet tempore minus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt nemo. Labore, soluta. Expedita, dignissimos est. Blanditiis quod quo repellat at ducimus rem expedita, soluta unde ullam saepe qui vero.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error deserunt veniam sint repellat, dolores odio. Quos unde, adipisci perspiciatis aut, voluptas fugiat aliquam id, corrupti doloremque alias in at porro.
  </div>
  <div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores, libero maiores vel eius quia dolorem, doloribus quisquam adipisci provident reprehenderit quo ex illum pariatur eaque necessitatibus eveniet tempore minus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt nemo. Labore, soluta. Expedita, dignissimos est. Blanditiis quod quo repellat at ducimus rem expedita, soluta unde ullam saepe qui vero.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error deserunt veniam sint repellat, dolores odio. Quos unde, adipisci perspiciatis aut, voluptas fugiat aliquam id, corrupti doloremque alias in at porro.
  </div>
</div>
`;
const tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: "shadow-md bg-purple-dark",
    scrollTo: true
  },
  useModalOverlay: true
});

tour.addStep({
  id: "example-step",
  text:
    "This step is attached to the bottom of the <code>.example-css-selector</code> element.",
  attachTo: {
    element: ".input",
    on: "bottom"
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Next",
      action: tour.next
    }
  ],
  popperOptions: {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 12]
        }
      }
    ]
  }
});

tour.start();
