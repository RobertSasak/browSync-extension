// SAMPLE
this.manifest = {
    "name": "BrowSync",
    "icon": "../../icons/logo256.png",
    "settings": [{
            "tab": "General",
            "group": "Authentification",
            "name": "secret",
            "type": "text",
            "label": "Secret phrase",
            "text": "rather long and complicated password"
        }, {
            "tab": "General",
            "group": "Authentification",
            "name": "myDescription",
            "type": "description",
            "text": "Must be a non-empty string and can't contain \".\", \"#\", \"$\", \"[\", or \"]\". It is a share secret amoung all the devices. Use it to pair the other devices."
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #1",
            "name": "replaceWhat1",
            "type": "text",
            "label": "Replace string",
            "text": "localhost"
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #1",
            "name": "replaceWith1",
            "type": "text",
            "label": "With",
            "text": "10.0.0.x"
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #2",
            "name": "replaceWhat2",
            "type": "text",
            "label": "Replace string",
            "text": "127.0.0.1"
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #2",
            "name": "replaceWith2",
            "type": "text",
            "label": "With",
            "text": "192.168.0.x"
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #3",
            "name": "replaceWhat3",
            "type": "text",
            "label": "Replace string",
            "text": "local-url"
        }, {
            "tab": "URL Rewrite",
            "group": "Rewrite #3",
            "name": "replaceWith3",
            "type": "text",
            "label": "With",
            "text": "www.public-url.com"
        }, {
            "tab": "URL Rewrite",
            "group": "How it works?",
            "name": "myDescription",
            "type": "description",
            "text": "Simple search and replace is performed before the url is delivered to the mobile device. No regexp."
        }
        /*
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-characters")
        }, {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "password",
            "type": "text",
            "label": i18n.get("password"),
            "text": i18n.get("x-characters-pw"),
            "masked": true
        }, {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        }, {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myCheckbox",
            "type": "checkbox",
            "label": i18n.get("enable")
        }, {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myButton",
            "type": "button",
            "label": i18n.get("disconnect"),
            "text": i18n.get("logout")
        }, {
            "tab": "Details",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function(value) {
                return (value * 100).floor() + "%";
            }
        }, {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function(value) {
                return value + "%";
            }
        }, {
            "tab": "Details",
            "group": "Food",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": {
                "groups": [
                    "Hot", "Cold",
                ],
                "values": [{
                        "value": "hot",
                        "text": "Very hot",
                        "group": "Hot",
                    }, {
                        "value": "Medium",
                        "group": 1,
                    }, {
                        "value": "Cold",
                        "group": 2,
                    },
                    ["Non-existing"]
                ],
            },
        }, {
            "tab": "Details",
            "group": "Food",
            "name": "myListBox",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        }, {
            "tab": "Details",
            "group": "Food",
            "name": "myRadioButtons",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        } /**/
    ],
    "alignment": [
        /*[
            "username",
            "password"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]*/
    ]
};