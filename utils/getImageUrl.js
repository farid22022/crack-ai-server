const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.img_API_KEY}`
const getImageUrl = async (buffer,prompt) =>{
    const imageFormData = new FormData();
    imageFormData.append(
        "image",
        new Blob([buffer], { type: "image/jpeg" }),
        `${prompt}.jpg`
    );

    const response = await fetch(image_hosting_api, {
        method: "POST",
        // headers :{
        //     "contest-type":"multipart/form-data"
        // },
        body: imageFormData,
    });
    console.log(response)

    const imagData = await response.json();
    console.log(imagData,"from imageData");
    return imagData;
}

module.exports = getImageUrl;