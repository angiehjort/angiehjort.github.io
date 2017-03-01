var CONFIG = {
 "data": {
  "path": "panel.csv",
  "reader": "csv"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autogenerate": {
    "conceptIndex": 0,
    "data": "data"
   },
   "dim": "Country",
   "show": {}
  },
  "entities_colorlegend": {
   "autogenerate": {
    "conceptIndex": 0,
    "data": "data"
   },
   "dim": "Country",
   "show": {}
  },
  "entities_tags": {
   "dim": null,
   "show": {}
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autogenerate": {
     "conceptIndex": 1,
     "conceptType": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "Population",
    "zoomedMax": 82534,
    "zoomedMin": 317
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autogenerate": {
     "conceptIndex": 0,
     "conceptType": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "Article 177 references",
    "zoomedMax": 88,
    "zoomedMin": 1
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "data": "data",
    "palette": {
     "0": "#bcfa83",
     "1": "#4cd843",
     "2": "#ff8684",
     "3": "#e83739",
     "4": "#ffb04b",
     "5": "#ff7f00",
     "6": "#f599f5",
     "7": "#c027d4",
     "8": "#f4f459",
     "9": "#d66425",
     "10": "#7fb5ed",
     "11": "#0ab8d8",
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "Country"
   },
   "highlight": [],
   "label": {
    "autogenerate": {
     "conceptIndex": 0
    },
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "Country"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "size": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.85
    ],
    "scaleType": "linear",
    "use": "indicator",
    "which": "Intra-EU trade",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "scaleType": "ordinal",
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ]
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "use": "property",
    "which": "name"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ]
  },
  "marker_tags": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_parent": {
    "data": "data",
    "which": null
   },
   "label": {
    "data": "data",
    "use": null,
    "which": null
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_tags"
   ]
  },
  "time": {
   "autogenerate": {
    "conceptIndex": 0,
    "conceptType": "time",
    "data": "data"
   },
   "delay": "450.0",
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "Years",
   "end": "2014",
   "endOrigin": null,
   "endSelected": "2014",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "start": "1961",
   "startOrigin": null,
   "startSelected": "1961",
   "step": 1,
   "unit": "year",
   "value": "2014"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "size",
   "trails",
   "lock",
   "moreoptions",
   "fullscreen",
   "presentation"
  ],
  "chart": {
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "presentation": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};