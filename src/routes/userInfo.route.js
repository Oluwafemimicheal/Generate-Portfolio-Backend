import express from "express"
import createInputVerification from "../config/inputData.js";
import userInfoSchema from "../model/user.info.model.js"
import { success } from "zod";

const userInfoRouter = express.Router();

userInfoRouter.post("/create-portfolio", async (req, res) => {

  try {
    const result = createInputVerification.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }

    const validatedInputData = result.data;
    const createNewUser = await userInfoSchema.create(validatedInputData);
    if (!createNewUser) {
      return res.status(400).json({
        success: false,
        message: "Please re-check your form input!"
      })
    }

    return res.status(201).json({
      success: true,
      message: "Creating your portfolio",
      userInfo: createNewUser
    })


  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal error occurred!",
      error: error
    })
  }
})

userInfoRouter.get("/info", async (req, res) => {
  try {
    const user = await userInfoSchema.find({})

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "User upload successful",
      user: user
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal error occurred!",
      error: error
    })
  }
})

userInfoRouter.get("/info/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await userInfoSchema.findById(id)

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "User upload successful",
      user: user
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal error occurred!",
      error: error
    })
  }
})

userInfoRouter.post("/info/update/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updatedResult = createInputVerification.safeParse(req.body)
  
    if (!updatedResult.success) {
      return res.status(400).json({ errors: result.error.errors });
    }

    const verifiedUpdated = updatedResult.data;
    const updateUserInfo = await userInfoSchema.findByIdAndUpdate(id, verifiedUpdated, { returnDocument: "after" })

    if (!updateUserInfo) {
      res.status(404).json({
        success: false,
        message: `User with the current ID ${id} is not found!`,
      })
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updateUserInfo
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal error occurred!",
      error: error
    })
  }
})

userInfoRouter.post("/info/delete/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleteUserInfo = await userInfoSchema.findByIdAndDelete(id)

    if (!deleteUserInfo) {
      res.status(404).json({
        success: false,
        message: `User with the current ID ${id} is not found!`,
      })
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deleteUserInfo
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal error occurred!",
      error: error
    })
  }
})

export default userInfoRouter;