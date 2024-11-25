// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "plugin:react/recommended",
//         "google"
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": 15,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint"
//     ],
//     "rules": {
//     }
// };
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-tabs':OFF
    }
}
