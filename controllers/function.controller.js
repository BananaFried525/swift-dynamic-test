const httpService = require('../services/http.service');
const functionService = require('../services/function.service');
const { Response } = require('../models/response.models')

exports.findMax = async (req, res) => {
    try {
        const respData = await httpService.get('http://3.1.189.234:8091/data/ttntest');
        const bodyList = JSON.parse(respData.body);
        const maxObject = functionService.max(bodyList);
        res.status(200).json(maxObject);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.findMin = async (req, res) => {
    try {
        const respData = await httpService.get('http://3.1.189.234:8091/data/ttntest');
        const bodyList = JSON.parse(respData.body);
        const minObject = functionService.min(bodyList);
        res.status(200).json(minObject);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.findAverage = async (req, res) => {
    const resp = new Response();
    try {
        const respData = await httpService.get('http://3.1.189.234:8091/data/ttntest');
        const bodyList = JSON.parse(respData.body);
        const avgNum = functionService.average(bodyList);
        resp.resultMessage = "success";
        resp.resultData.average = avgNum;
        res.status(200).json(resp);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.row = async (req, res) => {
    try {
        let { row } = req.params;
        const resposenData = await httpService.get('http://3.1.189.234:8091/data/ttntest');
        const bodyJson = JSON.parse(resposenData.body);
        const ret = functionService.row(bodyJson, row);
        const retData = {
            data: ret,
            amount: ret.length,
            startAt: row || 0
        }
        res.status(200).json(retData);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}