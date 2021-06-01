import ProjectThumbnail from "./projectThumbnail.js";
import ProjectsGrid from "./projectsGrid.js";
import ProjectsFilters from "./filters.js";

import { useDB } from "../composables/useDB.js";

export default {
  components: { ProjectThumbnail, ProjectsFilters, ProjectsGrid },
  template: `
    <section class="section pt-5">
        <div class="container">
            <projects-filters :filters="projectFilters"/>
            <projects-grid :projects="projects"/>
        </div>
    </section>
  `,
  setup(props) {
    const { projects, projectFilters } = useDB();
    return { projects, projectFilters };
  },
};