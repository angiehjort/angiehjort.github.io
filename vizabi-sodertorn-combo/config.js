var CONFIG = {
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf',
    dataset: 'open-numbers/ddf--sodertorn--stockholm_lan_basomrade'
  },

  
  "state": {
    "time": {
      "startOrigin": "1993",
      "endOrigin": "2015",
      "value": "2014",
      "dim": "year",
      "delay": 700
    },
    "entities": {
      "dim": "basomrade",
      "show": {
        "size": "big"
      }
    },
    "entities_colorlegend": {
      "dim": "municipality"
    },
    "entities_map_colorlegend": {
      "dim": "municipality"
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker": {
      "space": ["entities", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "axis_y": {
        "which": "higher_education_min_3_years_percent_of_population_aged_25_64",
        "use": "indicator"
      },
      "axis_x": {
        "which": "mean_income_aged_lt_20",
        "use": "indicator",
        "scaleType": "linear",
        "zoomedMin": "64000",
        "zoomedMax": "700000"
      },
      "size": {
        "which": "population_20xx_12_31",
        "use": "indicator",
        "scaleType": "linear",
        "extent": [0, 0.4],
        "allow": {
          "scales": ["linear"]
        }
      },
      "color": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      },
      "hook_centroid": {
        "use": "property",
        "which": "baskod2010",
        "_important": true
      },
      "color_map": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      }
    },
 
    
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3,
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },

  locale: {
    id: "sv-SE",
    filePath: "//s3-eu-west-1.amazonaws.com/static.gapminderdev.org/vizabi/develop/dist/assets/translation/"
  }
}