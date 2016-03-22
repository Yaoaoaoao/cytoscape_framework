Cytoscape framework
===================

A template to quickly start a Cytoscape visualization presentation. 

Usage
-----
1. Put data file under the "data/" folder
2. Go to the src folder and run view.py
```
cd src
python view.py
```

3. For web display: in "src/view.py", un-comment the write_file() at the end and re-run the script. This will generate a JSON file in "js/network.js". Upload the "view.php" and all files under "js" folder to the web server. Open the view.php page.

** you can download the latest cytoscape.js (see reference) and replace the "cytoscape.min.js" under the js/library folder. 

Structure
---------
.
├── README.md
├── data: **Source data**
│   └── test.csv
│
├── src: **Data cleaning and organizing**
│   ├── __init__.py
│   ├── global_variable.py
│   ├── dump.py
│   ├── edge.py: define edge in the network.
│   ├── node.py: define node in the network.
│   └── view.py: main program. 
│
├── js: **Visualization module**
│   ├── library (Cytoscape.js library, v2.3.11 is included)
│   ├── font (Cytoscape.js library)
│   ├── functions_cyto.js: initialize cytoscape, define mouse_hover and left_click action.
│   ├── layout.js: define Cytoscape layout. 
│   ├── network.js: define Cytoscape network elements. 
│   ├── style.js: define Cytoscape visual style.
│   └── web_style.css: Webpage css style.
│
└── view.php: Cytoscape view page.


Reference
---------
* Cytoscape documentation: http://cytoscape.github.io/cytoscape.js/