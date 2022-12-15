const NavBar = {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{name:'home'}"><strong>PLP</strong></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <a href="/app/form.html" target="_blank" class="nav-link">Contact Form (External)</a>
              </li>
            </ul>
          </div>
        </nav>
    `
}