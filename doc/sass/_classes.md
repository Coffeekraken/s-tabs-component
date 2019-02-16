# STabsComponent

Create nice and customizable tabs


### Example
```html
	<div class="tabs">
  <ul class="tabs__menu">
    <li class="tabs__menu-item">
      <a href="#tab1" class="active" is="s-activate" group="tabs">
         Tab #1
      </a>
    </li>
    <li class="tabs__menu-item">
      <a href="#tab2" is="s-activate" group="tabs">
        Tab #2
      </a>
    </li>
    <li class="tabs__menu-item">
      <a href="#tab3" is="s-activate" group="tabs">
        Tab #3
      </a>
    </li>
    <li class="tabs__menu-item">
      <a href="#tab4" is="s-activate" group="tabs">
        Tab #4
      </a>
    </li>
  </ul>
  <div class="tabs__content tf vr" id="tab1">
    <h3>Hello World #1</h3>
  </div>
  <div class="tabs__content tf vr" id="tab2">
    <h3>Hello World #2</h3>
  </div>
  <div class="tabs__content tf vr" id="tab3">
    <h3>Hello World #3</h3>
  </div>
  <div class="tabs__content tf vr" id="tab4">
    <h3>Hello World #4</h3>
  </div>
</div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-tabs-classes

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-tabs-classes-bare

Print out the bare component css


### s-tabs-classes-style

Print out the style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary