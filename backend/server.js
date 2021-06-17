const express = require('express');
const { getFieldsData } = require('./data/getFieldsData');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const app = express();

const port = 8087;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get('/data', async (req, res) => {
    const fields = await readFile('./data/getFieldsData.json', 'utf8');
    res.status(200).json(JSON.parse(fields));
});

app.post('/createcontact', (req, res) => {
    res.status(200).json({
        field: 'name',
        message: 'name already used'
    });
});
app.post('/sendform', (req, res) => {
    console.log('SEND FORM', req.body);
    return res.redirect('http://localhost:8086/#/thanks');
})

app.get('/getparams', async (req, res) => {
    const data = await readFile('./data/getFieldsParams.json', 'utf8');
    
    res.status(200).json(JSON.parse(data))
})

app.post('/saveparams', async (req, res) => {
    const fields = await readFile('./data/getFieldsData.json', 'utf8');
    const params = await readFile('./data/getFieldsParams.json', 'utf8');
    const data = req.body;
    console.log('DATA', data);
    const newFields = setNewFields(JSON.parse(fields), data);
    const newParams = setNewParams(JSON.parse(params), data);
    await writeFile('./data/getFieldsData.json', JSON.stringify(newFields));
    await writeFile('./data/getFieldsParams.json', JSON.stringify(newParams));
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });

  function setNewFields(fields, data) {
      const newFields = {
          fields: []
      }
      
      fields.fields.forEach(item => {
          const values = data[item.name];
          console.log('VALUES', values);
          newFields.fields.push({
              type: item.type,
              name: item.name,
              inititialValue: item.inititialValue,
              visible: item.visible,
              required: values ? values.required : item.required,
              label: values ? values.label : item.label,
              readOnly: values ? values.readOnly : item.readOnly,
              placeHolder: values ? values.placeHolder : item.placeHolder,
          })
      })
      console.log('NEW_FIELDS', newFields);
      return newFields;
  }

  function setNewParams(params, data) {
    const newParams = {
        fields:[]
    }
    params.fields.forEach(item => {
        const values = data[item.id];
        newParams.fields.push({
            id: values ? values.id : item.id,
            label: values ? values.label : item.label,
            required: values ? values.required :item.required,
            readOnly: values ? values.readOnly : item.readOnly,
            placeHolder: values ? values.placeHolder : item.placeHolder,
        })
    })
    console.log('NEW_PARAMS', newParams);
    return newParams;
}