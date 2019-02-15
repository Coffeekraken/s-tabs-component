# STabsComponent

Create nice and customizable tabs


### Example
```html
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
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Mixins


### s-tabs

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-bare

Print out the bare tabs css


### s-tabs-style

Print out the style tabs css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-tabs-item

Print out the bare item and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-tabs-item-bare

Print out the bare tabs item css


### s-tabs-item-style

Print out the style tabs item css


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