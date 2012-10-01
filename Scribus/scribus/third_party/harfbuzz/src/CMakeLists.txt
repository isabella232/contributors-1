INCLUDE_DIRECTORIES(
${CMAKE_CURRENT_SOURCE_DIR}
${FREETYPE_INCLUDE_DIRS}
)

SET(LIB_TYPE STATIC)

add_definitions( -DHAVE_OT=1 )

#No condition needed, main CMakeLists already checked for FT
SET(HBSOURCES_FT
hb-ft.cc
)

SET(HBSOURCES
hb-blob.cc
hb-buffer.cc
hb-common.cc
hb-font.cc
hb-shape.cc
hb-shaper.cc
hb-shape-plan.cc
hb-unicode.cc
hb-ot-tag.cc
hb-ot-layout.cc
hb-fallback-shape.cc
hb-font.cc
hb-ot-layout.cc
hb-ot-map.cc
hb-ot-shape.cc
hb-ot-shape-complex-arabic.cc
hb-ot-shape-complex-indic.cc
hb-ot-shape-complex-misc.cc
hb-ot-shape-fallback.cc
hb-ot-shape-normalize.cc
hb-tt-font.cc
hb-shape-plan.cc
hb-warning.cc
${HBSOURCES_FT}
)


SET(SCRIBUS_HARFBUZZ_LIB "scribus_harfbuzz_lib")
ADD_LIBRARY(${SCRIBUS_HARFBUZZ_LIB} STATIC ${HBSOURCES})

# This is a convenience library that for linkage purposes is part of Scribus's
# main API.
SET_TARGET_PROPERTIES(${SCRIBUS_HARFBUZZ_LIB}
  PROPERTIES
  COMPILE_FLAGS -DCOMPILE_SCRIBUS_MAIN_APP
  )
