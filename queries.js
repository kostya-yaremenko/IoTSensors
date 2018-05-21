var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://kostya:qaz@localhost:5432/IoT';//6796
var db = pgp(connectionString);

// getAllSensors
// getSingleSensor
// createSensor
// updateSensor
// removeSensor

function getAllDevices(req, res, next) {
    db.any('select * from Devices')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSingleDevice(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from Devices where Name = $1', pupID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createDevice(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into Devices(id, Name, Description, ImgPath, ConfigeFile, Company)' +
        'values($(id), ${name}, ${description}, ${img_path}, ${confige_file}, ${company})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateDevice(req, res, next) {
    db.none('update Devices set id=$1, Name=$2, Description=$3, ImgPath=$4, ConfigeFile=$5, Company=$6',
        [req.body.name, req.body.breed, parseInt(req.body.age),
            req.body.sex, parseInt(req.params.id)])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removeDevice(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.result('delete from Devices where Name = $1', pupID)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} puppy`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    getAllDevices: getAllDevices,
    getSingleDevice: getSingleDevice,
    createDevice: createDevice,
    updateDevice: updateDevice,
    removeDevice: removeDevice,

    // createChanel: createChanel,
    // updateChanel: updateChanel,
    // removeChanel: removeChanel,
    // createUser: createUser,
    // updateUser: updateUser,
    // removeUser: removeUser
};