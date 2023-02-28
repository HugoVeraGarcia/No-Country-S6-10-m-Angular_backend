const { Code } = require('../models/code.model')


const codes = [
    {
        code: '52',
        country: 'México'
    },
    {
        code: '51',
        country: 'Perú'
    },
    {
        code: '54',
        country: 'Argentina'
    }
]

// utils
const { catchAsync } = require('../utils/catchAsync');

let code = '51'
let country = 'Perú'


const preloadData = catchAsync(async (req, res, next) => {

    const newCode = await Code.create({
        code,
        country,
    });
    res.status(201).json({
        status: 'Success',
        message: 'Code has been created',
        newCode
    });
})

const deleteCode = catchAsync(async (req, res, next) => {
    const { codex } = req;

    await codex.update({ active: false });

    res.status(201).json({
        status: 'success',
        message: `Code has been deleted`,
    });
});

const updateCode = catchAsync(async (req, res, next) => {
    const { codex } = req;
    const { code, country } = req.body;

    await codex.update({ code, country });
    res.status(200).json({ status: 'success', message: 'Code has been updated', codex });
  });



module.exports = {
    preloadData
};




