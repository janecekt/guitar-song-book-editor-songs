target = songbook


latex:
	cslatex ${target}

bibtex:
	bibtex ${target}

pdflatex:
	pdflatex ${target}



pdf: 
	latex ${target} 
	#bibtex ${target} 
	latex ${target} 
	dvips -Ppdf -t A4 ${target}
	ps2pdf ${target}.ps
	/opt/acroread/bin/acroread ${target}.pdf



clean:
	rm *.aux 
	rm *.blg 
	rm *.l* 
	rm *.toc 
	rm *.dvi
	rm *~
