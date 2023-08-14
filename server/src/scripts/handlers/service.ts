const wrapper = async (module: any) => {
    try {
        return await module()
    }
    catch (err) {
        console.log(err)
        throw new Error('An error occurred')
    }
}

export default {
    wrapper
}
