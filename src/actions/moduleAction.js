import * as apiModule from '../actions/moduleApi'

export async function createSplitHorizontally(module) {
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
            _id: "5cdd40a72c2c9e04a8198447"/*module._id*/,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "HORIZONTAL",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id]
        };

    return await apiModule.putModule(horizontallyModule._id, horizontallyModule)
        .then((res) => {
            console.log('======');
            console.log(res);
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

export async function createSplitVertically(module) {
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
            _id: "5cdd40a72c2c9e04a8198447"/*module._id*/,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "VERTICAL",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id]
        };

    return await apiModule.putModule(verticallyModule._id, verticallyModule)
        .then((res) => {
            console.log('======');
            console.log(res);
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

export async function createSplitByFourth(module) {
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

    let verticallyModule =
        {
            _id: "5cde7098fe08f42e144ed3a7"/*module._id*/,
            type: "MULTI",
            mode: "SPLIT_VIEW",
            numberOfSlides: 0,
            splitMode: "VERTICAL",
            resources: null,
            nextModuleId: [firstModuleResult._id, secondModuleResult._id, thirdModuleResult._id, fourthModuleResult._id]
        };

    return await apiModule.putModule(verticallyModule._id, verticallyModule)
        .then((res) => {
            console.log('======');
            console.log(res);
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
            _id: "5cde71c1fe08f42e144ed3b4"/*module._id*/,
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
