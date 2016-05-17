/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abril-fatface, serif': '<script src=\"http://use.edgefonts.net/abril-fatface:n4,i4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wooden-background',
                            type: 'image',
                            rect: ['0px', '1px', '1280px', '907px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wooden-background.jpg",'0px','0px']
                        },
                        {
                            id: 'Text1',
                            type: 'text',
                            rect: ['0px', '7px', '187px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(184, 184, 184, 0.741176); font-size: 43px;\">Rowlg&nbsp;</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['437px', '846px', '522px', '91px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Made by&nbsp;</p><p style=\"margin: 0px;\">Copyright © 2016. All rights reserved.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(184,184,184,0.74)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['537px', '846px', '202px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgba(184, 184, 184, 0.741176); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">loghmanmaroofi.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(184,184,184,0.7412)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'photo',
                            type: 'image',
                            tag: 'img',
                            rect: ['239px', '227px', '776px', '484px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"photo1.jpg",'0px','0px']
                        },
                        {
                            id: 'buttonNext',
                            type: 'image',
                            rect: ['999px', '749px', '74px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["16px", "16px", "16px", "16px 16px"],
                            fill: ["rgba(0,0,0,0)",im+"button.png",'0px','0px'],
                            boxShadow: ["", 3, 3, 10, 0, "rgba(0,0,0,1.00)"]
                        },
                        {
                            id: 'buttonBack',
                            display: 'none',
                            type: 'image',
                            rect: ['209px', '749px', '74px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["16px", "16px", "16px", "16px 16px"],
                            fill: ["rgba(0,0,0,0)",im+"button.png",'0px','0px'],
                            boxShadow: ["", -3, -3, 10, 0, "rgba(0,0,0,1.00)"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'countText',
                            type: 'text',
                            rect: ['856px', '662px', '159px', '44px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1 of 5</p>",
                            font: ['abril-fatface, serif', [24, ""], "rgba(212,212,212,0.95)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['496px', '143px', '234px', '44px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Images</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(212,212,212,0.95)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['393', '1051', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(212,212,212,0.9529)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '907px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${buttonBack}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Rowlg-Images_edgeActions.js");
})("EDGE-98924573");
