(function () {
  "use strict"

  documentReady(function () {
    const $tables = document.querySelectorAll(`[data-table]`);

    Array.from($tables).forEach(($table) => {
      const $collapsableRows = $table.querySelectorAll(`[data-table-collapsed]`);

      Array.from($collapsableRows).forEach(($collapsableRow) => {
        $collapsableRow.addEventListener('click', function () {
          const id = this.getAttribute(`data-table-row-id`);
          // Set collapsed status
          let collapsed = this.getAttribute(`data-table-collapsed`) === 'true';
          collapsed=!collapsed;
          this.setAttribute('data-table-collapsed', collapsed);
          const $children = $table.querySelectorAll(`[data-table-row-parent="${id}"]`);
          const $allChildren = $table.querySelectorAll(`[data-table-row-parent^="${id}"]`);
          // On close, close all
          if (collapsed) {
            Array.from($allChildren).forEach(($child) => {
              $child.setAttribute('data-table-row-is-shown', !collapsed);
            });
          } else {
            Array.from($children).forEach(($child) => {
              $child.setAttribute('data-table-row-is-shown', !collapsed);
            });
          }

        });
      });
    });
  });
})();
