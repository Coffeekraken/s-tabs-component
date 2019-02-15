module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-tabs-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
      <ul class="tabs">
        <li class="tabs__item">
          <a href="#tab1" class="active" is="s-activate" group="tabs">
            Tab #1
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab2" is="s-activate" group="tabs">
            Tab #2
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab3" is="s-activate" group="tabs">
            Tab #3
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab4" is="s-activate" group="tabs">
            Tab #4
          </a>
        </li>
      </ul>
      <div class="tabs__content tf vr" id="tab1">
        <h3>Hello World #1</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab2">
        <h3>Hello World #2</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab3">
        <h3>Hello World #3</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab4">
        <h3>Hello World #4</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>

      <ul class="tabs tabs--primary m-t">
        <li class="tabs__item">
          <a href="#tab-primary1" class="active" is="s-activate" group="tabs-primary">
            Tab #1
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-primary2" is="s-activate" group="tabs-primary">
            Tab #2
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-primary3" is="s-activate" group="tabs-primary">
            Tab #3
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-primary4" is="s-activate" group="tabs-primary">
            Tab #4
          </a>
        </li>
      </ul>
      <div class="tabs__content tf vr" id="tab-primary1">
        <h3>Hello World #1</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-primary2">
        <h3>Hello World #2</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-primary3">
        <h3>Hello World #3</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-primary4">
        <h3>Hello World #4</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>

      <ul class="tabs tabs--secondary m-t">
        <li class="tabs__item">
          <a href="#tab-secondary1" class="active" is="s-activate" group="tabs-secondary">
            Tab #1
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-secondary2" is="s-activate" group="tabs-secondary">
            Tab #2
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-secondary3" is="s-activate" group="tabs-secondary">
            Tab #3
          </a>
        </li>
        <li class="tabs__item">
          <a href="#tab-secondary4" is="s-activate" group="tabs-secondary">
            Tab #4
          </a>
        </li>
      </ul>
      <div class="tabs__content tf vr" id="tab-secondary1">
        <h3>Hello World #1</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-secondary2">
        <h3>Hello World #2</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-secondary3">
        <h3>Hello World #3</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      <div class="tabs__content tf vr" id="tab-secondary4">
        <h3>Hello World #4</h3>
        <p class="lead">
            Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
        </p>
        <p>
            Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
        </p>
      </div>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';

        @include s-setup(());
        @include s-init();
        @include s-classes();

        @include s-typography-classes();

        @include s-tabs-classes();

        body {
          padding: s-space(bigger);
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import SActivateComponent from 'coffeekraken-s-activate-component'
      `
    }
  }
}
