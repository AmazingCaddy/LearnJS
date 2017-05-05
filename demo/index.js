define(["require", "exports", "Core/SharedComponents/OpportunitiesTile/OpportunitiesTile"], function (require, exports, View) {
    "use strict";
    var view = new View({ id: "opportunities-tile", attributes: { class: "tile-container" } }).render();
    $('#container').append(view.el);
});
