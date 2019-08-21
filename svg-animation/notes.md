# Advanced SVG Animation Course

## Platonic Shapes

* Default shapes in SVG: rect, circle, ellipse, polygon, line;
* `circle` cx/cy: center points;
* You can use your viewbox to crop or use it as a "camera" in After Effects;


## Paths and Groups

* `preserveAspectRatio` controls the shapes positioning inside viewbox;
* It takes three parameters: x (min, mid, max), y (min, mid, max) and meetOrSlice, `xMidyMid meet = align the mid of the element viewBox with the mid of the viewport`
* Slice scale the element as much as possible, and the viewport slices the remaining (very much like overflow: hidden, i think??)
* Using `none` deform the viewBox to meet the viewport;
* Polyline: useful for data visualization, basically an array of points
* Path: has a attribute `d` that contains a series of numbers and letters for path positioning. Uppercase means position absolute, lowercase means relative;
    * M, m => moveTo, path start;
    * L, l => lineTo, diagonal lines,
    * H, l => horizontal line;
    * V, v => vertical lines;
    * Z, z => end of the path;
* Curve commands, describe beziér curves: Ss, Qq, Tt, Aa;
* Neat CodePen tool for learn those path modificators => [CodePen link]("https://codepen.io/anthonydugois/pen/mewdyZ")


## Optimization + SVG DOM

* If not inline, SVG only can be animated inside SVG file markup using `<style>`, `<script>` or `SMIL` (IE/EdgeHTML support nonexistent);


## SVG Sprites

* Frame-by-frame animation using `steps()` CSS;
* Create a large SVG sprite, define it as a `background-image`, then animate the `background-position`;
* Apply delays and decouple animations in layers to a more life-like experience;


## GreenSock

* Ideal for animation chaining, that could be a bit more complex/tedious to adjust in CSS;
* It works in modules, so it´s basic functionality has 4kb (not sure if gzipped);
* Works IE9+, fulfills some cross-browser functionality differences;
* On export to SVG in Illustration, naming things (groups, paths) turns out as ids on XML output;
* Stagger: loop de animações em diversos objetos, variando o delay ou as propriedades (podem ser declaradas em um array);
