export const createError = (msg, statusCode) => {
    const error = new Error(msg);
    error.statusCode = statusCode || 400;
    return error;
};

export const errorHandler = (res, error) => {
    console.log("Error: ", error);
    res.statusCode(error.statusCode).json({ error: error.message });
};
