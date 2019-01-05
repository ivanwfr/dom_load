include Make_GIT
.PHONY: tooltags                                                             #{{{

:cd %:h:make tags:cd -
:new ~/.ctags
:new C:/LOCAL/DATA/ANDROID/PROJECTS/Makefile
:!start explorer "https://github.com/romainl/ctags-patterns-for-javascript"
:!start explorer "https://stackoverflow.com/questions/33647614/how-to-configure-ctags-to-work-with-css-scss-html"

 PROFILES_DIR	= $(LOCAL)/STORE/DEV/PROJECTS/RTabs/Util/RTabs_Profiles

tags:
	@(\
	    echo "[$@] in   $(PROFILES_DIR)/DEV";\
            cd              $(PROFILES_DIR)    ;\
	    ctags -R        $(PROFILES_DIR)/DEV;\
	    echo `wc -l tags`;\
        )
#}}}
p index jsp:
	(\
            cd C:/LOCAL/DATA/ANDROID/PROJECTS;\
            make $@;\
	)
