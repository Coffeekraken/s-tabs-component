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
      <div class="tabs tabs--primary m-t">
        <ul class="tabs__menu">
          <li class="tabs__menu-item">
            <a href="#tab11" class="active" is="s-activate" group="tabs1">
              Tab #1
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab12" is="s-activate" group="tabs1">
              Tab #2
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab13" is="s-activate" group="tabs1">
              Tab #3
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab14" is="s-activate" group="tabs1">
              Tab #4
            </a>
          </li>
        </ul>
        <div class="tabs__content tf vr" id="tab11">
          <h3>Hello World #1</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
          <a class="btn btn--primary">Do something great</a>
        </div>
        <div class="tabs__content tf vr" id="tab12">
          <h3>Hello World #2</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <div class="form-group m-b">
            <input type="text" class="form-input" placeholder="Firstname" />
          </div>
          <div class="form-group m-b">
            <input type="text" class="form-input" placeholder="Firstname" />
          </div>
          <input type="submit" class="btn btn--secondary" value="Submit" />
        </div>
        <div class="tabs__content tf vr" id="tab13">
          <h3>Hello World #3</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
        </div>
        <div class="tabs__content tf vr" id="tab14">
          <h3>Hello World #4</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
        </div>
      </div>

      <div class="tabs tabs--secondary tabs--opaque m-t">
        <ul class="tabs__menu">
          <li class="tabs__menu-item">
            <a href="#tab21" class="active" is="s-activate" group="tabs2">
              Tab #1
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab22" is="s-activate" group="tabs2">
              Tab #2
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab23" is="s-activate" group="tabs2">
              Tab #3
            </a>
          </li>
          <li class="tabs__menu-item">
            <a href="#tab24" is="s-activate" group="tabs2">
              Tab #4
            </a>
          </li>
        </ul>
        <div class="tabs__content tf vr" id="tab21">
          <h3>Hello World #1</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
          <a class="btn btn--primary">Do something great</a>
        </div>
        <div class="tabs__content tf vr" id="tab22">
          <h3>Hello World #2</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <div class="form-group m-b">
            <input type="text" class="form-input" placeholder="Firstname" />
          </div>
          <div class="form-group m-b">
            <input type="text" class="form-input" placeholder="Firstname" />
          </div>
          <input type="submit" class="btn btn--primary" value="Submit" />
        </div>
        <div class="tabs__content tf vr" id="tab23">
          <h3>Hello World #3</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
        </div>
        <div class="tabs__content tf vr" id="tab24">
          <h3>Hello World #4</h3>
          <p class="lead">
              Cras cursus diam eu ligula auctor, at tempor felis finibus. Aenean eget vulputate justo.
          </p>
          <p>
              Fusce quis eleifend felis. Proin placerat gravida sem, ac pharetra arcu aliquet condimentum. Nullam et efficitur metus, vel sagittis odio. Cras gravida mauris vitae ultrices pharetra. Nullam laoreet auctor enim sed placerat. Aliquam erat volutpat. Sed turpis nisi, lacinia at varius vestibulum, volutpat eget lacus. Nulla elementum egestas dolor, ac.
          </p>
        </div>
      </div>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'node_modules/coffeekraken-s-button-component/index';
        @import 'node_modules/coffeekraken-s-form-component/index';
        @import 'index';

        @include s-setup(());
        @include s-init();
        @include s-classes();

        @include s-button-classes();
        @include s-form-classes();
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
