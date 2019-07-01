let getPositionPromise = null

if ("geolocation" in navigator) {
    getPositionPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            pos => resolve(pos),
            err => reject(err),
        )
    })

} else {
    /* geolocation IS NOT available */
}

export { getPositionPromise }