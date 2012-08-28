# FRIBIDI

# Note that we have pre-generated include files "fribidi_tab_char_type*" and "fribidi_tab_mirroring.i" as
# the formers need `sed` to be generated and we don't want to have this dep on some platforms

# In fribidi_config.h, we defined FRIBIDI_NO_CHARSETS to 1

INCLUDE_DIRECTORIES(
${CMAKE_CURRENT_SOURCE_DIR}
)

SET(LIB_TYPE STATIC)

SET( FRIBIDI_SRCS
	fribidi.c
	fribidi_types.c
	fribidi_mem.c
	fribidi_mirroring.c
	fribidi_char_type.c
	fribidi_utils.c
	wcwidth.c
)

ADD_DEFINITIONS(-DHAS_FRIBIDI_TAB_CHAR_TYPE_9_I)

SET(SCRIBUS_FRIBIDI_LIB "scribus_fribidi_lib")
ADD_LIBRARY(${SCRIBUS_FRIBIDI_LIB} STATIC ${FRIBIDI_SRCS})


# This is a convenience library that for linkage purposes is part of Scribus's
# main API.
SET_TARGET_PROPERTIES(${SCRIBUS_FRIBIDI_LIB}
  PROPERTIES
  COMPILE_FLAGS -DCOMPILE_SCRIBUS_MAIN_APP
  )

