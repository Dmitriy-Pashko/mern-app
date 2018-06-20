module.exports = {
    "extends": "airbnb",
    "rules": {
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": ["preferButton" ]
          }],
        "arrow-body-style" : 0,
        "linebreak-style" : 0,
        "prefer-arrow-callback" : 0,
        "spaced-comment" : 0,
        "react/jsx-filename-extension" : 0,
        "func-names" : 0,
        "no-underscore-dangle" : 0,
        "no-console" : 0,
        "react/prop-types" : 0,
        "react/prefer-stateless-function" : 0,
        "react/no-unused-state": 0,
        "jsx-a11y/href-no-hash": [0], 
    },
    parser: "babel-eslint",
    "env": {
        "browser": true,
    },
};