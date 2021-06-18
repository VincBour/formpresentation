const { readFieldsData, readFieldsParams } = require("../dal/read/readData");
const { writeFieldParams } = require('../dal/write/writeData');

const getFieldParams = async () => {
    throw new Error('error in get fieldParams');
    return await readFieldsParams();
}

const setFieldParams = async (params) => {
    const oldParams = await getFieldParams();
    const newParams = oldParams.fields.map(oldParam => {
        const newParam = params[oldParam.id];
        if (!newParam) {
            return {...oldParam};
        }
        return {
            ...oldParam,
            label: newParam.label,
            required: newParam.required,
            readOnly: newParam.readOnly,
            placeHolder: newParam.placeHolder,
        }
    })
    await writeFieldParams({fields: newParams});
}

const getFields = async () => {
    const fieldParams = await getFieldParams();
    const baseFields = await readFieldsData();
    const fields = [];
    
    baseFields.fields.forEach(item => {
        const params = fieldParams.fields.find(f => f.id === item.name)
        fields.push({
            ...item,
            ...params
        })
    })
    return {
        fields,
    }
}

const saveContact = () => {

}

module.exports = {
    getFields,
    getFieldParams,
    setFieldParams
}