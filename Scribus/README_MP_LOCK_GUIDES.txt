# Lock guides defined on a master page

http://bugs.scribus.net/view.php?id=10100

- switching master page should remove the old master page's guides and replace them with the new master page's guides
- while editing the page it should not be possible to move or remove the master page's guides
  - it should not be possible to drag master pages' guides on a page
  - the master pages guides should be grayed out (and inactive) in the page's manage guides dialog
  - if the master page defines rows and columns, the tab should be inactive when editing page's guide. 
- it should be possible to disable the master page guides while working on a page (if they clash with local ones)
