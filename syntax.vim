"syn match orangeBlue   "scroll_smooth" containedin=ALL
"syn match orangeBlue   "overflow_visi" containedin=ALL
"syn match orangeGreen  "thumb_p"       containedin=ALL
:syn match dimmed       ".*log_this.*"
:syn match dimmedred    ".*logXXX.*"
:syn match dimmedyellow  ".*logBIG.*"
"syn match dimmedyellow "\w*container\w*"
"syn match orangeBlue   "let.*\w\+.*=.*function.*"

:syn keyword ecc4 deny_or_allow         containedin=ALL
:syn keyword ecc5 hide_or_edit          containedin=ALL
:syn keyword ecc6 mask_or_hide          containedin=ALL
:syn keyword ecc7 site_or_page          containedin=ALL

:syn keyword ecc0 EVENT                 containedin=ALL
:syn keyword ecc9 LISTENER              containedin=ALL
:syn keyword ecc8 CALLBACK              containedin=ALL

:syn keyword ecc1 LOAD                  containedin=ALL
:syn keyword ecc2  STORE                containedin=ALL
:syn keyword ecc3    LAYOUT             containedin=ALL
:syn keyword ecc4     NODE              containedin=ALL
:syn keyword ecc5      CHANGE           containedin=ALL

:syn keyword ecc1 DOWN                  containedin=ALL
:syn keyword ecc1 ONDOWN                containedin=ALL
:syn keyword ecc2  MOVE                 containedin=ALL
:syn keyword ecc3   LONG_PRESS          containedin=ALL
:syn keyword ecc4    UP                 containedin=ALL
:syn keyword ecc5     CLICK             containedin=ALL
:syn keyword ecc6      LONG_CLICK       containedin=ALL

:syn keyword ecc6 PIVOT                 containedin=ALL
:syn keyword ecc7 PINNED                containedin=ALL
:syn keyword ecc8  target_tool           containedin=ALL
:syn keyword ecc9   CONTAINERS_FULLSCREEN containedin=ALL

:syn keyword ecc3 add_tool_pointermove_listener containedin=ALL
:syn keyword ecc6 add_page_pointermove_listener containedin=ALL

syn keyword ecc0   CSS_POINT_EE point_EE       containedin=ALL
syn keyword ecc1   CSS_POINT_SE point_SE       containedin=ALL
syn keyword ecc2   CSS_POINT_SW point_SW       containedin=ALL
syn keyword ecc3   CSS_POINT_WW point_WW       containedin=ALL
syn keyword ecc4   CSS_POINT_NW point_NW       containedin=ALL
syn keyword ecc5   CSS_POINT_NE point_NE       containedin=ALL

:syn keyword ecc1 PAT                   containedin=ALL
:syn keyword ecc2  WORDING              containedin=ALL
:syn keyword ecc3   SCROLLING           containedin=ALL
:syn keyword ecc4    GUTTER             containedin=ALL
:syn keyword ecc5     SLOT              containedin=ALL
:syn keyword ecc6      TARGET           containedin=ALL
:syn keyword ecc7       SEEKER          containedin=ALL
:syn keyword ecc8        CLONE          containedin=ALL
:syn keyword ecc9         IPC           containedin=ALL

