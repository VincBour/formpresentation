import { schemaValidator } from "@talentsoft/forms";

const fieldsExemple = {
    "fields": [
        {
            "type": "text",
            "name": "name",
            "initialValues": '',
            "visible": true,
            "required": true,
            "label": "Name",
            "readOnly": false,
            "placeHolder": "your name",
            "validation": schemaValidator.string().required(),
        },
        {
            "type": "text",
            "name": "email",
            "initialValues": '',
            "visible": true,
            "required": true,
            "label": "e-mail",
            "readOnly": false,
            "placeHolder": "your email",
            "validation": schemaValidator.string().required(),
        },
        {
            "type": "text",
            "name": "message",
            "initialValue": '',
            "visible": true,
            "label": "Message",
            "readOnly": false,
            "placeHolder": "",
            "validation": schemaValidator.string().required(),
        }
    ]
}

// {
//     "fields": [
//         {
//             "id": "name",
//             "visible": true,
//             "required": true,
//             "label": "Rocky",
//             "readOnly": false,
//             "placeHolder": ""
//         },
//         {
//             "id": "email",
//             "visible": true,
//             "required": true,
//             "label": "e-mail",
//             "readOnly": false,
//             "placeHolder": ""
//         },
//         {
//             "id": "message",
//             "visible": true,
//             "label": "Message",
//             "readOnly": false,
//             "placeHolder": "",
//             "multiline": true,
//             "rows": 4,
//             "rowsMax": 6
//         }
//     ]
// } 