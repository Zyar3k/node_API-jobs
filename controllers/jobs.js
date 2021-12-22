const Job = require("../models/Job");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  res.send("get job");
  //   const job = await Job.findById(req.params.id);
  //   res.send(job);
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send("update job");
  //   const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });
  //   res.send(job);
};

const deleteJob = async (req, res) => {
  res.send("delete job");
  //   const job = await Job.findByIdAndDelete(req.params.id);
  //   res.send(job);
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
