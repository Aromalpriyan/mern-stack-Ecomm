import express from "express"
import { createCollection, deleteCollection, getAllCollection, singleCollection, upadteCollection } from "../controllers/collectionControllers.js"

const router = express.Router()

// routes
// create Collection | method: post
router.post("/create-collection",createCollection)

// get all collection
router.get("/get-all-collection",getAllCollection)

//delete colection
router.delete("/delete-collection/:id", deleteCollection)

// single collection
router.get("/single-collection/:id", singleCollection)

//update collection
router.put("/update-collection/:id", upadteCollection)

// pro

export default router;