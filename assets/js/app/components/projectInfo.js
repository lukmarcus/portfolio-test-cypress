export default {
  props: ["project"],
  template: `
    <aside class="project-sidebar">
        <div class="project-sidebar-inner bg-white p-4">
            <div class="sidebar-row mb-5">
                <h3 class="sidebar-title mb-4">Project Info</h3>
                <ul class="list-unstyled ps-2">
                    <li class="mb-4"><i class="fas fa-building me-3 text-primary"
                            data-fa-transform="grow-6 down-2"></i><strong>Company:</strong> {{ project.companyName }}</li>
                    <li class="mb-4">
                        <i class="fas fa-external-link-alt me-3 text-primary" data-fa-transform="grow-6 down-2"></i>
                        <strong>Site Link:</strong> <a :href="project.archivedUrl">{{project.url}}</a>
                        (archive)
                    </li>
                    <li><i class="fas fa-wrench me-3 text-primary"
                            data-fa-transform="grow-6 down-2"></i><strong>Type:</strong> {{project.type}}
                    </li>
                </ul>
            </div>
            <div class="sidebar-row">
                <h3 class="sidebar-title mb-3">Technologies Used</h3>
                <div class="webdev-icons row mb-5 justify-content-center">

                    <div class="webdev-icon col-2 col-sm-1 col-lg-2 me-0 mb-4"
                        v-for="iconName in project.technologies"
                    >
                        <img class="img-fluid" :src="'/assets/images/webdev-icons/' + iconName + '.svg'" :title="iconName">
                    </div>
                </div>
            </div>
        </div>
    </aside>
    `,
};
