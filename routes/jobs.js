const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  createJob,
  deleteJob,
  getJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").delete(deleteJob).patch(updateJob).get(getJob);

module.exports = router;
