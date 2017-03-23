var CONFIG = {
 "data": {
  "path": "./data/global-wealth-data-for-2000-2016.csv",
  "reader": "csv-time_in_columns",
  "ddfPath": "./data/global-wealth-data-for-2000-2016.csv"
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
   "dim": "country",
   "show": {},
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autogenerate": {
    "conceptIndex": 0,
    "data": "data"
   },
   "dim": "country",
   "show": {},
   "skipFilter": false
  },
  "entities_tags": {
   "dim": null,
   "show": {},
   "skipFilter": false
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
    "which": "Average Wealth per adult (USD)",
    "zoomedMax": null,
    "zoomedMin": null
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
    "which": "Median Wealth per adult (USD)",
    "zoomedMax": null,
    "zoomedMin": null
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
    "autogenerate": {
     "conceptIndex": 0,
     "conceptType": "entity_set"
    },
    "data": "data",
    "palette": {
     "0": "#4cd843",
     "1": "#e83739",
     "2": "#ff7f00",
     "3": "#c027d4",
     "4": "#d66425",
     "5": "#0ab8d8",
     "6": "#bcfa83",
     "7": "#ff8684",
     "8": "#ffb04b",
     "9": "#f599f5",
     "10": "#f4f459",
     "11": "#7fb5ed",
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "country"
   },
   "highlight": [],
   "label": {
    "autogenerate": {
     "conceptIndex": 0
    },
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "country"
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
    "autogenerate": {
     "conceptIndex": 2,
     "conceptType": "measure"
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
    "which": "Adults (Trillions)",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
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
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2016",
   "endOrigin": null,
   "endSelected": "2016",
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
   "start": "2000",
   "startOrigin": null,
   "startSelected": "2000",
   "step": 1,
   "unit": "year",
   "value": "2016"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
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
  "panWithArrow": false,
  "presentation": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};