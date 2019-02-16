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


### s-tabs-menu

Print out the menu bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-menu-bare

Print out the menu bare tabs css


### s-tabs-menu-style

Print out the menu style tabs css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-menu-item

Print out the bare menu item and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-menu-item-bare

Print out the bare tabs item css


### s-tabs-menu-item-style

Print out the style tabs item css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-menu-item-opaque

Print out the bare menu item opaque and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-menu-item-opaque-bare

Print out the bare tabs item opaque css


### s-tabs-menu-item-opaque-style

Print out the style tabs item opaque css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-content

Print out the bare content and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-content-bare

Print out the bare tabs content css


### s-tabs-content-style

Print out the style tabs content css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-content-filled

Print out the bare content filled and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-content-filled-bare

Print out the bare tabs content filled css


### s-tabs-content-filled-style

Print out the style tabs content filled css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-content-opaque

Print out the bare content opaque and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-content-opaque-bare

Print out the bare tabs content opaque css


### s-tabs-content-opaque-style

Print out the style tabs content opaque css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default