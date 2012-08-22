# Finds the International Components for Unicode (ICU) Library
#
#  ICU_FOUND          - True if ICU found.
#  ICU_INCLUDE_DIRS   - Directory to include to get ICU headers
#                       Note: always include ICU headers as, e.g., 
#                       unicode/utypes.h
#  ICU_LIBRARIES      - Libraries to link against for ICU (at large)

# Look for the main header file.
 find_path(
   ICU_INCLUDE_DIR
   NAMES unicode/utypes.h
   DOC "Include directory for the ICU library")
 mark_as_advanced(ICU_INCLUDE_DIR)

# Look for ICU Layout header
FIND_PATH(
ICULE_INCLUDE_DIR
NAMES layout/LayoutEngine.h
DOC "Include directory for the ICU Layout library"
)
mark_as_advanced(ICULE_INCLUDE_DIR)

# Look for the ICU internationalization libraries
find_library(
    ICU_I18N_LIBRARY
    NAMES icuin icui18n
    DOC "Libraries to link against for ICU internationalization")
mark_as_advanced(ICU_I18N_LIBRARY)

# Look for the layout engine library.
find_library(
  ICULE_LIBRARY
  NAMES icule
  DOC "Libraries to link against for ICU LE")
mark_as_advanced(ICULE_LIBRARY)

# Look for ICU X library.
find_library(
  ICUX_LIBRARY
  NAMES iculx
  DOC "Libraries to link against for the common parts of ICU X")
mark_as_advanced(ICUX_LIBRARY)

# Look for ICU UC library.
find_library(
  ICUUC_LIBRARY
  NAMES icuuc
  DOC "Libraries to link against for the common parts of ICU UC")
mark_as_advanced(ICUUC_LIBRARY)

# Copy the results to the output variables.
if(ICU_INCLUDE_DIR AND ICULE_INCLUDE_DIR AND ICU_I18N_LIBRARY AND ICULE_LIBRARY AND ICUX_LIBRARY AND ICUUC_LIBRARY)
  set(ICU_FOUND 1)
  set(ICU_LIBRARIES ${ICU_I18N_LIBRARY} ${ICULE_LIBRARY} ${ICUX_LIBRARY} ${ICUUC_LIBRARY})
  set(ICU_INCLUDE_DIRS ${ICU_INCLUDE_DIR} ${ICULE_INCLUDE_DIR})
else(ICU_INCLUDE_DIR AND ICULE_INCLUDE_DIR AND ICU_I18N_LIBRARY AND ICULE_LIBRARY AND ICUX_LIBRARY AND ICUUC_LIBRARY)
MESSAGE(STATUS)
MESSAGE(STATUS "ICU_INCLUDE_DIR ${ICU_INCLUDE_DIR}")
MESSAGE(STATUS "ICULE_INCLUDE_DIR ${ICULE_INCLUDE_DIR}")
MESSAGE(STATUS "ICU_I18N_LIBRARY ${ICU_I18N_LIBRARY}")
MESSAGE(STATUS "ICULE_LIBRARY ${ICULE_LIBRARY}")
MESSAGE(STATUS "ICUX_LIBRARY ${ICUX_LIBRARY}")
MESSAGE(STATUS "ICUUC_LIBRARY ${ICUUC_LIBRARY}")
  set(ICU_FOUND 0)
  set(ICU_LIBRARIES)
  set(ICU_INCLUDE_DIRS)
endif(ICU_INCLUDE_DIR AND ICULE_INCLUDE_DIR AND ICU_I18N_LIBRARY AND ICULE_LIBRARY AND ICUX_LIBRARY AND ICUUC_LIBRARY)

