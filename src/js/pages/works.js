// styles
import "../../scss/pages/works.scss";

import "../components/items";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section class="section section-content section-hero">
    <div class="container">
      <div class="row g-4" items-list>
      </div>
    </div>
  </section>
</main>
`;
