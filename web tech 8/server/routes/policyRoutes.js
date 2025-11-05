const express = require("express");
const router = express.Router();
const Policy = require("../models/Policy");

// GET - Retrieve all policies
router.get("/", async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 });
    res.json(policies);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching policies",
      error: error.message,
    });
  }
});

// GET - Retrieve a single policy by ID
router.get("/:id", async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }
    res.json(policy);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching policy",
      error: error.message,
    });
  }
});

// POST - Create a new policy
router.post("/", async (req, res) => {
  try {
    const policy = new Policy(req.body);
    const savedPolicy = await policy.save();
    res.status(201).json(savedPolicy);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        message: "Policy number already exists",
      });
    } else {
      res.status(400).json({
        message: "Error creating policy",
        error: error.message,
      });
    }
  }
});

// PUT - Update an existing policy
router.put("/:id", async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }
    res.json(policy);
  } catch (error) {
    res.status(400).json({
      message: "Error updating policy",
      error: error.message,
    });
  }
});

// DELETE - Delete a policy
router.delete("/:id", async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }
    res.json({ message: "Policy deleted successfully", policy });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting policy",
      error: error.message,
    });
  }
});

module.exports = router;
