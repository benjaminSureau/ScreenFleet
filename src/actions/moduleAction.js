import * as apiModule from '../actions/moduleApi'

export async function createSplitHorizontally(id) {
    console.log('test');
    let firstModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let secondModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let horizontallyModule =
        {
            _id: id,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "HORIZONTAL",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id]
        };

    return await apiModule.putModule(horizontallyModule._id, horizontallyModule)
        .then((res) => {
            return {
                mainModule: res.data.module,
                firstModuleResult,
                secondModuleResult
            };
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function createSplitVertically(id) {
    let firstModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let secondModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let verticallyModule =
        {
            _id: id,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "VERTICAL",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id]
        };

    return await apiModule.putModule(verticallyModule._id, verticallyModule)
        .then((res) => {
            return {
                mainModule: res.data.module,
                firstModuleResult,
                secondModuleResult
            };
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function createSplitToFourth(id) {
    let firstModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let secondModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let thirdModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let fourthModuleResult = await apiModule.createModule(
        {
            type: "BASE",
            mode: null,
            numberOfSlides: 0,
            splitMode: null,
            resources: null,
            nextModuleId: null

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err);
        });

    let moduleFourth =
        {
            _id: id,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "FOURTH",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id, thirdModuleResult._id, fourthModuleResult._id]
        };

    return await apiModule.putModule(moduleFourth._id, moduleFourth)
        .then((res) => {
            return {
                mainModule: res.data.module,
                firstModuleResult,
                secondModuleResult,
                thirdModuleResult,
                fourthModuleResult
            };
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function createSplitSlide(module , nbSlide) {
    let slideModulePromises = [];

    for (let i = 0; i < 10; i++) {
        slideModulePromises.push(apiModule.createModule(
            {
                type: "BASE",
                mode: null,
                numberOfSlides: 0,
                splitMode: null,
                resources: null,
                nextModuleId: null

            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                alert(err);
            }));
    }
    let modules = await Promise.all(slideModulePromises);
    let slideModules =
        {
            _id: module._id,
            type: "MULTI",
            mode: "SLIDE_VIEW",
            numberOfSlides: nbSlide,
            splitMode: null,
            resources: null,
            nextModuleId: modules.map((module) => {
                return module._id;
            })
        };
    return await apiModule.putModule(slideModules._id, slideModules)
        .then((res) => {
            return res.data.module;
        })
        .catch((err) => {
            console.log(err);
        });
}
///////////////////
// Delete Module //
///////////////////
export function deleteModule(module) {
    return null;
}


//////////////////////////////
// Add ressources to module //
//////////////////////////////
export function addStreamToModule(module, streamUrl) {

    return null;
}

export function addVideoToModule(module, videoUrl) {
    return null;
}

export function addImageToModule(module, imageUrl) {
    return null;
}

export async function putResourceInModule(module, url) {
    module.resource = {
        multimediaLink: url
    };
    return await apiModule.putModule(module._id, module);
}


/////////////////////
// get module data //
/////////////////////
let data = null;

export async function getModuleData(moduleId) {
    data = null;
    return await apiModule.getModules(moduleId)
        .then((res) => {
            if (res.data.modules[0].mode === "SPLIT_VIEW"){
                data = {id: res.data.modules[0]._id,type: res.data.modules[0].mode.concat('', res.data.modules[0].splitMode), number: res.data.modules[0].numberOfSlides, data: null, isParent: true, submodules: res.data.modules[0].nextModuleId};
            } else if (res.data.modules[0].mode === null){
                data = {id: res.data.modules[0]._id,type: null, number: res.data.modules[0].numberOfSlides, data: null, isParent: false, submodules: []};

            } else if (res.data.modules[0].mode === "PICTURE") {
                data = {id: res.data.modules[0]._id,type: null, number: res.data.modules[0].numberOfSlides, data: null, isParent: false, submodules: []};

            } else {
                data = {id: res.data.modules[0]._id,type: res.data.modules[0].mode, number: res.data.modules[0].numberOfSlides, data: null, isParent: true, submodules: res.data.modules[0].nextModuleId};
            }

            if (res.data.modules[0].nextModuleId && res.data.modules[0].nextModuleId.length) {

                res.data.modules[0].nextModuleId.forEach(function(element) {
                    getSubModulesData(element, res);

                });
            }

            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log(err);
            return null;

        });
}

export function getSubModulesData(elementId, res) {
    let index = data.submodules.indexOf(elementId);

    res.data.modules.forEach(function(subElement) {
        if (subElement._id === elementId){
            if (subElement.mode === "SPLIT_VIEW"){
                data.submodules[index] =
                    {id: subElement._id,type: subElement.mode.concat('', subElement.splitMode), number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            } else if (subElement.mode === null){
                data.submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else if (subElement.mode === "PICTURE"){
                data.submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else {
                data.submodules[index] =
                    {id: subElement._id,type: subElement.mode, number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            }
            if (subElement.nextModuleId && subElement.nextModuleId.length) {

                subElement.nextModuleId.forEach(function (element) {
                    getSecondSubModulesData(element, res, index);

                });
            }
        }
    });
}

export function getSecondSubModulesData(elementId, res, first) {
    let index = data.submodules[first].submodules.indexOf(elementId);

    res.data.modules.forEach(function(subElement) {
        if (subElement._id === elementId){
            if (subElement.mode === "SPLIT_VIEW"){
                data.submodules[first].submodules[index] =
                    {id: subElement._id,type: subElement.mode.concat('', subElement.splitMode), number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            } else if (subElement.mode === null){
                data.submodules[first].submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else if (subElement.mode === "PICTURE"){
                data.submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else {
                data.submodules[first].submodules[index] =
                    {id: subElement._id,type: subElement.mode, number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            }
            if (subElement.nextModuleId && subElement.nextModuleId.length) {

                subElement.nextModuleId.forEach(function (element) {
                    getThirdSubModulesData(element, res, first, index);

                });
            }
        }
    });
}

export function getThirdSubModulesData(elementId, res, first, second) {

    let index = data.submodules[first].submodules[second].submodules.indexOf(elementId);
    res.data.modules.forEach(function(subElement) {
        if (subElement._id === elementId){
            if (subElement.mode === "SPLIT_VIEW"){
                data.submodules[first].submodules[second].submodules[index] =
                    {id: subElement._id,type: subElement.mode.concat('', subElement.splitMode), number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            } else if (subElement.mode === null){
                data.submodules[first].submodules[second].submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else if (subElement.mode === "PICTURE"){
                data.submodules[index] =
                    {id: subElement._id,type: null, number: subElement.numberOfSlides, data: null, isParent: false, submodules: []};
            } else {
                data.submodules[first].submodules[second].submodules[index] =
                    {id: subElement._id,type: subElement.mode, number: subElement.numberOfSlides, data: null, isParent: true, submodules: subElement.nextModuleId};
            }
        }
    });
}
