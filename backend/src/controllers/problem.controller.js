import { errorHandler, createError } from "../utils/errorHandler.js";
import data from "../../db/problems.json" assert { type: "json" };

export const ProblemDataByID = async (req, res, next) => {
    try {
        const ProblemID = req.params.id;
        const problemData = data[ProblemID]?.problemData;
        if (problemData) {
            console.log("ProblemID: ", ProblemID);
            res.status(200).json(problemData);
        } else {
            throw createError("Invalid Problem ID.", 404);
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
