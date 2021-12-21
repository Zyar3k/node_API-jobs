const getAllJobs = async (req, res) => {
  res.send("get all jobs");
  //   const jobs = await Job.find();
  //   res.send(jobs);
};

const getJob = async (req, res) => {
  res.send("get job");
  //   const job = await Job.findById(req.params.id);
  //   res.send(job);
};

const createJob = async (req, res) => {
  res.send("create job");
  //   const job = await Job.create(req.body);
  //   res.send(job);
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
