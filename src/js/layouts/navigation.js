class Navigation {
  constructor() {
    window.addEventListener("load", (e) => {
      this.events();
    });
  }

  events() {
    let pageURL = window.location.pathname,
      lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1),
      items = [
        {
          'name': 'Все работы',
          'path': 'works'
        },
      ],
      navAreas = document.querySelectorAll('[navigation]');

    for (const navArea of navAreas) {
      if (navArea) {
        for (const item of items) {
          const navItem = document.createElement('div');
          navItem.className = 'nav-item';
          navItem.innerHTML = `
      <div class="cursor-effect">
          <a href="./${item.path}" class="nav-link ${item.path === lastURLSegment ? 'active' : ''}" url="/${item.path}">
            <div class="nav-link-inner">
              <div class="nav-link-text">
                ${item.name}
              </div>
            </div>
          </a>
      </div>
    `;
          navArea.appendChild(navItem);
        }
      }
    }
  }
}

new Navigation();