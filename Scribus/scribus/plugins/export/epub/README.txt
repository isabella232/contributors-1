120812	concept for spans 2
120814	start implementing char formatting	3
120814	read and set char styles + first draft for char formatting stack	3
120815	char formatting as enum	1
120815	packaging for epub	1
120913	writing all metadata	2
120915	fix the compression for epub (mimetype!)	2
120915	export each section as an xhtml filex	 4
120916	css clean up + correctly appy css styles	4
120919	generate and generate the image for the cover	4
120926	refactor the class and file names	1
120926	test items out of page	1


the epub exporter does not allow you to design epub files.

it takes your SLA file (the scribus file) and exports all the content -- text with paragraph style, character styles, and some of the local formatting; images -- and packs it in a well formatted epub file.

you will then be able to open the epub file with sigil (or any other epub editor) and tweak it to your needs.

#Other possible formats
- Epub
  Versions 2.0.1 / 3.0
- Comic Book Archive file
  cbr (RAR); .cbz (ZIP); .cb7 (7z); .cbt (TAR); .cba (ACE)
- eReader
  .pdb
- iBook
  .ibooks
- Kindle
  .azw; .kf8
- Mobipocket
  .prc; .mobi
- Plucker
  .pdb

LINKS

http://extensions.services.openoffice.org/en/project/Writer2ePub
